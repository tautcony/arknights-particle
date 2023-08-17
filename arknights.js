/* eslint-disable no-cond-assign */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-finally */

/* global _, THREE, anime */
/* global pd_rhodes, pd_rhine, pd_lungmen, pd_penguin, pd_title_information, pd_title_staff, pd_title_world, pd_title_media */

var particleImage = "./arknights/static/particle.7ff7f9a6de6e31926ddb.png";
var fireflyImage = "./arknights/static/firefly.5ec707a0de1eca4a0765.png";

// Be
var AnimationQueue = {
  queue: [],
  add: function (t) {
    return this.queue.indexOf(t) < 0 && this.queue.push(t), this;
  },
  remove: function (t) {
    var e = this.queue.indexOf(t);
    return e >= 0 && this.queue.splice(e, 1), this;
  },
  fps: 61,
  rafId: NaN,
  lastUpdated: NaN,
  update: function (t) {
    if (!this.lastUpdated || t - this.lastUpdated > 1e3 / this.fps) {
      this.lastUpdated = t;
      for (let handler of this.queue) {
        handler(t);
      }
    }
    this.rafId = window.requestAnimationFrame(this.update.bind(this));
  },
  init: function () {
    return (
      (this.rafId = window.requestAnimationFrame(this.update.bind(this))), this
    );
  },
  destroy: function () {
    window.cancelAnimationFrame(this.rafId);
  },
}.init();

// Ue
var ResizeHandler = {
  queue: [],
  init: function () {
    var self = this;
    window.addEventListener(
      "resize",
      _.throttle(function () {
        for (let handler of self.queue) {
          handler();
        }
      })
    );
    return this;
  },
  add: function (t) {
    return this.queue.indexOf(t) < 0 && this.queue.push(t), this;
  },
  remove: function (t) {
    var e = this.queue.indexOf(t);
    return e >= 0 && this.queue.splice(e, 1), this;
  },
}.init();

// Li
class CanvasWebgl {
  canvas;
  constructor() {
    this.fitViewport = _.throttle(function () {
      var e = this;
      var n = e.width;
      var r = e.height;
      var i = e.resoluteWidth;
      var a = e.resoluteHeight;
      if (!(this.canvas.width === i && this.canvas.height === a)) {
        this.renderer.setSize(i, a, false);
        this.camera.near = 110;
        this.camera.far = 1e3;
        this.camera.aspect = n / r;
        this.camera.fov = THREE.MathUtils.radToDeg(
          2 * Math.atan(r / 2 / 160)
        );
        this.camera.updateProjectionMatrix();
        this.camera.position.set(0, 0, 160);
        this.camera.lookAt(0, 0, 0);
      }
    });
    this.update = () => {
      this.fitViewport();
      this.renderer.render(this.scene, this.camera);
    };
    this.canvas = document.getElementById("webgl");
    if (!this.canvas)
      throw new Error("no webgl canvas");
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    AnimationQueue.add(this.update);
  }
  stop() {
    AnimationQueue.remove(this.update);
  }
  static get instance() {
    return (
      CanvasWebgl._instance || (CanvasWebgl._instance = new CanvasWebgl()),
      CanvasWebgl._instance
    );
  }
  get width() {
    return this.canvas.clientWidth;
  }
  get height() {
    return this.canvas.clientHeight;
  }
  get resoluteWidth() {
    return "desktop" === ResponsiveModeHandler.mode
      ? this.canvas.clientWidth
      : Math.round(this.canvas.clientWidth * window.devicePixelRatio);
  }
  get resoluteHeight() {
    return "desktop" === ResponsiveModeHandler.mode
      ? this.canvas.clientHeight
      : Math.round(this.canvas.clientHeight * window.devicePixelRatio);
  }
}

// He
var ResponsiveModeHandler = {
  queue: [],
  mode: "desktop",
  widthThrottle: 430,
  init: function () {
    var t = this;
    this.mode = window.innerWidth > this.widthThrottle ? "desktop" : "phone";
    ResizeHandler.add(function () {
      var r = window.innerWidth;
      var updated = false;
      if (r > t.widthThrottle && "phone" === t.mode) {
        t.mode = "desktop";
        updated = true;
      } else if (r <= t.widthThrottle && "desktop" === t.mode) {
        t.mode = "phone";
        updated = true;
      }
      if (updated) {
        for (let handler of t.queue) {
          handler(t.mode);
        }
      }
    });
    return this;
  },
  add: function (t) {
    if (this.queue.indexOf(t) < 0) {
      this.queue.push(t);
    }
    return this;
  },
  remove: function (t) {
    var e = this.queue.indexOf(t);
    e >= 0 && this.queue.splice(e, 1);
    return this;
  },
}.init();

// qi
var TouchableHandler = {
  x: 0,
  y: 0,
  clientX: 0,
  clientY: 0,
  interactive: false,
  touchable: false,
  init: function () {
    this.clientX = 0.5 * CanvasWebgl.instance.width;
    this.clientY = 0.5 * CanvasWebgl.instance.height;
    for (let eventType of ["mousemove", "touchstart", "touchmove"]) {
      document.addEventListener(
        eventType,
        _.throttle(function (evt) {
          this.interactive = true;
          if ("targetTouches" in evt) {
            this.clientX = evt.targetTouches[0].clientX;
            this.clientY = evt.targetTouches[0].clientY;
            this.x =
              evt.targetTouches[0].clientX - 0.5 * CanvasWebgl.instance.width;
            this.y =
              0.5 * CanvasWebgl.instance.height -
              evt.targetTouches[0].clientY;
          } else {
            this.clientX = evt.clientX;
            this.clientY = evt.clientY;
            this.x = evt.clientX - 0.5 * CanvasWebgl.instance.width;
            this.y = 0.5 * CanvasWebgl.instance.height - evt.clientY;
          }
          var r;
          if (evt.composedPath !== null && evt.composedPath !== undefined) {
              var e = evt.composedPath;
              r = e.call(evt) || [];
          } else {
              r = [];
          }
          for (var flag = false, o = 0; o < 3; o++) {
            var s = r[o];
            var n = s.dataset;
            var cursorValue = null === n || undefined === n ? undefined : n.cursor;
            var tagNames = ["A", "BUTTON", "INPUT"];

            if ("pointer" === cursorValue || tagNames.includes(s.tagName)) {
              flag = true;
              break;
            }
          }
          this.touchable = flag;
        }),
        { passive: true }
      );
    }
    
    for (let eventType of ["touchend", "mouseup"]) {
      document.addEventListener(
        eventType,
        _.throttle(function () {
          if ("phone" === ResponsiveModeHandler.mode) {
            this.interactive = false;
            this.x = 0;
            this.y = 0;
          }
        }),
        { passive: true }
      );
    }
    return ResizeHandler.add(this.resize.bind(this)), this;
  },
  resize: function () {
    this.interactive = false;
    this.x = 0;
    this.y = 0;
  },
}.init();


