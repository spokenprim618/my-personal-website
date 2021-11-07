let colorButton = document.querySelector("#Color");
 
let newIMGButton = document.querySelector("#newIMG");
 
let mainpagecolor = document.querySelector(".mainPage");
let interestColor = document.querySelector("#interest");
let futureColor = document.querySelector("#future");
let artColor = document.querySelector("#art");
let IMG = document.querySelector("#Reinhardt");
// let coolor = [0,0,0]
 
colorButton.addEventListener("click",newRGB);
newIMGButton.addEventListener("click",newimage);
 
 
 
function newRGB() {
//     mainpagecolor.style["color"]=coolor;
//    let ranDecimal = Math.random();
// let randNumber = ranDecimal * 256;
// let r = Math.floor(randNumber)
//    let RanDecimal = Math.random();
// let RandNumber = RanDecimal * 256;
// let g = Math.floor(RandNumber)
//    let Randecimal = Math.random();
// let Randnumber = Randecimal * 256;
// let b = Math.floor(Randnumber)
//     coolor = [r,g,b];
mainpagecolor.style["color"]="yellow";
interestColor.style["color"]="yellow";
var x, i;
x = document.querySelectorAll(".toolbar>a");
for (i = 0; i < x.length; i++) {
  x[i].style.color = "red";
}
artColor.style["color"]="yellow";
futureColor.style["color"]="yellow";
};

function newimage(){
   
    if(IMG.src== "http://127.0.0.1:5500/images/cool.jpg"){
      IMG.src="http://127.0.0.1:5500/images/lol.png"; 
      lol= IMG.src;
      console.log(lol);
    }
    else{
      IMG.src= "http://127.0.0.1:5500/images/cool.jpg"
      Lol= IMG.src;
      console.log(Lol);
    }
};  