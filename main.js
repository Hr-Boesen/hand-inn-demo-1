
// variables in the beginning of the JS file, can be reached by any function
//attached to the global scope. Because it is always possible for functions to see what's in 
// their parent scope :)

//get element with tagName


let elParagraph =  document.getElementsByTagName("p");


//get element with className 
let elDemoClass = document.getElementsByClassName("demoClass");


//get element with Id 
//Use only id when creating dynamic data e.g. from a database, to keep track of each element
// and to be syncronised with the database Id's 
let elId =   document.getElementById("demoId");


//**************************I RECOOMEND THE QUERYSELECTOR*******************************************************

//get id with querySelector 
//Use only id when creating dynamic data e.g. from a database, to keep track of each element
// and to be syncronised with the database Id's 
let elQuerySelectorId =   document.querySelector("#demoQuerySelectorId");

//get class with querySelector
// This would be my favorite selector for the first hand-inn the 21/3 -2019 :) 
let elQuerySelectorClass = document.querySelector(".demoQuerySelectorClass");


//Get all nodes from the class 

let elQuerySelectorClassAll = document.querySelectorAll(".demoQuerySelectorClassAll");

console.log(elQuerySelectorClassAll);


//-------------------------------------------------------------------------

//EventListeners can execute functions sitting on the global scope, because 
// they are functions declarions end therefore hoisted to the top of the file. 

//First element is 0, second is 1... like an array
elParagraph[0].addEventListener("click", FunctionOne);

//First element is 0, second is 1... like an array
elDemoClass[0].addEventListener("click", FunctionTwo);
elId.addEventListener("click", FunctionThree);
elQuerySelectorId.addEventListener("click", FunctionFour);
elQuerySelectorClass.addEventListener("click", FunctionFive);


//First element is 0, second is 1... like an array
elQuerySelectorClassAll[0].addEventListener("click", FunctionSix);


//Declarative functions, can be acceed in global scope. 


function FunctionOne() {
  elParagraph[0].innerHTML = "You clicked a paragraph tag";
  elParagraph[0].classList.add("red");
}

function FunctionTwo() {
  elDemoClass[0].innerHTML = "You clicked a div with a class tag";
  elDemoClass[0].classList.add("green");
}

function FunctionThree() {
  elId.innerHTML = "   You clicked a div with a id tag";
  elId.classList.add("yellow");
}

function FunctionFour() {
  elQuerySelectorId.innerHTML = "You clicked a div with a id tag";
  elQuerySelectorId.classList.add("blue");
}

function FunctionFive() {
  elQuerySelectorClass.innerHTML = "You clicked a div with a class tag";
  elQuerySelectorClass.classList.add("pink");
}

// For..of loop is used here, it is pensum for next hand-inn and therefore the ES6 way to do it :) 
// You are welcome to use for... of loops in your first hand-inn

function FunctionSix() {
  for(const element of elQuerySelectorClassAll){
      element.innerHTML = element.innerHTML.toLocaleUpperCase();
  }
}

// For..of loop is used here, it is pensum for next hand-inn and therefore the ES6 way to do it :) 
// You are welcome to use for... of loops in your first hand-inn

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for(const day of days){

    console.log(day); // print out sunday, monday, tuesday ...
}