function PointStruct(t) {
  this.run = 0;
  this.pointIdx = t.pointIdx;
  this.speed = t.speed;
  this.point = t.point;
  this.color = t.color;

  this.x = this.point[0];
  this.y = this.point[1];
  this.z = this.point[2];
  this.r = this.color[0];
  this.g = this.color[1];
  this.b = this.color[2];
  this.a = this.color[3];
}

var EnumEffect = {
  FIXED: 0,
  GATHER: 1,
  SPREAD: 2,
  PERSPECTIVE: 3,
  0: "FIXED",
  1: "GATHER",
  2: "SPREAD",
  3: "PERSPECTIVE",
};

function GatherOrSpread(particle, model, transform, factor) {
  if (model) {
    var i = 1 / particle.speed;
    if (particle.pointIdx >= model.count)
      return (particle.a += (-1 - particle.a) * i), void particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    var a = particle.pointIdx;
    var o = _.slice(model.points.slice(7 * a, 7 * a + 7), 0, 7);
    var s = o[0];
    var l = o[1];
    var u = o[2];
    var c = o[3];
    var h = o[4];
    var d = o[5];
    var f = o[6];
    var p = TouchableHandler.interactive ? TouchableHandler.x - particle.x : 0;
    var m = TouchableHandler.interactive ? TouchableHandler.y - particle.y : 0;
    var v = Math.sqrt(p * p + m * m);
    var g = 1 / (1 + v) / (1 + v);
    var y = transform.sc * s + transform.x - particle.x;
    var b = transform.sc * l + transform.y - particle.y;
    var x = u - particle.z;
    particle.x += y * i + factor * p * g;
    particle.y += b * i + factor * m * g;
    particle.z += x * i;
    particle.point.set([particle.x, particle.y, particle.z]), (particle.r += (c - particle.r) * i);
    particle.g += (h - particle.g) * i;
    particle.b += (d - particle.b) * i;
    particle.a += (f - particle.a) * i;
    particle.color.set([particle.r, particle.g, particle.b, particle.a]);
  }
}
var ParticalEffect = {};
ParticalEffect[EnumEffect.FIXED] = function (particle, model, transform) {
  if (model) {
    var r = 1 / particle.speed;
    if (particle.pointIdx >= model.count)
      return (particle.a += (-1 - particle.a) * r), void particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    var i = particle.pointIdx;
    var a = _.slice(model.points.slice(7 * i, 7 * i + 7), 0, 7);
    var o = a[0];
    var s = a[1];
    var l = a[2];
    var u = a[3];
    var c = a[4];
    var h = a[5];
    var d = a[6];
    var f = transform.sc * o + transform.x - particle.x;
    var p = transform.sc * s + transform.y - particle.y;
    var m = l - particle.z;
    particle.x += f * r;
    particle.y += p * r;
    particle.z += m * r;
    particle.point.set([particle.x, particle.y, particle.z]), (particle.r += (u - particle.r) * r);
    particle.g += (c - particle.g) * r;
    particle.b += (h - particle.b) * r;
    particle.a += (d - particle.a) * r;
    particle.color.set([particle.r, particle.g, particle.b, particle.a]);
  }
};
ParticalEffect[EnumEffect.GATHER] = function (particle, model, transform) {
  GatherOrSpread(particle, model, transform, 40);
};
ParticalEffect[EnumEffect.SPREAD] = function (particle, model, transform) {
  GatherOrSpread(particle, model, transform, -100);
};
ParticalEffect[EnumEffect.PERSPECTIVE] = function (particle, model, transform) {
  var Ji = 1 / 3e3;
  var $i = 0.03;
  if (model) {
    var r = 0.08;
    if (particle.pointIdx >= model.count)
      return (particle.a += (-1 - particle.a) * r), void particle.color.set([particle.r, particle.g, particle.b, particle.a]);
    var i = particle.pointIdx;
    var a = _.slice(model.points.slice(7 * i, 7 * i + 7), 0, 7);
    var o = a[0];
    var s = a[1];
    var l = a[2];
    var u = a[3];
    var c = a[4];
    var h = a[5];
    var d = a[6];
    var f = -Math.atan(TouchableHandler.x * $i * Ji);
    var p = transform.sc * o + transform.x;
    var m = p * Math.cos(f);
    var v = p * Math.sin(f);
    var g = -Math.atan(TouchableHandler.y * $i * Ji);
    var y = transform.sc * s + transform.y;
    var b = y * Math.cos(g);
    var x = l + v + y * Math.sin(g);
    var xx = m - TouchableHandler.x * $i - particle.x;
    var w = b - TouchableHandler.y * $i - particle.y;
    particle.x += xx * r;
    particle.y += w * r;
    particle.z += (x - particle.z) * r;
    particle.point.set([particle.x, particle.y, particle.z]), (particle.r += (u - particle.r) * r);
    particle.g += (c - particle.g) * r;
    particle.b += (h - particle.b) * r;
    particle.a += (d - particle.a) * r;
    particle.color.set([particle.r, particle.g, particle.b, particle.a]);
  }
};

