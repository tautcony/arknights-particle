exports.exports = "#define PI 3.1415926535897932384626433832795\nuniform sampler2D u_texture;\nuniform vec2 speed;\nuniform float offset;\nuniform vec2 offsetRadio;\nvarying vec2 vUv;\n\nfloat get_offest(float n, float speed, float offset) {\n   return cos((n - 0.5) * PI / 2.0) * speed * offset;\n}\n\nvoid main() {\n   vec4 color = texture2D(u_texture, vUv).rgba;\n   float oR = 0.01;\n   float oG = 0.02;\n   float oB = 0.03;\n\n   vec2 uvR = vUv + vec2(get_offest(vUv.y, speed.x, offsetRadio.x * oR), get_offest(vUv.x, speed.y, offsetRadio.y * oR));\n   vec2 colorR = texture2D(u_texture, uvR).ra;\n   gl_FragColor = vec4(colorR.x * colorR.y, 0.0, 0.0, colorR.y);\n\n   vec2 uvG = vUv + vec2(get_offest(vUv.y, speed.x, offsetRadio.x * oG), get_offest(vUv.x, speed.y, offsetRadio.y * oG));\n   vec2 colorG = texture2D(u_texture, uvG).ga;\n   gl_FragColor += vec4(0.0, colorG.x * colorG.y , 0.0, colorG.y);\n\n   vec2 uvB = vUv + vec2(get_offest(vUv.y, speed.x, offsetRadio.x * oB), get_offest(vUv.x, speed.y, offsetRadio.y * oB));\n   vec2 colorB = texture2D(u_texture, uvB).ba;\n   gl_FragColor += vec4(0.0, 0.0, colorB.x * colorB.y, colorB.y);\n}";