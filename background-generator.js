//selecting the h3 and inputs
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");//use class selector just like css
var color2= document.querySelector(".color2");
//creating var to change the background
var body = document.getElementById("gradient");
//set a function to avoid repetion
function setGradient(){
     //to change background using css syntax + javascript
   body.style.background = "linear-gradient(to right,"+ 
   color1.value +
   ","+
   color2.value +
   ")";
//for the current css background segement beneath h3
css.textContent = body.style.background + ";";
//textContent is like innerHTML or createTextNode
//it adds a text content to the body/DOM

}


//listening to the event for input(input)
color1.addEventListener("input", setGradient);//no need for () to call the function because its set.

color2.addEventListener("input", setGradient);

//you can also place setGradient() by type "oninput=setGradient()" in input on the html, you'd have to comment out the above to make it work

