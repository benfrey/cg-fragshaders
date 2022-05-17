#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 myColor = texture(image, texcoord);
    float red = round(myColor.r*4.0)/4.0;
    float green = round(myColor.g*4.0)/4.0;
    float blue = round(myColor.b*4.0)/4.0;
    FragColor = vec4(red, green, blue, 1.0);
}