class mainLoader {
  constructor(config) {
    var n = config.particleNum;
    var i = config.speedRange[0];
    var a = config.speedRange[1];
    this.mode = EnumEffect.SPREAD;
    this.transform = { x: 0, y: 0, sc: 1, pointSize: 3 };
    this.getUpdatedTransform = function () {};
    this.updateTransform = function () {
      var transform = self.getUpdatedTransform() || {
          x: 0,
          y: 0,
          sc: 1,
          pointSize: 3,
        };
      var n = transform.x;
      var r = transform.y;
      var i = transform.sc;
      var a = transform.pointSize;
      self.transform.x = null != n ? n : self.transform.x;
      self.transform.y = null != r ? r : self.transform.y;
      self.transform.sc = null != i ? i : self.transform.sc;
      self.uPointSize.value = null != a ? a : self.transform.pointSize;
      return self;
    };
    this.update = function () {
      self.updateTransform();
      for (let particle of self.particles) {
        ParticalEffect[self.mode](particle, self.model, self.transform);
      }
      self.aPosition.needsUpdate = true;
      self.aColor.needsUpdate = true;
    };
    var o = new Float32Array(3 * n);
    var s = new Float32Array(4 * n);
    this.particles = _.fill(new Array(n), 0).map(function (t, e) {
      var n = (0.5 - Math.random()) * CanvasWebgl.instance.width;
      var r = (0.5 - Math.random()) * CanvasWebgl.instance.height;
      var l = 500 * (0.5 - Math.random());
      o.set([n, r, l], 3 * e);
      s.set([0.5, 0.5, 0.5, -1], 4 * e);
      return new PointStruct({
          pointIdx: e,
          point: o.subarray(3 * e, 3 * e + 3),
          color: s.subarray(4 * e, 4 * e + 4),
          speed: _.random(i, a),
        });
    });
    this.model = {
      count: 0,
      points: [],
      size: {
        width: CanvasWebgl.instance.width,
        height: CanvasWebgl.instance.height,
      },
    };
    this.aPosition = new THREE.BufferAttribute(o, 3);
    this.aColor = new THREE.BufferAttribute(s, 4);
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", this.aPosition);
    geo.setAttribute("color", this.aColor);
    this.uPointSize = new THREE.Uniform(1);
    let self = this;
    setTimeout(function() {
      var generatorInstance = function () {
          var t, e, n, r;
          return createAsyncGenerator(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = THREE.Uniform.bind),
                  [4, new THREE.TextureLoader().loadAsync(particleImage)]
                );
              case 1:
                return (
                  (t = new (e.apply(THREE.Uniform, [undefined, i.sent()]))()),
                  (n = new THREE.ShaderMaterial({
                    uniforms: {
                      uTexture: t,
                      uPointSize: self.uPointSize,
                    },
                    vertexShader:
                      "\n                    attribute vec4 color;\n                    varying vec4 vColor;\n                    uniform float uPointSize;\n                    void main() {\n                        vColor = color;\n                        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n                        gl_PointSize = uPointSize;\n                        gl_Position = projectionMatrix * mvPosition;\n                    }\n                ",
                    fragmentShader:
                      "\n                    uniform sampler2D uTexture;\n                    varying vec4 vColor;\n                    void main() {\n                        vec4 texture = texture2D(uTexture, gl_PointCoord);\n                        gl_FragColor = vColor * texture;\n                        // gl_FragColor = vColor;\n                    }",
                    transparent: true,
                    depthTest: false,
                  })),
                  (r = new THREE.Points(geo, n)),
                  CanvasWebgl.instance.scene.add(r),
                  [2]
                );
            }
          });
        };
        return new Promise(function (resolve, reject) {
          function handleNext(result) {
            try {
              processNext(generatorInstance.next(result));
            } catch (err) {
              reject(err);
            }
          }
          function handleThrow(result) {
            try {
              processNext(generatorInstance.throw(result));
            } catch (err) {
              reject(err);
            }
          }
          function processNext(step) {
            var nextValue;
            if (step.done) {
              resolve(step.value)
            } else {
              nextValue = step.value;
              (nextValue instanceof Promise
                ? nextValue
                : new Promise(function (resolvePromise) {
                    resolvePromise(nextValue);
                  })).then(handleNext, handleThrow);
            }
          }
          processNext((generatorInstance = generatorInstance.apply(this, undefined || [])).next());
        });
    }, 0);
  }
  setMode(t) {
    this.mode = t;
    return this;
  }
  setModel(t) {
    this.model = t;
    this.fire();
    return this;
  }
  appear() {
    var t = this.model;
    if (t !== null && t !== undefined) {
      var e = t.shuffle;
      if (e !== null && e !== undefined) {
          e.call(t);
      }
    }
    return this;
  }
  disappear() {
    var t = this.model;
    if (t !== null && t !== undefined) {
        var e = t.disappear;
        if (e !== null && e !== undefined) {
            e.call(t);
        }
    }
    return this;
  }
  fire() {
    AnimationQueue.add(this.update);
    return this;
  }
  setTransform(t) {
    this.getUpdatedTransform = t;
    return this;
  }
  load(t) {
    var e = t.active;
    var n = t.mode;
    var r = t.model;
    var i = t.transform;
    if (e) {
      n && (this.mode = n);
      r && this.setModel(r);
      i && (this.getUpdatedTransform = i);
      this.appear();
    } else {
      this.disappear();
    }
    return this;
  }
  stop() {
    AnimationQueue.remove(this.update);
    return this;
  }

  static get main() {
    if (!mainLoader._main) {
      mainLoader._main = new mainLoader({
        particleNum: 1e4,
        speedRange: [20, 30],
      });
    }
    return mainLoader._main;
  }
  static get sub() {
    if (!mainLoader._sub) {
      mainLoader._sub = new mainLoader({
        particleNum: 1500,
        speedRange: [10, 15],
      });
    }
    return mainLoader._sub;
  }
}

