exports.exports = "\n#define PI 3.1415926535897932384626433832795\nuniform vec2 speed;\nuniform vec2 offsetRadio;\nuniform float offset;\nvarying vec2 vUv;\n\n\nfloat get_offest(float n, float aspect, float _offset) {\n      return cos((n - 0.5) * PI / 2.0) * aspect * _offset;\n}\n\nvoid main()\n{\n      vUv = uv;\n      vec3 c_position = position + vec3(\n            get_offest(uv.y, speed.x, offsetRadio.x * offset),\n            get_offest(uv.x, speed.y, offsetRadio.y * offset),\n            0.0\n      );\n      vec4 mvPosition = modelViewMatrix * vec4( c_position, 1.0 );\n      gl_Position = projectionMatrix * mvPosition;\n}";