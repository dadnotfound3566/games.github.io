const _0x27af6e=_0x1af5;function _0x1af5(_0x2ff6ad,_0x2969e9){const _0x2c6f62=_0x2c6f();return _0x1af5=function(_0x1af58a,_0x2cb014){_0x1af58a=_0x1af58a-0x9b;let _0x5697e7=_0x2c6f62[_0x1af58a];return _0x5697e7;},_0x1af5(_0x2ff6ad,_0x2969e9);}(function(_0x539cf7,_0x42ab5c){const _0xe5de94=_0x1af5,_0x228ea2=_0x539cf7();while(!![]){try{const _0x342188=-parseInt(_0xe5de94(0xa0))/0x1*(parseInt(_0xe5de94(0xa7))/0x2)+-parseInt(_0xe5de94(0xab))/0x3*(parseInt(_0xe5de94(0xaa))/0x4)+-parseInt(_0xe5de94(0x9f))/0x5+-parseInt(_0xe5de94(0xa5))/0x6+-parseInt(_0xe5de94(0xa8))/0x7+-parseInt(_0xe5de94(0x9c))/0x8*(-parseInt(_0xe5de94(0xa4))/0x9)+parseInt(_0xe5de94(0x9b))/0xa*(parseInt(_0xe5de94(0xac))/0xb);if(_0x342188===_0x42ab5c)break;else _0x228ea2['push'](_0x228ea2['shift']());}catch(_0x30f211){_0x228ea2['push'](_0x228ea2['shift']());}}}(_0x2c6f,0x59243));class DobbelSteen{constructor(_0x3e1979,_0x1bfd46,_0x392971,_0x244fde){const _0x4de7e0=_0x1af5;this['x']=_0x3e1979,this['y']=_0x1bfd46,this[_0x4de7e0(0xa1)]=_0x392971,this['diameterOgen']=_0x244fde,this[_0x4de7e0(0xaf)]=null,this['R']=null,this['G']=null,this['B']=null;}[_0x27af6e(0xad)](){this['ogen']=floor(random(0x0,0x6))+0x1,this['R']=round(random(0x0,0xff)),this['G']=round(random(0x0,0xff)),this['B']=round(random(0x0,0xff));}[_0x27af6e(0xa9)](){const _0x4fd3bc=_0x27af6e;push(),fill(this['R'],this['G'],this['B']),rect(this['x'],this['y'],this['grootte'],this[_0x4fd3bc(0xa1)]),fill(_0x4fd3bc(0xb0)),this[_0x4fd3bc(0xaf)]!=0x1&&ellipse(this['x']+this[_0x4fd3bc(0xa1)]/0x6*0x1,this['y']+this['grootte']/0x6*0x1,this[_0x4fd3bc(0xa2)],this[_0x4fd3bc(0xa2)]),this[_0x4fd3bc(0xaf)]==0x6&&ellipse(this['x']+this['grootte']/0x6*0x3,this['y']+this['grootte']/0x6*0x1,this[_0x4fd3bc(0xa2)],this[_0x4fd3bc(0xa2)]),this['ogen']>0x3&&ellipse(this['x']+this[_0x4fd3bc(0xa1)]/0x6*0x5,this['y']+this[_0x4fd3bc(0xa1)]/0x6*0x1,this['diameterOgen'],this[_0x4fd3bc(0xa2)]),(this[_0x4fd3bc(0xaf)]==0x1||this[_0x4fd3bc(0xaf)]==0x3||this[_0x4fd3bc(0xaf)]==0x5)&&ellipse(this['x']+this[_0x4fd3bc(0xa1)]/0x6*0x3,this['y']+this[_0x4fd3bc(0xa1)]/0x6*0x3,this['diameterOgen'],this['diameterOgen']),this[_0x4fd3bc(0xaf)]>0x3&&ellipse(this['x']+this['grootte']/0x6*0x1,this['y']+this[_0x4fd3bc(0xa1)]/0x6*0x5,this[_0x4fd3bc(0xa2)],this['diameterOgen']),this['ogen']==0x6&&ellipse(this['x']+this[_0x4fd3bc(0xa1)]/0x6*0x3,this['y']+this[_0x4fd3bc(0xa1)]/0x6*0x5,this[_0x4fd3bc(0xa2)],this[_0x4fd3bc(0xa2)]),this[_0x4fd3bc(0xaf)]!=0x1&&ellipse(this['x']+this['grootte']/0x6*0x5,this['y']+this['grootte']/0x6*0x5,this[_0x4fd3bc(0xa2)],this[_0x4fd3bc(0xa2)]),pop();}}function _0x2c6f(){const _0x350c4e=['491755DmubQi','gooi','processing','ogen','black','540CjCiBf','55368QCxMlL','parent','Georgia','1856975SKmyiT','6693BuSAah','grootte','diameterOgen','lightcyan','18WVPuLZ','1479966lwOmsh','Totaal\x20gegooid:\x20','174myvhuZ','3133277vosrQm','teken','553108qzEVjQ','9kmjgoh'];_0x2c6f=function(){return _0x350c4e;};return _0x2c6f();}let dobbelSteen,dob1,dob2,dob3,totalScore=0x0;function setup(){const _0x51f352=_0x27af6e;canvas=createCanvas(0x2bc,0x12c),canvas[_0x51f352(0x9d)](_0x51f352(0xae)),colorMode(RGB,0xff,0xff,0xff,0x1),noStroke(),textFont(_0x51f352(0x9e)),textSize(0x50),frameRate(0xa),background(_0x51f352(0xa3)),dob1=new DobbelSteen(0x19,0x19,0xc8,0x32),dob2=new DobbelSteen(0xfa,0x19,0xc8,0x32),dob3=new DobbelSteen(0x1db,0x19,0xc8,0x32);}function draw(){const _0x1af147=_0x27af6e;mouseIsPressed&&(background(_0x1af147(0xa3)),dob1['gooi'](),dob2['gooi'](),dob3[_0x1af147(0xad)](),dob1[_0x1af147(0xa9)](),dob2[_0x1af147(0xa9)](),dob3[_0x1af147(0xa9)](),totalScore=dob1[_0x1af147(0xaf)]+dob2[_0x1af147(0xaf)]+dob3[_0x1af147(0xaf)],textSize(0x1e),text(_0x1af147(0xa6)+totalScore,0x19,0x113));}