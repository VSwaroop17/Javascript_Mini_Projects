function Student(name, age, course){

  this.name = name;
  this.age = age;
  this.course = course;

  this.introduce = function(){
    return `Hi, my name is ${this.name}`;
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

  // OBJECT CONSTRUCTOR
  const student = new Student(name, age, course);

  // OBJECT INTRO
  document.getElementById("intro").innerHTML = `
    Object Created Successfully <br><br>

    {
      name: "${student.name}",
      age: ${student.age},
      course: "${student.course}"
    }
  `;

  // OBJECT PROPERTIES
  document.getElementById("properties").innerHTML = `
    Name : ${student.name} <br>
    Age : ${student.age} <br>
    Course : ${student.course}
  `;

  // OBJECT METHOD
  document.getElementById("methods").innerHTML = `
    ${student.introduce()}
  `;

  // OBJECT THIS
  document.getElementById("thisData").innerHTML = `
    "this.name" refers to : ${student.name} <br><br>

    "this.course" refers to : ${student.course}
  `;

  // OBJECT DISPLAY
  document.getElementById("display").innerHTML = `
    ${JSON.stringify(student,null,2)}
  `;

  // OBJECT PATH
  document.getElementById("path").innerHTML = `
    student.name → ${student.name} <br><br>

    student.age → ${student.age} <br><br>

    student.course → ${student.course}
  `;

}