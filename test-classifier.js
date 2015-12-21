var cv = require('opencv');

console.log('Going through this ish.');

var COLOR = [0, 255, 0]; // default red
var thickness = 2; // default 1
var cascadeFile = './cascade.xml';

var inputFiles = [
'./J094401.87-003832.1-irg.cutout.jpg',
'./J094446.23-004118.2-irg.cutout.jpg',
'./J094622.67-000759.3-irg.cutout.jpg',
'./J094628.56-002603.4-irg.cutout.jpg',
'./J094631.60-005917.7-irg.cutout.jpg',
'./J094651.40-010228.5-irg.cutout.jpg',
'./J094700.41-002430.2-irg.cutout.jpg',
'./J094725.62-001626.6-irg.cutout.jpg',
'./J094842.33-002114.4-irg.cutout.jpg',
'./J094919.08+000144.0-irg.cutout.jpg'
];

inputFiles.forEach(function(fileName) {
  cv.readImage(fileName, function(err, im) { 
    if (err) throw err;
    if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');
    im.detectObject(cascadeFile, { neighbors: 2, scale: 2}, function(err, objects) { 
       
      console.log(objects); 
      for(var k = 0; k < objects.length; k++) { 
        var object = objects[k]; 
        im.rectangle([object.x, object.y], [object.x + object.width, object.y + object.height], COLOR, 2); 
      }
      im.save(fileName.replace(/.jpg/, 'processed.jpg')); 
    }); 
  }); 
});