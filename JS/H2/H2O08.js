var _0x234e38=_0x2f51;(function(_0x53841c,_0x1fa2c0){var _0x37ad63=_0x2f51,_0x4199c8=_0x53841c();while(!![]){try{var _0x4417f8=-parseInt(_0x37ad63(0x175))/0x1+parseInt(_0x37ad63(0x174))/0x2*(-parseInt(_0x37ad63(0x17c))/0x3)+parseInt(_0x37ad63(0x180))/0x4+-parseInt(_0x37ad63(0x17e))/0x5+parseInt(_0x37ad63(0x179))/0x6+-parseInt(_0x37ad63(0x178))/0x7+parseInt(_0x37ad63(0x17d))/0x8;if(_0x4417f8===_0x1fa2c0)break;else _0x4199c8['push'](_0x4199c8['shift']());}catch(_0x20a871){_0x4199c8['push'](_0x4199c8['shift']());}}}(_0x20eb,0xb10dd));function _0x2f51(_0x22386b,_0xb39085){var _0x20ebdf=_0x20eb();return _0x2f51=function(_0x2f519d,_0x13adc3){_0x2f519d=_0x2f519d-0x16d;var _0x2259dd=_0x20ebdf[_0x2f519d];return _0x2259dd;},_0x2f51(_0x22386b,_0xb39085);}var huisNummers=new Array(0x17,0x19,0x1b,0x1d,0x1f,0x21),huisEigenaren=new Array(_0x234e38(0x176),_0x234e38(0x177),_0x234e38(0x16d),_0x234e38(0x170),_0x234e38(0x171),_0x234e38(0x17a)),kleur1=_0x234e38(0x181),kleur2=_0x234e38(0x17f),huidigeKleur=kleur1;function setup(){var _0x1dc393=_0x234e38;canvas=createCanvas(0x3e8,0x12c),canvas[_0x1dc393(0x16e)]('processing'),background(_0x1dc393(0x172)),textFont(_0x1dc393(0x173)),noStroke(),noLoop();}function draw(){tekenAchtergrond();for(var _0x2059ad=0x0;_0x2059ad<huisNummers['length'];_0x2059ad++){var _0x52e2cb=0x32+_0x2059ad*0x96;tekenHuis(huidigeKleur,huisNummers[_0x2059ad],_0x52e2cb,huisEigenaren[_0x2059ad]),wisselKleur();}}function tekenHuis(_0x485b7a,_0x12d869,_0x3b28ad,_0x395022){var _0x211d24=_0x234e38;push(),translate(_0x3b28ad,0x0),fill(_0x485b7a),rect(0x0,0x6e,0x96,0x96),fill(_0x211d24(0x17b)),triangle(0x0,0x6e,0x96,0x6e,0x4b,0x14),rect(0x14,0xaa,0x32,0x5a),fill('indianred'),textSize(0x1e),text(_0x12d869,0x4b,0xbe),fill(_0x211d24(0x182)),textSize(0xf),text(_0x395022,0x14,0xa5),pop();}function _0x20eb(){var _0x5b1eeb=['1232120EwMKog','Smiers','Dekker','1856589qpJLsR','7531068oTVwFL','Velthuizen','gray','3596247clZncb','20066968YYhsCe','5565370nkgFaf','darkgrey','3083336KgsNzj','lightgray','black','Den\x20Hartog','parent','wheat','Tolboom','Kremer','cornflowerblue','Georgia','2jEHnfK'];_0x20eb=function(){return _0x5b1eeb;};return _0x20eb();}function tekenAchtergrond(){var _0x3e8a66=_0x234e38;fill(_0x3e8a66(0x16f)),rect(0x0,0xdc,width,height-0xdc);}function wisselKleur(){huidigeKleur===kleur1?huidigeKleur=kleur2:huidigeKleur=kleur1;}