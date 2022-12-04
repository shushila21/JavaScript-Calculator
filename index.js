let display = document.getElementById("display");
let input = document.getElementsByClassName("input");
let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerHTML);

    if (e.target.innerHTML == "=") {
      try {
        display.innerHTML = eval(display.innerHTML);
      } catch {
        display.innerHTML = "Error";
      }
    } else if (e.target.innerHTML == "C") {
      display.innerHTML = "";
    }
  
    else if (e.target.innerHTML== "←" ){
        display.innerHTML = display.innerHTML.slice(0, -1)
    } 
    else {
      display.innerHTML += e.target.innerHTML;
    }
  });
});
