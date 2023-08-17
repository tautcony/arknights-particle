exports.exports = "uniform sampler2D u_texture;\nuniform float black;\nuniform float opacity;\nuniform bool gradient;\nvarying vec2 vUv;\n\nvoid main() {\n   float o = gradient ? opacity * min(vUv.y * 2.0 - 0.5, 1.0) : opacity;\n   gl_FragColor = texture2D(u_texture, vUv) * vec4(black, black, black, o);\n}";