function initParticleData(particle, e) {
  undefined === e && (e = [0.5, 0.5]);
  var r = e[0];
  var i = e[1];
  var a = particle.points.map(function (pt) {
    var a = pt[0];
    var o = pt[1];
    var s = pt[2];
    var l = undefined === s ? 255 : s;
    return [
      a - r * particle.size.width,
      i * particle.size.height - o,
      0,
      1,
      1,
      1,
      (1 * l) / 255,
    ];
  });
  return Object.assign(Object.assign({}, particle), {
    points: [],
    shuffle: function () {
      this.points = _.flattenDepth(_.shuffle(a), 1);
      return this;
    },
    disappear: function () {
      return (
        this.points.forEach(function (t, e, n) {
          var r = e % 7;
          0 === r || 1 === r
            ? (n[e] = t + 500 * (Math.random() - 0.5))
            : r > 2 && r < 6
            ? (n[e] = 0.5)
            : 6 === r && (n[e] = -0.5);
        }),
        this
      );
    },
  }).shuffle();
}

// Qo
var createPromiseWrapper = function (
  target,
  args,
  fulfilledType,
  rejectedType
) {
  return new Promise(function (resolve, reject) {
    function fulfillNext(t) {
      try {
        handlePromise(rejectedType.next(t));
      } catch (t) {
        reject(t);
      }
    }
    function handleRejection(t) {
      try {
        handlePromise(rejectedType.throw(t));
      } catch (t) {
        reject(t);
      }
    }
    function handlePromise(result) {
      var e;
      result.done
        ? resolve(result.value)
        : ((e = result.value),
          e instanceof fulfilledType
            ? e
            : new fulfilledType(function (t) {
                t(e);
              })).then(fulfillNext, handleRejection);
    }
    handlePromise(
      (rejectedType = rejectedType.apply(target, args || [])).next()
    );
  });
};
// ts
var createAsyncGenerator = function (self, fn) {
  var initContext;
  var finalizeContext;
  var record;
  var ctx = {
    label: 0,
    sent: function () {
      if (1 & record[0]) throw record[1];
      return record[1];
    },
    trys: [],
    ops: [],
  };
  var method = { next: step(0), throw: step(1), return: step(2) };
  if ("function" == typeof Symbol) {
    method[Symbol.iterator] = function () {
      return this;
    };
  }
  return method;

  function step(sendValue) {
    return function (input) {
      return (function (send) {
        if (initContext) throw new TypeError("Generator is already executing.");
        for (; ctx; )
          try {
            if (
              ((initContext = 1),
              finalizeContext &&
                (record =
                  2 & send[0]
                    ? finalizeContext.return
                    : send[0]
                    ? finalizeContext.throw ||
                      ((record = finalizeContext.return) &&
                        record.call(finalizeContext),
                      0)
                    : finalizeContext.next) &&
                !(record = record.call(finalizeContext, send[1])).done)
            )
              return record;
            switch (
              ((finalizeContext = 0),
              record && (send = [2 & send[0], record.value]),
              send[0])
            ) {
              case 0:
              case 1:
                record = send;
                break;
              case 4:
                return ctx.label++, { value: send[1], done: false };
              case 5:
                ctx.label++, (finalizeContext = send[1]), (send = [0]);
                continue;
              case 7:
                (send = ctx.ops.pop()), ctx.trys.pop();
                continue;
              default:
                if (
                  !(
                    (record =
                      (record = ctx.trys).length > 0 &&
                      record[record.length - 1]) ||
                    (6 !== send[0] && 2 !== send[0])
                  )
                ) {
                  ctx = 0;
                  continue;
                }
                if (
                  3 === send[0] &&
                  (!record || (send[1] > record[0] && send[1] < record[3]))
                ) {
                  ctx.label = send[1];
                  break;
                }
                if (6 === send[0] && ctx.label < record[1]) {
                  (ctx.label = record[1]), (record = send);
                  break;
                }
                if (record && ctx.label < record[2]) {
                  (ctx.label = record[2]), ctx.ops.push(send);
                  break;
                }
                record[2] && ctx.ops.pop(), ctx.trys.pop();
                continue;
            }
            send = fn.call(self, ctx);
          } catch (t) {
            (send = [6, t]), (finalizeContext = 0);
          } finally {
            initContext = record = 0;
          }
        if (5 & send[0]) throw send[1];
        return { value: send[0] ? send[1] : undefined, done: true };
      })([sendValue, input]);
    };
  }
};

var displayConfig = {
  desktop: {
    width: 1e3,
    height: 1e3,
    x: -180,
    y: 0,
    offset: 200,
    gradient: false,
  },
  phone: {
    width: 900,
    height: 900,
    x: -30,
    y: -150,
    offset: 100,
    gradient: true,
  },
};

