function selectGender(){

    var r1 = document.getElementById("rd1");
    var r2 = document.getElementById("rd2");

    if(r1.checked == true)
        alert("The gender selected is : " + r1.value);

    else if(r2.checked == true)
        alert("The gender selected is : " + r2.value);

    else
        alert("No gender selected.");
}