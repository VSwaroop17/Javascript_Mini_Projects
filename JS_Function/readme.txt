JavaScript Fucntion Visualizer 


-ALL FILES IN ONE HTML FILE 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>JS Function Visualizer</title>

  <style>
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, Helvetica, sans-serif;
    }

    body{
      min-height:100vh;
      background:#0f172a;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:20px;
      color:white;
    }

    .container{
      width:100%;
      max-width:900px;
      background:#111827;
      border-radius:20px;
      padding:30px;
      box-shadow:0 0 25px rgba(0,0,0,0.5);
    }

    h1{
      text-align:center;
      margin-bottom:10px;
      font-size:40px;
      color:#38bdf8;
    }

    .subtitle{
      text-align:center;
      color:#94a3b8;
      margin-bottom:30px;
    }

    .top-section{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:20px;
      margin-bottom:25px;
    }

    select,input{
      width:100%;
      padding:14px;
      border:none;
      border-radius:10px;
      background:#1e293b;
      color:white;
      font-size:16px;
      outline:none;
    }

    button{
      width:100%;
      padding:14px;
      border:none;
      border-radius:10px;
      background:#0ea5e9;
      color:white;
      font-size:17px;
      cursor:pointer;
      transition:0.3s;
      margin-top:20px;
      font-weight:bold;
    }

    button:hover{
      background:#0284c7;
      transform:translateY(-2px);
    }

    .visualizer{
      margin-top:40px;
    }

    .flow{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:20px;
      flex-wrap:wrap;
      margin-top:30px;
    }

    .box{
      width:200px;
      min-height:120px;
      background:#1e293b;
      border-radius:15px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      padding:15px;
      position:relative;
      overflow:hidden;
    }

    .box h2{
      font-size:18px;
      margin-bottom:10px;
      color:#38bdf8;
    }

    .value{
      font-size:26px;
      font-weight:bold;
      text-align:center;
      word-break:break-word;
    }

    .arrow{
      font-size:35px;
      color:#38bdf8;
      animation:move 1s infinite alternate;
    }

    @keyframes move{
      from{
        transform:translateX(0);
      }
      to{
        transform:translateX(8px);
      }
    }

    .steps{
      margin-top:40px;
      background:#0f172a;
      padding:20px;
      border-radius:15px;
    }

    .steps h3{
      margin-bottom:15px;
      color:#38bdf8;
    }

    .step{
      padding:12px;
      background:#1e293b;
      margin-bottom:10px;
      border-radius:10px;
      opacity:0;
      transform:translateY(10px);
      animation:fadeIn 0.5s forwards;
    }

    @keyframes fadeIn{
      to{
        opacity:1;
        transform:translateY(0);
      }
    }

    .console{
      margin-top:30px;
      background:black;
      padding:20px;
      border-radius:15px;
      font-family:monospace;
      color:#00ff88;
      min-height:120px;
    }

    .console-line{
      margin-bottom:8px;
    }

    @media(max-width:700px){
      .top-section{
        grid-template-columns:1fr;
      }

      .flow{
        flex-direction:column;
      }

      .arrow{
        transform:rotate(90deg);
      }
    }

  </style>
</head>

