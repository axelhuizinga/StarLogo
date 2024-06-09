const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs')
// convert from X3D to JS
function x3d2js(file3Name){

    let file3Path = path.resolve(process.cwd(), file3Name)
    if(fs.existsSync(file3Path)){
        console.log('found:' + file3Path);
        let sname = path.parse(file3Name).name
        //let cmd = `node ${cliPath} ${file3Path} -of js`
        //console.log(cmd);
        //execSync(cmd, { stdio: [0, 1, 2] })
        const x3dDeSerializer = require('@jscad/x3d-deserializer')

        const rawData = fs.readFileSync(file3Path);
        const jscadScript = x3dDeSerializer.deserialize({filename: sname + '.x3d', output: 'script'}, rawData)        
        console.log(jscadScript);
    }
    else{
        console.log('not found:' + file3Path);
    }    
    //
}

// print process.argv
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });

if(process.argv.length>2){
    x3d2js(process.argv[2]);
}