import {PI,getCircumference, getArea,getVolume} from './repo.js';
console.log(PI);
const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}`)

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`)

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`)



