function _0x1fa7(){var _0x17ca31=['1425347fLEeAX','.png','2325492nfOIKw','images/sprites/Jos100px/Jos_','11486882ZHCSwa','1167792iWTKqo','6kislfQ','celGrootte','1364945hKMEFZ','466rpJSBq','2467HxxXZm','aantalRijenRaster','aantalKolommenRaster','10wQlvGd','processing','push','aantalKolommen','24RZWsQS','parent','1560087dYxvvC','berekenCelGrootte'];_0x1fa7=function(){return _0x17ca31;};return _0x1fa7();}(function(_0x10fbd6,_0x5d5ffc){var _0x181be9=_0x6c0e,_0x3c996b=_0x10fbd6();while(!![]){try{var _0x3f9a1b=parseInt(_0x181be9(0x1d1))/0x1*(-parseInt(_0x181be9(0x1d0))/0x2)+parseInt(_0x181be9(0x1cc))/0x3+-parseInt(_0x181be9(0x1c9))/0x4+-parseInt(_0x181be9(0x1cf))/0x5+parseInt(_0x181be9(0x1cd))/0x6*(-parseInt(_0x181be9(0x1c7))/0x7)+-parseInt(_0x181be9(0x1c3))/0x8*(-parseInt(_0x181be9(0x1c5))/0x9)+parseInt(_0x181be9(0x1d4))/0xa*(parseInt(_0x181be9(0x1cb))/0xb);if(_0x3f9a1b===_0x5d5ffc)break;else _0x3c996b['push'](_0x3c996b['shift']());}catch(_0x21b8fb){_0x3c996b['push'](_0x3c996b['shift']());}}}(_0x1fa7,0x4e4f9));function _0x6c0e(_0x5d27ee,_0x567419){var _0x1fa792=_0x1fa7();return _0x6c0e=function(_0x6c0e12,_0x26a583){_0x6c0e12=_0x6c0e12-0x1c2;var _0x5868dd=_0x1fa792[_0x6c0e12];return _0x5868dd;},_0x6c0e(_0x5d27ee,_0x567419);}var raster={'aantalRijenRaster':0x6,'aantalKolommenRaster':0x9,'celGrootte':null,'berekenCelGrootte'(){var _0x59f62b=_0x6c0e;this[_0x59f62b(0x1ce)]=width/this[_0x59f62b(0x1c2)];},'teken'(){var _0xebed8d=_0x6c0e;push(),noFill(),stroke('grey');for(var _0x5397ab=0x0;_0x5397ab<raster[_0xebed8d(0x1d2)];_0x5397ab++){for(var _0x275e6f=0x0;_0x275e6f<raster[_0xebed8d(0x1d3)];_0x275e6f++){rect(_0x275e6f*raster['celGrootte'],_0x5397ab*raster[_0xebed8d(0x1ce)],raster[_0xebed8d(0x1ce)],raster[_0xebed8d(0x1ce)]);}}pop();}},animatie=[],aantalBeeldjes=0x6,nummer=0x3,frame,xJos=0x190,yJos=0x12c;function preload(){var _0x4c0d19=_0x6c0e;brug=loadImage('images/backgrounds/dame_op_brug_1800.jpg');for(var _0x3a8344=0x0;_0x3a8344<aantalBeeldjes;_0x3a8344++){frame=loadImage(_0x4c0d19(0x1ca)+_0x3a8344+_0x4c0d19(0x1c8)),animatie[_0x4c0d19(0x1d6)](frame);}}function setup(){var _0x268ac6=_0x6c0e;canvas=createCanvas(0x384,0x258),canvas[_0x268ac6(0x1c4)](_0x268ac6(0x1d5)),frameRate(0xa),raster[_0x268ac6(0x1c6)](),raster['celGrootte']=width/raster[_0x268ac6(0x1d3)];}function draw(){var _0x364e91=_0x6c0e;background(brug),raster['teken'](),keyIsDown(LEFT_ARROW)&&(xJos-=raster['celGrootte'],nummer=0x2),keyIsDown(RIGHT_ARROW)&&(xJos+=raster[_0x364e91(0x1ce)],nummer=0x1),keyIsDown(UP_ARROW)&&(yJos-=raster[_0x364e91(0x1ce)],nummer=0x4),keyIsDown(DOWN_ARROW)&&(yJos+=raster['celGrootte'],nummer=0x5),xJos=constrain(xJos,0x0,width-raster['celGrootte']),yJos=constrain(yJos,0x0,height-raster[_0x364e91(0x1ce)]),image(animatie[nummer],xJos,yJos,raster[_0x364e91(0x1ce)],raster[_0x364e91(0x1ce)]);}