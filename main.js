const colorCircle = document.querySelectorAll(".color-circle");

let linewidth = 7;
let isDrawing;
let x;
let y;

var canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

canvas.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener("mouseup",()=>{
    isDrawing = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove',(e)=>{
    draw(e.offsetX,e.offsetY);
})

c.fillStyle = "red";
c.strokeStyle = c.fillStyle;

function draw(x2,y2){
    if(isDrawing){
        c.beginPath();
        c.arc(x2,y2,linewidth,0 ,2 * Math.PI);
        c.closePath();
        c.fill();
        drawLine(x,y,x2,y2);
    }
    x=x2;y=y2;
}

function drawLine(x1,y1,x2,y2){
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.strokeStyle = c.fillStyle;
    c.lineWidth = linewidth * 2;
    c.stroke();
}

const selectColor = (ele) => {
    removeActiveColor();
    c.fillStyle = ele.getAttribute("data-color");
    ele.classList.add("active");
}

function removeActiveColor(){
    colorCircle.forEach((circle)=>{
        circle.classList.remove("active");
    })
};

document.querySelector("a").addEventListener("click",(e)=>{
    e.target.href = canvas.toDataURL();
})