// ns
class staffCharLoader {
  constructor(t) {
    var e = this;
    this.canvas = t;
    this.active = false;
    this.animeRunning = false;
    this.tex = null;
    this.loader = new THREE.TextureLoader();
    this.itemWidth = displayConfig.desktop.width;
    this.itemHeight = displayConfig.desktop.height;
    this.itemPosition = new THREE.Vector2(displayConfig.desktop.x, displayConfig.desktop.y);
    this.itemTransOffset = displayConfig.desktop.offset;
    this.itemGradient = false;
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
    });
    this.emptyTexture = new THREE.Texture();
    this.charTextureMap = {};
    this.resize = function () {
      e.canvas.width = CanvasWebgl.instance.width * window.devicePixelRatio;
      e.canvas.height =
          CanvasWebgl.instance.height * window.devicePixelRatio;
      e.renderer.setViewport(0, 0, e.canvas.width, e.canvas.height);
    };
    this.update = function () {
      CanvasWebgl.instance.camera.layers.disableAll();
        CanvasWebgl.instance.camera.layers.enable(1);
        e.renderer.render(
          CanvasWebgl.instance.scene,
          CanvasWebgl.instance.camera
        );
        CanvasWebgl.instance.camera.layers.enableAll();
        CanvasWebgl.instance.camera.layers.disable(1);
    };
    this.checkAndRemove = function () {
      e.active ||
        e.animeRunning ||
        (CanvasWebgl.instance.scene.remove(e.item),
        AnimationQueue.remove(e.update),
        ResizeHandler.remove(e.resize));
    };
    this.geo = new THREE.PlaneGeometry(this.itemWidth, this.itemHeight);

    this.mat = new THREE.ShaderMaterial({
      transparent: true,
      fragmentShader: "uniform sampler2D u_texture;\nuniform float black;\nuniform float opacity;\nuniform bool gradient;\nvarying vec2 vUv;\n\nvoid main() {\n   float o = gradient ? opacity * min(vUv.y * 2.0 - 0.5, 1.0) : opacity;\n   gl_FragColor = texture2D(u_texture, vUv) * vec4(black, black, black, o);\n}",
      vertexShader: "varying vec2 vUv;\n\nvoid main()\n{\n      vUv = uv;\n      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n      gl_Position = projectionMatrix * mvPosition;\n}",
      uniforms: {
        u_texture: { value: this.emptyTexture },
        black: { value: 1 },
        opacity: { value: 0 },
        gradient: { value: this.itemGradient },
      },
    });
    this.item = new THREE.Mesh(this.geo, this.mat);
  }
  resetMode(t) {
    var e = displayConfig[t];
    this.itemWidth = e.width;
    this.itemHeight = e.height;
    this.itemPosition = new THREE.Vector2(e.x, e.y);
    this.itemTransOffset = e.offset;
    this.itemGradient = e.gradient;
    this.mat.uniforms.gradient.value = this.itemGradient;
    this.item.position.set(this.itemPosition.x, this.itemPosition.y, 0),
    this.item.layers.set(1);
    this.renderer.pixelRatio = window.devicePixelRatio;
    if (this.tex) {
      var n = this.tex.image;
      var r = n.width;
      var i = n.height;
      this.item.scale.set(r / this.itemWidth, i / this.itemHeight, 1);
    }
  }
  getPreloadTasks(imageList) {
    var self = this;
    return imageList.map(function (t) {
      return function () {
        return createPromiseWrapper(self, undefined, undefined, function () {
          var e;
          return createAsyncGenerator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, this.loader.loadAsync(t)];
              case 1:
                return (
                  ((e = n.sent()).minFilter = THREE.LinearFilter),
                  (this.charTextureMap[t] = e),
                  [2]
                );
            }
          });
        });
      };
    });
  }
  init(t) {
    var e = this;
    this.setDisplay(t), this.resize(), (this.animeRunning = true);
    this.animeEnter("next").then(function () {
      e.animeRunning = false;
      e.checkAndRemove();
    });
  }
  add() {
    this.active = true;
    CanvasWebgl.instance.scene.add(this.item);
    AnimationQueue.add(this.update);
    ResizeHandler.add(this.resize);
  }
  remove() {
    this.active = false;
    this.checkAndRemove();
  }
  setDisplay(t) {
    var e = this;
    var n = this.charTextureMap[t];
    n
      ? this.updateDisplayTexture(n)
      : (n = this.loader.load(t, function (n) {
          (e.charTextureMap[t] = n), e.updateDisplayTexture(n);
        }));
  }
  updateDisplayTexture(t) {
    var e = t.image,
      n = e.width,
      r = e.height;
    (this.tex = t),
      (this.mat.uniforms.u_texture.value = t),
      this.item.scale.set(n / this.itemWidth, r / this.itemHeight, 1);
  }
  transTo(t, e) {
    return (
      undefined === e && (e = "prev"),
      createPromiseWrapper(this, undefined, undefined, function () {
        return createAsyncGenerator(this, function (n) {
          switch (n.label) {
            case 0:
              return (this.animeRunning = true), [4, this.animeExit(e)];
            case 1:
              return n.sent(), this.setDisplay(t), [4, this.animeEnter(e)];
            case 2:
              return (
                n.sent(),
                (this.animeRunning = false),
                this.checkAndRemove(),
                [2]
              );
          }
        });
      })
    );
  }
  animeEnter(t) {
    return createPromiseWrapper(this, undefined, undefined, function () {
      var e,
        n,
        r = this;
      return createAsyncGenerator(this, function (i) {
        return (
          (n = "next" === t ? 1 : -1),
          [
            2,
            anime({
              targets: (e = { val: 0 }),
              val: 1,
              duration: 800,
              easing: "easeOutQuart",
              update: function () {
                var t = e.val;
                (r.item.position.x =
                  r.itemPosition.x + (1 - t) * n * r.itemTransOffset),
                  (r.item.rotation.y = (1 - t) * n * 0.08),
                  (r.mat.uniforms.opacity.value = t);
                var i = Math.max(2 * t - 1, 0);
                r.mat.uniforms.black.value = i;
              },
            }).finished,
          ]
        );
      });
    });
  }
  animeExit(t) {
    return createPromiseWrapper(this, undefined, undefined, function () {
      var e,
        n,
        r = this;
      return createAsyncGenerator(this, function (i) {
        return (
          (n = "next" === t ? 1 : -1),
          [
            2,
            anime({
              duration: 800,
              targets: (e = { val: 0 }),
              val: 1,
              easing: "easeOutQuart",
              update: function () {
                var t = e.val;
                (r.item.position.x =
                  r.itemPosition.x - t * n * r.itemTransOffset),
                  (r.item.rotation.y = t * n * -0.08),
                  (r.mat.uniforms.opacity.value = 1 - t);
                var i = Math.min(1 - 2 * t, 1);
                r.mat.uniforms.black.value = i;
              },
            }).finished,
          ]
        );
      });
    });
  }
}

function randXPosition() {
  return (Math.random() - 0.5) * (0.9 * CanvasWebgl.instance.width);
}
function randYPosition() {
  return (Math.random() - 2.5) * (0.2 * CanvasWebgl.instance.height);
}
function randZPosition() {
  return _.random(-200, 200);
}
function randLife() {
  return _.random(60, 1200);
}

