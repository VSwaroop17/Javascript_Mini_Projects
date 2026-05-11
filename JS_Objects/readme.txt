Javascript Objects visualizer

ALL FILE IN ONE HTML FILE

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>JavaScript Objects Visualizer</title>

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
      padding:30px;
      color:white;
    }

    .container{
      width:100%;
      max-width:1200px;
    }

    h1{
      text-align:center;
      margin-bottom:30px;
      font-size:42px;
      color:#38bdf8;
    }

    .card{
      background:#111827;
      padding:25px;
      border-radius:20px;
      margin-bottom:30px;
      box-shadow:0 0 20px rgba(0,0,0,0.4);
    }

    .card h2{
      margin-bottom:20px;
      color:#38bdf8;
    }

    input{
      width:100%;
      padding:15px;
      margin-bottom:15px;
      border:none;
      border-radius:10px;
      background:#1e293b;
      color:white;
      font-size:16px;
      outline:none;
    }

    button{
      width:100%;
      padding:15px;
      border:none;
      border-radius:10px;
      background:#0ea5e9;
      color:white;
      font-size:17px;
      cursor:pointer;
      transition:0.3s;
      font-weight:bold;
    }

    button:hover{
      background:#0284c7;
      transform:translateY(-2px);
    }

    .grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:20px;
    }

    .box{
      background:#111827;
      padding:20px;
      border-radius:20px;
      min-height:220px;
      box-shadow:0 0 15px rgba(0,0,0,0.3);
      transition:0.3s;
    }

    .box:hover{
      transform:translateY(-5px);
    }

    .box h3{
      margin-bottom:15px;
      color:#38bdf8;
      font-size:22px;
    }

    .box p{
      color:#cbd5e1;
      line-height:1.8;
      word-break:break-word;
    }

    .highlight{
      color:#22c55e;
      font-weight:bold;
    }

    @media(max-width:700px){

      h1{
        font-size:30px;
      }

    }

  </style>
</head>

<body>

<div class="container">

  <h1>JavaScript Objects Visualizer</h1>

  <div class="card">

    <h2>Create Student Object</h2>

    <input 
      type="text"
      id="name"
      placeholder="Enter Student Name"
    >

    <input
      type="number"
      id="age"
      placeholder="Enter Age"
    >

    <input
      type="text"
      id="course"
      placeholder="Enter Course"
    >

    <button onclick="createObject()">
      Create Object
    </button>

  </div>

  <div class="grid">

    <div class="box">
      <h3>Object Intro</h3>
      <p id="intro">Waiting for object...</p>
    </div>

    <div class="box">
      <h3>Object Properties</h3>
      <p id="properties">Waiting for properties...</p>
    </div>

    <div class="box">
      <h3>Object Methods</h3>
      <p id="methods">Waiting for methods...</p>
    </div>

    <div class="box">
      <h3>Object this</h3>
      <p id="thisData">Waiting for this keyword...</p>
    </div>

    <div class="box">
      <h3>Object Display</h3>
      <p id="display">Waiting for display...</p>
    </div>

    <div class="box">
      <h3>Object Path</h3>
      <p id="path">Waiting for path...</p>
    </div>

    <div class="box">
      <h3>Object Constructor</h3>
      <p id="constructorData">
        Waiting for constructor...
      </p>
    </div>

  </div>

</div>

<script>

  // OBJECT CONSTRUCTOR

  function Student(name, age, course){

    this.name = name;
    this.age = age;
    this.course = course;

    // OBJECT METHOD

    this.introduce = function(){

      return `
        Hi, my name is ${this.name}
        and I am learning ${this.course}
      `;

    };

  }


  function createObject(){

    const name =
      document.getElementById("name").value;

    const age =
      document.getElementById("age").value;

    const course =
      document.getElementById("course").value;


    if(name === "" || age === "" || course === ""){

      alert("Please fill all fields");
      return;

    }


    // CREATE OBJECT

    const student =
      new Student(name, age, course);


    // OBJECT INTRO

    document.getElementById("intro").innerHTML = `

      Object Created Successfully <br><br>

      <span class="highlight">
      {
        name: "${student.name}",
        age: ${student.age},
        course: "${student.course}"
      }
      </span>

    `;


    // OBJECT PROPERTIES

    document.getElementById("properties").innerHTML = `

      student.name :
      <span class="highlight">
      ${student.name}
      </span>

      <br><br>

      student.age :
      <span class="highlight">
      ${student.age}
      </span>

      <br><br>

      student.course :
      <span class="highlight">
      ${student.course}
      </span>

    `;


    // OBJECT METHODS

    document.getElementById("methods").innerHTML = `

      Method Output : <br><br>

      <span class="highlight">
      ${student.introduce()}
      </span>

    `;


    // OBJECT THIS

    document.getElementById("thisData").innerHTML = `

      this.name →
      <span class="highlight">
      ${student.name}
      </span>

      <br><br>

      this.course →
      <span class="highlight">
      ${student.course}
      </span>

      <br><br>

      "this" refers to the current object.

    `;


    // OBJECT DISPLAY

    document.getElementById("display").innerHTML = `

      ${JSON.stringify(student,null,2)}

    `;


    // OBJECT PATH

    document.getElementById("path").innerHTML = `

      student.name →
      <span class="highlight">
      ${student.name}
      </span>

      <br><br>

      student.age →
      <span class="highlight">
      ${student.age}
      </span>

      <br><br>

      student.course →
      <span class="highlight">
      ${student.course}
      </span>

    `;


    // OBJECT CONSTRUCTOR

    document.getElementById("constructorData").innerHTML = `

      Object created using:

      <br><br>

      <span class="highlight">
      new Student("${student.name}",
      ${student.age},
      "${student.course}")
      </span>

    `;

  }

</script>

</body>
</html>