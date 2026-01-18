uniform float progress;
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform sampler2D displacement;
uniform float disRepeat;
varying vec2 vUv;
varying vec4 vPosition;

vec2 mirrored(vec2 v) {
  vec2 m = mod(v, 2.);
  return mix(m, 2.0 - m, step(1.0, m));
}

void main() {
  vec2 noiseUV = mirrored(vUv * disRepeat);
  float noise = texture2D(displacement, noiseUV).g;
  float strength = 0.3;
  float noiseCutoff =
      (progress * (1.0 + strength)) - (vUv.y + noise * strength);
  float mask = smoothstep(0.0, 0.01, noiseCutoff);
  vec4 t1 = texture2D(texture1, vUv);
  vec4 t2 = texture2D(texture2, vUv);
  gl_FragColor = mix(t1, t2, mask);
}