<body>

  <div class="container">

    <h1>JS Function Visualizer</h1>
    <p class="subtitle">
      Visualize how JavaScript functions work step-by-step
    </p>

    <div class="top-section">

      <div>
        <label>Select Function</label>
        <select id="functionSelect">
          <option value="square">Square Number</option>
          <option value="cube">Cube Number</option>
          <option value="evenodd">Even / Odd Checker</option>
          <option value="factorial">Factorial</option>
          <option value="reverse">Reverse Text</option>
        </select>
      </div>

      <div>
        <label>Enter Input</label>
        <input type="text" id="userInput" placeholder="Enter value"/>
      </div>

    </div>

    <button onclick="runFunction()">
      Run Function
    </button>

    <div class="visualizer">

      <div class="flow">

        <div class="box">
          <h2>INPUT</h2>
          <div class="value" id="inputValue">-</div>
        </div>

        <div class="arrow">➜</div>

        <div class="box">
          <h2>FUNCTION</h2>
          <div class="value" id="functionValue">-</div>
        </div>

        <div class="arrow">➜</div>

        <div class="box">
          <h2>OUTPUT</h2>
          <div class="value" id="outputValue">-</div>
        </div>

      </div>

      <div class="steps">
        <h3>Execution Steps</h3>
        <div id="stepsContainer"></div>
      </div>

      <div class="console" id="consoleBox">
        <div class="console-line">> Waiting for execution...</div>
      </div>

    </div>

  </div>

<script>

const inputValue = document.getElementById("inputValue");
const functionValue = document.getElementById("functionValue");
const outputValue = document.getElementById("outputValue");
const stepsContainer = document.getElementById("stepsContainer");
const consoleBox = document.getElementById("consoleBox");

function addConsole(text){
  const line = document.createElement("div");
  line.classList.add("console-line");
  line.innerText = "> " + text;
  consoleBox.appendChild(line);

  consoleBox.scrollTop = consoleBox.scrollHeight;
}

function addStep(text,index){
  const step = document.createElement("div");
  step.classList.add("step");

  step.style.animationDelay = `${index * 0.2}s`;

  step.innerText = text;

  stepsContainer.appendChild(step);
}

function clearAll(){
  stepsContainer.innerHTML = "";
  consoleBox.innerHTML = "";
}

function square(num){
  return num * num;
}

function cube(num){
  return num * num * num;
}

function evenOdd(num){
  return num % 2 === 0 ? "Even" : "Odd";
}

function factorial(num){
  let result = 1;

  for(let i=1;i<=num;i++){
    result *= i;
  }

  return result;
}

function reverseText(text){
  return text.split("").reverse().join("");
}

function runFunction(){

  clearAll();

  const selectedFunction =
    document.getElementById("functionSelect").value;

  const userInput =
    document.getElementById("userInput").value;

  if(userInput === ""){
    alert("Please enter a value");
    return;
  }

  inputValue.innerText = userInput;
  functionValue.innerText = selectedFunction + "()";

  addConsole("Function execution started...");
  addConsole("Input received: " + userInput);

  let result;

  switch(selectedFunction){

    case "square":

      addStep("Step 1: Received number " + userInput,1);

      addStep(
        "Step 2: Multiplying number by itself",
        2
      );

      result = square(Number(userInput));

      addStep(
        "Step 3: Returning result " + result,
        3
      );

      break;

    case "cube":

      addStep("Step 1: Received number " + userInput,1);

      addStep(
        "Step 2: Multiplying number 3 times",
        2
      );

      result = cube(Number(userInput));

      addStep(
        "Step 3: Returning result " + result,
        3
      );

      break;

    case "evenodd":

      addStep(
        "Step 1: Checking remainder using modulus %",
        1
      );

      result = evenOdd(Number(userInput));

      addStep(
        "Step 2: Result is " + result,
        2
      );

      break;

    case "factorial":

      addStep(
        "Step 1: Starting factorial calculation",
        1
      );

      result = factorial(Number(userInput));

      addStep(
        "Step 2: Multiplying numbers from 1 to input",
        2
      );

      addStep(
        "Step 3: Final factorial is " + result,
        3
      );

      break;

    case "reverse":

      addStep(
        "Step 1: Splitting text into characters",
        1
      );

      addStep(
        "Step 2: Reversing character order",
        2
      );

      result = reverseText(userInput);

      addStep(
        "Step 3: Joining reversed characters",
        3
      );

      break;
  }

  outputValue.innerText = result;

  addConsole("Function processing...");
  addConsole("Output generated: " + result);
  addConsole("Execution completed successfully");

}

</script>

</body>
</html>