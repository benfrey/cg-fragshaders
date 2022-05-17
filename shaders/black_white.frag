#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 myVec = texture(image, texcoord);
    float myColor = 0.299*myVec.r + 0.587*myVec.g + 0.114*myVec.b;
    FragColor = vec4(myColor, myColor, myColor, 1.0);
}