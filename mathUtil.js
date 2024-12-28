

export const PI = 3.14159265359;

export function getArea(radius){
    return PI * radius * radius;
}

export function getCircumference(radius){
    return 2*PI*radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius**3;
}