// gl
class fireFlyLoader {
  constructor(cnt) {
    var e = this;
    undefined === cnt && (cnt = 20);
    this.update = function () {
      for (let point of e.points) {
        i = e.globalOpacity;
        if (point.life--) {
          point.y += point.speed;
          if (point.life < 30) {
            point.opacity += 0.1 * (0 - point.opacity);
          } else {
            point.opacity += 0.1 * (i - point.opacity);
          }
        } else {
          point.x = randXPosition();
          point.y = randYPosition();
          point.z = randZPosition();
          point.life = randLife();
          point.opacity = 0;
        }
        point.aPosition.set([point.x, point.y, point.z]);
        point.aOpacity.set([point.opacity]);
      }
      e.aPosition.needsUpdate = true;
      e.aOpacity.needsUpdate = true;
    };
    this.globalOpacity = 0;
    var n = _.fill(new Array(cnt), 0);
    var r = Float32Array.from(
      _.flattenDepth(
          n.map(function () {
            return [randXPosition(), randYPosition(), randZPosition()];
          })
        ,1)
      );
    var i = Float32Array.from(n);
    this.aPosition = new THREE.BufferAttribute(r, 3);
    this.aOpacity = new THREE.BufferAttribute(i, 1);
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", this.aPosition);
    geo.setAttribute("opacity", this.aOpacity);
    this.points = n.map(function (t, e) {
      return {
        x: r[3 * e],
        y: r[3 * e + 1],
        z: r[3 * e + 2],
        opacity: i[e],
        size: 2,
        speed: 0.1 * _.random(4, 8),
        life: randLife(),
        aPosition: r.subarray(3 * e, 3 * e + 3),
        aOpacity: i.subarray(e, e + 1),
      };
    });
    new THREE.TextureLoader().load(fireflyImage, function (t) {
      var n = new THREE.ShaderMaterial({
          uniforms: { uTexture: new THREE.Uniform(t) },
          vertexShader:
            "\n                    attribute float opacity;\n                    varying float vOpacity;\n                    void main() {\n                        vOpacity = opacity;\n                        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n                        gl_PointSize = 7.0;\n                        gl_Position = projectionMatrix * mvPosition;\n                    }\n                ",
          fragmentShader:
            "\n                    uniform sampler2D uTexture;\n                    varying float vOpacity;\n                    void main() {\n                        vec4 texture = texture2D(uTexture, gl_PointCoord.xy);\n                        gl_FragColor = vec4(texture.rgb, texture.a * vOpacity);\n                    }",
          transparent: true,
          depthTest: false,
        }),
        r = new THREE.Points(geo, n);
      CanvasWebgl.instance.scene.add(r);
      e.fire();
    });
  }
  fire() {
    return AnimationQueue.add(this.update), this;
  }
  stop() {
    return AnimationQueue.remove(this.update), this;
  }
  disappear() {
    return (this.globalOpacity = 0), this;
  }
  appear() {
    return (this.globalOpacity = 1), this;
  }

  static get instance() {
    return fireFlyLoader._instance || (fireFlyLoader._instance = new fireFlyLoader()), fireFlyLoader._instance;
  }
}

// yl
class PolygonLoader {
  constructor() {
    this.width = 800;
    this.height = 800;
    this.update = () => {
      this.updateTransform();
      this.geometry.rotateX(0.004);
      this.geometry.rotateY(-0.002);
      this.geometry.rotateZ(-0.002);
      this.uOpacity.value += 0.03 * (this.globalOpacity - this.uOpacity.value);
    };
    this.globalOpacity = 0;
    this.getUpdatedTransform = function () {};
    this.updateTransform = function () {
      var e = this.getUpdatedTransform() || { x: 0, y: 0, sc: 1 };
      var n = e.x;
      var r = e.y;
      var i = e.sc;
      return (this.uOrigin.value = [n, r, i]), this;
    };
    this.geometry = new THREE.IcosahedronGeometry(400, 1);
    var e = (this.uOpacity = new THREE.Uniform(this.globalOpacity));
    var n = (this.uOrigin = new THREE.Uniform([0, 0, 1]));
    var self = this;
    setTimeout(function () {
      var generatorInstance = function () {
        var t, r, i, a, o, s, l, u;
        return createAsyncGenerator(this, function (c) {
          switch (c.label) {
            case 0:
              return [4, new THREE.TextureLoader().loadAsync(particleImage)];
            case 1:
              return (
                (t = c.sent()),
                (r = new THREE.Uniform(new THREE.Color(9864212))),
                (i = new THREE.Uniform(t)),
                (a =
                  "\n                uniform vec3 uOrigin;\n                varying float z;\n                void main() {\n                    z = position.z;\n                    vec4 mvPosition = modelViewMatrix * vec4( position.xy * uOrigin.z + uOrigin.xy, 0.0, 1.0 );\n                    gl_PointSize = 16.0 / uOrigin.z;\n                    gl_Position = projectionMatrix * mvPosition;\n                }\n            ".replace(
                    / +/g,
                    " "
                  )),
                (o =
                  "\n                uniform vec3 uColor;\n                varying float z;\n                uniform float uOpacity;\n                void main() {\n                    gl_FragColor = vec4(uColor, ((z / 400.0) + 0.5) * uOpacity);\n                }\n            ".replace(
                    / +/g,
                    " "
                  )),
                (s =
                  "\n                uniform vec3 uColor;\n                varying float z;\n                uniform sampler2D uTexture;\n                uniform float uOpacity;\n                void main() {\n                    vec4 texture = texture2D(uTexture, gl_PointCoord.xy);\n                    gl_FragColor = texture * vec4(uColor, ((z / 400.0) + 0.5) * uOpacity);\n                }\n            ".replace(
                    / +/g,
                    " "
                  )),
                (l = new THREE.LineSegments(
                  self.geometry,
                  new THREE.ShaderMaterial({
                    uniforms: { uColor: r, uOpacity: e, uOrigin: n },
                    vertexShader: a,
                    fragmentShader: o,
                    transparent: true,
                    depthTest: false,
                  })
                )),
                (u = new THREE.Points(
                  self.geometry,
                  new THREE.ShaderMaterial({
                    uniforms: {
                      uColor: r,
                      uTexture: i,
                      uOpacity: e,
                      uOrigin: n,
                    },
                    vertexShader: a,
                    fragmentShader: s,
                    transparent: true,
                    depthTest: false,
                  })
                )),
                CanvasWebgl.instance.scene.add(l).add(u),
                self.fire(),
                [2]
              );
          }
        });
      };
      return new Promise(function (resolve, reject) {
        function handleNext(result) {
          try {
            processNext(generatorInstance.next(result));
          } catch (err) {
            reject(err);
          }
        }
        function handleThrow(result) {
          try {
            processNext(generatorInstance.throw(result));
          } catch (err) {
            reject(err);
          }
        }
        function processNext(step) {
          var nextValue;
          if (step.done) {
            resolve(step.value)
          } else {
            nextValue = step.value;
            (nextValue instanceof Promise
              ? nextValue
              : new Promise(function (resolvePromise) {
                  resolvePromise(nextValue);
                })).then(handleNext, handleThrow);
          }
        }
        processNext((generatorInstance = generatorInstance.apply(this, undefined || [])).next());
      });
    }, 0);
  }
  fire() {
    return AnimationQueue.add(this.update), this;
  }
  stop() {
    return AnimationQueue.remove(this.update), this;
  }
  disappear() {
    return (this.globalOpacity = 0), this;
  }
  appear() {
    return (this.globalOpacity = 1), this;
  }
  setTransform(t) {
    return (this.getUpdatedTransform = t), this;
  }
  static get instance() {
    return PolygonLoader._instance || (PolygonLoader._instance = new PolygonLoader()), PolygonLoader._instance;
  }

