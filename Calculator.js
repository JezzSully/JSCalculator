function buttonPress(clicked_name){
  console.log(clicked_name);
  let screen = document.getElementById("screen");
  screen.value = screen.value + document.getElementById(clicked_name).value;
}

function calculateSum2(){
  let sum = document.getElementById('screen').value;
  let values = [];
  let funcs = [];
  let breakpoint=0;
  for(let i=0; i < sum.length; i++){
    if(sum.charAt(i) == "+" || sum.charAt(i) == "-" || sum.charAt(i) == "/" || sum.charAt(i) == "*" ){
      values.push(sum.substring(breakpoint, i));
      funcs.push(sum.charAt(i));
      breakpoint = i + 1;
    }
  }
  values.push(sum.substring(breakpoint,sum.length));

  while(values.length > 0 && funcs.length > 0){
    console.log(values);
    console.log(funcs);
    let a = values.pop();
    let b = values.pop();
    let x = funcs.pop();

    switch(x){
      case "+":
        values.push(add(a,b));
        break;
      case "-":
        values.push(subtract(b,a));
        break;
      case "*":
        values.push(mul(a,b));
        break;
      case "/":
        values.push(divi(b,a));
        break;
    }
  }
  document.getElementById("screen").value = values.pop();
}


function add(num1,num2){
  //document.getElementById('screen').value = +num1 + +num2;
return +num1 + +num2;
}

function subtract(num1,num2){
  //document.getElementById('screen').value = +num1 - +num2;
return +num1 - +num2;
}

function mul(num1,num2){
  //document.getElementById('screen').value = +num1 * +num2;
return +num1 * +num2;
}

function divi(num1,num2){
  //document.getElementById('screen').value = +num1 / +num2;
return +num1 / +num2;
}