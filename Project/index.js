function calculate()
{
    var num1 = parseInt(document.getElementById("fnum").value);
    var num2 = parseInt(document.getElementById("snum").value);
    let answer = 0;

    var o= document.getElementById("operation");
    var operation = o.options[o.selectedIndex].value;
    

    if (operation == 1) {
      answer = num1 + num2;
    }
    else if (operation == 2) {
      answer = num1 - num2;
    }
    else if (operation == 3) {
       answer = num1 / num2;
    }
    else {
      answer = num1 * num2;
    }
    console.log(answer);
    let resultElm = document.getElementById('total');
    resultElm.input = '';
    resultElm.value = answer ;
    
}

function randomNumber()
{
  let hex = "0123456789ABCDEF" ;
  let num = "#";

  for(let i=0; i<6; i++)
  {
    let random = Math.floor(Math.random() *16);
    num += hex[random] ;
  }
  return num ;

}

const changeColor = function changeColor()
{
  document.body.style.backgroundColor = randomNumber();
}

document.getElementById("start").addEventListener("click", startChangingColor);

let IntervalID;
function startChangingColor()
{
  if(!IntervalID)
  {
    IntervalID = setInterval(changeColor, 2000);
  }

}

document.getElementById("stop").addEventListener("click", stopChangingColor);

function stopChangingColor()
{
  clearInterval(IntervalID);
  IntervalID = null;
}