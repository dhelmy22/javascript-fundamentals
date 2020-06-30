let isOn = true;
// ........some code procedure

 if(isOn){
    console.log('The light is on');
};
// as long as the stuff in th () is true, it will print what you want.  Camputer reads left to right.  !isOn flips false to true
isOn = false;

if(!isOn){
    console.log('The light is off');
};

let temperature = -50;

if (temperature < 60 && temperature > 40){
    console.log('wear a jacket');
};
if (temperature < 0){
    console.log('Go Inside');
};