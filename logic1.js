//    first creat caller

const call =(name)=> document.querySelector(name);

const callA = (names) => document.querySelectorAll(names);

//    Creat three variable 
let current = "";
let past    = "";
let op      = "";

//       call all numbers
let numbers = callA(".num");
let screen = call("#total");
let use = callA(".use")


//    screen show numbers
function showScreen () {
   numbers.forEach(button => {
      button.addEventListener("click",() => {
         screen.textContent += button.textContent;
         current += button.textContent;
         
      });
   });
};


//    operator keys call.
const plus = call("#plus")
const minus = call("#minus")
const devide = call("#devide")
const multy = call("#multy")
const power = call("#power")


//  if recive any operator key 

function oparetor () {
   use.forEach(button => {
      button.addEventListener("click", ()=> {
         past = current ;
         op = button.textContent;
         screen.textContent = past +" " + op;
         current = "";
         
         
      });
   });
};

const equal = call("#equal");
//const first = Number(current);
//const second = Number(past);

function results () {
   equal.addEventListener ("click", ()=> {
      const first = Number(past);
      const second = Number(current);
      let result;
      
      if (op === "+") {
         result = first + second;
         screen.textContent = result;
         }
         else if (op === "-") {
         result = first - second;
         screen.textContent = result;
      }
      else if (op === "÷") {
         result = first / second ;
         screen.textContent = result;
      
      }
      else if (op === "×") {
         result = first * second;
         screen.textContent = result;
      }
      else if (op === "^") {
         result = first ** second;
         screen.textContent = result;
      }
      else {
         throw new Error ("Mr R :- please check where is problem !")
      
      };
   });
};

//    Lets use clear button.
const clear = call(".clear");

function clearAll () {
   clear.addEventListener("click", () => {
      screen.textContent = "";
      current ="";
      past = "";
      op = "";
   })
}


showScreen();
oparetor();
results();
clearAll();

