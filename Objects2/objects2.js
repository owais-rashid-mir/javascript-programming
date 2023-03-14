var student = {

    name : "Owais",
    age : 21,
    gender : "Male",

    studentInfo : function() {
        document.write(student.name + "<br>" + student.age + "<br>" + student.gender + "<br>");
    }

};

if(student.name == "Owais") {
    student.studentInfo();          //Prints all info.
}

else{
    document.write("Not Owais.")
}

