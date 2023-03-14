function studentGrade(name , percentage) {
    if(percentage >= 90) {
        document.write("Grade A. Impressive!");
    }

    else if(percentage >= 70) {
        document.write("Grade B. Good job!");
    }

    else if(percentage >=50) {
        document.write("C Grade. You need to improve.");
    }

    else{
        document.write("Fail. What the hell! You're gonna get your ass whooped!");
    }
}

studentGrade("Owais ", 99);