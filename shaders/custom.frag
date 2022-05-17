#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() 
{ 
    // Temp color
    vec3 colorVec = texture(image, texcoord).rgb;
    vec3 colors[3];
    colors[0] = vec3(0.0,0.0,1.0);
    colors[1] = vec3(1.0,1.0,0.0);
    colors[2] = vec3(1.0,0.0,0.0);

    // Find luminance
    float lumimance = (colorVec.r+colorVec.g+colorVec.b)/3.0;
    
    // Index based on luminance
    int ix;
    if (lumimance < 0.5) {
        ix = 0;
    } else {
        ix = 1;
    }

    // Mixed vec3 - linear interpolateion between colors[ix],colors[ix+1] based on 3rd param
    vec3 mixedTexCoord = mix(colors[ix],colors[ix+1],(lumimance-float(ix)*0.5)/0.5);

	FragColor = vec4(mixedTexCoord, 1.0);
}
