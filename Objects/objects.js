var student = {

    name : "Owais",
    age : 21,
    gender : "Male",

    studentInfo : function() {
        document.write(student.name + "<br>" + student.age + "<br>" + student.gender + "<br>");
    }

};

document.write(student.age);     //prints 21.

document.write("<br>");

var newAge = student.age + 2;    
document.write(newAge);         //prints 23.

document.write("<br> <br>");

student.studentInfo();          //Prints all info.