  updatePolygonTransform(t) {
    if (t === undefined) {
      t = 0;
    }
    PolygonLoader.instance.setTransform(function () {
      return "desktop" === ResponsiveModeHandler.mode
        ? {
            x: 0.1 * -CanvasWebgl.instance.width,
            y:
              0.5 * CanvasWebgl.instance.height +
              (0.2 * (1 - t) + 0.3) * PolygonLoader.instance.height,
            sc: 1,
          }
        : {
            x: 0,
            y:
              0.5 * CanvasWebgl.instance.height +
              (0.2 * (1 - t) + 0.3) * PolygonLoader.instance.height * 0.6,
            sc: 0.6,
          };
    }); 
  }
}

var meshParticle = initParticleData({
  size: { width: 820, height: 460 },
  count: 1008,
  points: _.fill(new Array(1008), 0).map(function (t, e) {
    return [(e % 42) * 20, 20 * Math.floor(e / 42), 126, 126, 126, 255];
  }),
});

async function main() {
  PolygonLoader.instance.appear().updatePolygonTransform(1);
  fireFlyLoader.instance.appear();
  var pd_data = await Promise.all([
    {
      key: "lungmen",
      fileName: "lungmen.data.json",
    },
    {
      key: "penguin",
      fileName: "penguin.data.json",
    },
    {
      key: "rhine",
      fileName: "rhine.data.json",
    },
    {
      key: "rhodes",
      fileName: "rhodes.data.json",
    },
    {
      key: "originiums",
      fileName: "story-1-originiums.data.json",
    },
    {
      key: "originium_arts",
      fileName: "story-2-originium_arts.data.json",
    },
    {
      key: "reunion",
      fileName: "story-3-reunion.data.json",
    },
    {
      key: "infected",
      fileName: "story-4-infected.data.json",
    },
    {
      key: "nomadic_city",
      fileName: "story-5-nomadic_city.data.json",
    },
    {
      key: "rhodes_island",
      fileName: "story-6-rhodes_island.data.json",
    }
  ].map(async (data) => {
    const particleData = await (await fetch(`./arknights/static/data/${data.fileName}`)).json();
    return {
      key: data.key,
      model: initParticleData(particleData)
    }
  }));
  mainLoader.main.setMode(EnumEffect.PERSPECTIVE).setModel(meshParticle).appear();

  /*
  var pd_title = await Promise.all([
    {
      key: "infomation",
      fileName: "title-information.data.json"
    },
    {
      key: "media",
      fileName: "title-media.data.json"
    },
    {
      key: "staff",
      fileName: "title-staff.data.json"
    },
    {
      key: "world",
      fileName: "title-world.data.json"
    }
  ].map(async (data) => {
    const particleData = await (await fetch(`./static/data/${data.fileName}`)).json();
    return {
      key: data.key,
      model: initParticalData(particleData)
    }
  }));
  var fontSize = parseInt(window.getComputedStyle(document.body).fontSize, 10);
  mainLoader.sub.setMode(EnumEffect.FIXED).setTransform(function () {
    return {
      x: Math.round(
        5.875 * fontSize - 0.5 * CanvasWebgl.instance.width
      ),
      y: Math.round(
        0.5 * CanvasWebgl.instance.height - 3.5 * fontSize
      ),
      sc: fontSize / 16,
      pointSize: 1,
    };
  }).setModel(pd_title[0].model).appear();
  */
  setInterval(() => {
    mainLoader.main.setModel(pd_data[_.random(0, pd_data.length - 1)].model);
  }, 5000);
}

main();

