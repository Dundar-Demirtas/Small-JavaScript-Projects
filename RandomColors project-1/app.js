

const  button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {


const newColor = MakeRandomColor();
document.body.style.backgroundColor = newColor;
h1.innerText =newColor;
} )

const MakeRandomColor =  () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${b}, ${g})`;
}




const  body = document.querySelector("body");
body.style.position ="center"; 
body.style.width="50%";
body.style.marginLeft="800px" 

 





























/* burada onun yaptığı kod */ 

/*const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


*/
