#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 scaledTexCoord = texcoord * 2.0 - 1.0;
    float theta = atan(scaledTexCoord.y, scaledTexCoord.x);
    float radius = pow(length(scaledTexCoord), 1.5);
    vec2 fishEyeCoord = vec2(radius*cos(theta), radius*sin(theta));
    vec2 normedEyeCoord = 0.5*(fishEyeCoord + 1.0);
    FragColor = texture(image, normedEyeCoord);
}