// const staffInfo = Array.from(document.querySelector(".staffListContainer .staffListWrapper").querySelectorAll(".staffItem")).map(ele => ele.dataset);
const staffInfo = [
  {"name":"阿米娅","nameEn":"AMIYA","code":"ROO1","intro":"罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。","cv":"黑泽朋世","cvTrackUrl":"arknights/official/audio/20210202/1bc6d074f0ad5b1d83a04c111a66c121.mp3","profession":"caster","displayUrl":"arknights/official/pic/20210112/f40da70e0e3d2c89a89aa97c44b6498c.png","camp":"RHODES_ISLAND"},
  {"name":"凯尔希","nameEn":"KAL'TSIT","code":"B003","intro":"罗德岛最高管理者之一，阿米娅的直接辅导者。\n罗德岛医疗部门的总负责人。\n作为罗德岛的老成员，凯尔希医生是在阿米娅背后最稳固的援护者。","cv":"日笠阳子","cvTrackUrl":"arknights/official/audio/20210202/7cdb76deae9d9836875c13d2f47390ab.mp3","profession":"medic","displayUrl":"arknights/official/pic/20210112/f5d1be51761704001cc9e7bd7529c849.png","camp":"RHODES_ISLAND"},
  {"name":"红","nameEn":"PROJEKT RED","code":"SW01","intro":"红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。\n于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。\n现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。","cv":"小清水亚美","cvTrackUrl":"arknights/official/audio/20210202/263326a42e7aa4687ec27ff84593e0e4.mp3","profession":"special","displayUrl":"arknights/official/pic/20210112/eec21ae5cb8cce8872b07926a46eb2ed.png","camp":"RHODES_ISLAND"},
  {"name":"杜宾","nameEn":"DOBERMANN","code":"R100","intro":"前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。 \n熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。","cv":"种崎敦美","cvTrackUrl":"arknights/official/audio/20210202/3087d0545a33a2dd990a6d71eaf39aab.mp3","profession":"warrior","displayUrl":"arknights/official/pic/20210112/774aa017f2a8a5654d661cda1051beea.png","camp":"RHODES_ISLAND"},
  {"name":"临光","nameEn":"NEARL","code":"F002","intro":"临光，前卡西米尔耀骑士，感染者援助团体“使徒”的一员。在掩护己方队员、机动作战、歼灭战与开阔地带作战中体现出极高的战斗技巧和个人军事素养。\n现于罗德岛作为重装干员行动，并于现场提供战术指挥支援。","cv":"佐仓绫音","cvTrackUrl":"arknights/official/audio/20210202/53b4f90429c3634b62b71e9c0d840b55.mp3","profession":"tank","displayUrl":"arknights/official/pic/20210112/18469152aa1d779c037a259c61e60671.png","camp":"RHODES_ISLAND"},
  {"name":"赫默","nameEn":"SILENCE","code":"RL01","intro":"赫默，莱茵生命有限公司源石有关项目研究员，曾主管数项未知应用研究，同期亦主持数个矿石病临床试验项目。 \n现于罗德岛为多项行动提供战场医疗救护服务。","cv":"鬼头明里","cvTrackUrl":"arknights/official/audio/20210202/57409d9624e2170525e9d3e98f67914a.mp3","profession":"medic","displayUrl":"arknights/official/pic/20210112/21c96f723a4638c0103798c65b4f5195.png","camp":"RHINE"},
  {"name":"伊芙利特","nameEn":"IFRIT","code":"RL03","intro":"伊芙利特，前莱茵生命医疗对象，重度感染者。拥有极高的源石适应性，伴随有多发性点火现象。进入莱茵生命前的履历缺失。\n现于罗德岛接受治疗，由医疗干员赫默担任监护与担保人。","cv":"花守由美里","cvTrackUrl":"arknights/official/audio/20210202/a6ff165ff6702108fda9702219444b2f.mp3","profession":"caster","displayUrl":"arknights/official/pic/20210112/5f84a8f3c8deded1bf8dfc28b2bd7146.png","camp":"RHINE"},
  {"name":"白面鸮","nameEn":"PTILOPSIS","code":"RL04","intro":"白面鸮，前莱茵生命公司，数据维护专员。在医疗类源石技艺领域取得不菲成就，于医疗数据维护，常规医疗方案应用，多项目医疗行为等相关领域，拥有丰富经验。 \n现于罗德岛担任医疗干员，亦就职于医疗部门，某临床实验小组。同时，为罗德岛提供若干项医疗项目的相关辅助工作。","cv":"金元寿子","cvTrackUrl":"arknights/official/audio/20210202/be5476104b851da963a28d51d99f6078.mp3","profession":"medic","displayUrl":"arknights/official/pic/20210112/aad79b4cc62d3d7adc2948a0990ebca1.png","camp":"RHINE"},
  {"name":"德克萨斯","nameEn":"TEXAS","code":"PL02","intro":"企鹅物流员工，单兵作战能力出类拔萃。 \n于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。","cv":"田所梓","cvTrackUrl":"arknights/official/audio/20210202/a4356849af1a902fb53a885817fdd52b.mp3","profession":"pioneer","displayUrl":"arknights/official/pic/20210112/416445fede74d8d23c6d5f2476d827b2.png","camp":"PENGUIN_LOGISTICS"},
  {"name":"能天使","nameEn":"EXUSIAI","code":"PL03","intro":"能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。","cv":"石见舞菜香","cvTrackUrl":"arknights/official/audio/20210202/69483599a90b1194e2b917519dd08ead.mp3","profession":"sniper","displayUrl":"arknights/official/pic/20210112/ab532ac6f4df46164f9b097f2f6b677d.png","camp":"PENGUIN_LOGISTICS"},
  {"name":"可颂","nameEn":"CROISSANT","code":"PL04","intro":"企鹅物流员工，于合约期内任企鹅物流驻罗德岛外派干员。 擅长防守，能同时牵制数个敌人，并拥有怪力，能用巨锤轻松击飞瘦弱的敌人。","cv":"久保百合花","cvTrackUrl":"arknights/official/audio/20210202/4f53d9ae01495e89998f93579b5df823.mp3","profession":"tank","displayUrl":"arknights/official/pic/20210112/8752c3a0e09ab67178acebe117d536c1.png","camp":"PENGUIN_LOGISTICS"},
  {"name":"陈","nameEn":"CHEN","code":"LM04","intro":"陈，龙门高级警司，龙门近卫局特别督查组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。\n现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。","cv":"石上静香","cvTrackUrl":"arknights/official/audio/20210202/dda40ccf5efe095e3d1041c413a43710.mp3","profession":"warrior","displayUrl":"arknights/official/pic/20210112/87f341583ec61b4ce4f5b765464fe89d.png","camp":"LUNGMEN"},
  {"name":"星熊","nameEn":"HOSHIGUMA","code":"LM05","intro":"星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。\n经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。\n现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。","cv":"安野希世乃","cvTrackUrl":"arknights/official/audio/20210202/4368b4f9fa1901f05d877c203c586c01.mp3","profession":"tank","displayUrl":"arknights/official/pic/20210112/22ab7b3789969d9c381b82d0f24c3c83.png","camp":"LUNGMEN"}
];
/*
var draw = new staffCharLoader(document.querySelector(".staffCharDraw"));
draw.getPreloadTasks(staffInfo.map(function (t) {
  return t.displayUrl || "";
}));
draw.init(staffInfo[0].displayUrl);
*/