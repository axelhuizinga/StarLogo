/*
*
*/

const { intersect, subtract, union } = require('@jscad/modeling').booleans

const {booleans, extrusions, geometries, maths, primitives, transforms, utils} = require('@jscad/modeling')
const { colorize, cssColors } =  require('@jscad/modeling').colors

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

let alpha = 1.0;
let edgeL = 100;
let rCorner = 5;
/*let bTColor = 'green';
let dTColor = 'red';
let rStar = edgeL/4 * Math.sqrt(6);*/
console.log(Math.sqrt(2*Math.pow(edgeL,2)))

const tOpts = {
    //height: edgeL,
    height: Math.sqrt(2*Math.pow(edgeL,2)),
    //height: Math.sqrt(20000),
    radius: rCorner,
    //round: true,
    segments: 32
  }

let coords = []
const ucoords = [
    [-1,0,0],
    [0,-1,0],
    [1,0,0],
    [0,1,0],
    [0,0,1],
    [0,0,-1]
  ]
for (const value of ucoords.values()){
    coords.push(value.map((x)=> x*edgeL/2));
}
//coords.push(value.map((x)=> x*edgeL/4 * Math.sqrt(6)));
console.log(coords[0]);
console.log(transforms);
let rZ = transforms.rotateZ

console.log(rZ);

let oTrans = [
    [transforms.rotateX, 45],
    [transforms.rotateY, 45],
    [transforms.rotateX, 45],
    [transforms.rotateY, 45],
    [transforms.rotateZ, 45],
    [transforms.rotateZ, 45],
]

const bColors = [
	cssColors.gold.concat([alpha]), 
	cssColors.red.concat([alpha]), 
	cssColors.yellow.concat([alpha]), 
	cssColors.blue.concat([alpha]), 
	cssColors.magenta.concat([alpha]),
	cssColors.green.concat([alpha])
]
console.log(bColors[0])

const main = () => {
    let objects = []
    for(const [i, coord] of coords.entries()){
        tOpts.center = coord;
        //tOpts.roundRadius = 4.9;
        tOpts.trans = oTrans[i];
        let options = {colorize:bColors[i],tubeOpt:tOpts}
        objects.push(createCross(options))
    }
    return objects
}

// shape
const createCross = (options) => {
    let objects = []
    //console.log(options.tubeOpt)
    console.log(options.colorize)
    let d3Obj = primitives.cylinder(options.tubeOpt)
    if(options.tubeOpt.trans[0] === rZ){
        console.log(options.tubeOpt.trans[0] === rZ)
        let z = options.tubeOpt.center[2]
        //console.log(options.tubeOpt)
         //transforms.translateY(utils.degToRad(90),d3Obj);
        d3Obj = transforms.translateZ(z,transforms.rotateX(utils.degToRad(90),transforms.centerZ(d3Obj)));
        /*console.log(d3Obj)*/
        objects.push(
            colorize(
                options.colorize,transforms.rotateZ(utils.degToRad(135),d3Obj)
            )
        )
    }
    else {
        objects.push(
            colorize(
                options.colorize, options.tubeOpt.trans[0](
                    utils.degToRad(options.tubeOpt.trans[1]*-1), d3Obj)
            )
        )        
    }
    objects.push(
        colorize(
            options.colorize, options.tubeOpt.trans[0](
                utils.degToRad(options.tubeOpt.trans[1]), d3Obj)
        )
    )
  return objects
}

// transform
const createObjects00273 = (options) => {
  let objects = []

  const matrix = [0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1]
  return applyTransform(matrix, objects)
}
module.exports = {main}
