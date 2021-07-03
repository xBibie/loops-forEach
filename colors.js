
const colorsArray = ['yellow', 'blue', 'red', 'orange']

let i=0;
while (i < colorsArray.length){
    console.log (colorsArray[i]);
    i++;
};

for (let i = 0; i < Array.length; i++){
    console.log (colorsArray[i]);
};

//forEach
colorsArray.forEach((color) => console.log (color));

//3,5
//1
//for Each is kort en krachtig, geen infinite loop

const myColors = {
    color1: 'blue';
    color2: 'pink';
    color3: 'purple';
    color4: 'red';
    color5: 'yellow';
};

for(x in myColors) {
    console.log (myColors[x]);
};
