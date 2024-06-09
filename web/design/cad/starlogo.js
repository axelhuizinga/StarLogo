/*
*
*/

const { intersect, subtract, union } = require('@jscad/modeling').booleans

const {booleans, extrusions, geometries, maths, primitives, transforms, utils} = require('@jscad/modeling')
const { colorize } =  require('@jscad/modeling').colors

//const { sqrt } = Math.sqrt

const applyTransform = (matrix, ...objects) => {
  objects = utils.flatten(objects)
  if (objects.length === 0) return objects

  return objects.map((object) => {
    const color = object.color
    object = transforms.transform(matrix, object)
    if (color) object.color = color
    return object
  })
}
//const { degToRad } = jscad.utils

let alpha = 0.5;
let edgeL = 100;
let rCorner = 10;
let bTColor = 'green';
let dTColor = 'red';
let rStar = edgeL/4 * Math.sqrt(6);

const main = () => {
  let options = {colorize:[0.2,0.5,0.8,alpha],zRotate:0}
  let objects = []
  objects.push(createObjects0022(options))
  options = {colorize: [0.8,0.7,0.2,alpha], zRotate:90}
  objects.push(createObjects0022(options))
  return objects
}

// shape
const createObjects0022 = (options) => {
  let objects = []

  // 3D indexed faces (4) set: 4 points, 4 faces
  const points = [
    [1,1,1],
    [-1,1,-1],
    [-1,-1,1],
    [1,-1,-1]
  ]
  const faces = [
    [0,1,2],
    [0,2,3],
    [0,3,1],
    [3,2,1]
  ]
  const colors = null
  //[0.2,0.5,0.8,1] rotateZ(i * degToRad(72)
  const orientation = 'outward'
  objects.push(colorize(options.colorize, transforms.rotateZ( utils.degToRad(options.zRotate),primitives.polyhedron({points, faces, colors, orientation}))))
  return objects
}

// transform
const createObjects0027 = (options) => {
  let objects = []

  const matrix = [0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1]
  return applyTransform(matrix, objects)
}
module.exports = {main}
