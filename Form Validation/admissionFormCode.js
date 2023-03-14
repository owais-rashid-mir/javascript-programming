function validateForm() {

    var getName = document.getElementById("name");
    var getRegNo = document.getElementById("regNo");
    var getPhone = document.getElementById("phone");
    var getCourse = document.getElementById("selectbox");
    var getEmail = document.getElementById("email");


    /*  We can also combine the conditions 'Name and Registration Number
        cannot be blank' by using Logical || OR operator. For e.g:
        if(getName.value.trim() == "" || getRegNo.value.trim() == "")
        But we'd like them to have separate verifications so that the user can
        get specific and targeted messages.
        Don't use && Logical Operator even though it looks like the correct 
        choice. It's actually not. 
    */

    /*  Validation - Name cannot be empty.
        trim() removes the whitespaces. So, if a user tries to
        bypass the validation by pressing blank spaces, trim().
        will not allow to do that.
    */
    if(getName.value.trim() == "" ) {
        alert("The field 'Name' cannot be blank.");

        /*  Marking the 'Name' field with red border 
            if the data entered by user is not valid.
         */
        //getName.focus();  //Not necessary.
        getName.style.border = "solid 3px red";


        /*  If Name field is empty, this statement stops the onSubmit 
            from submitting the form. If this return statement is not written, 
            the form will then still be submitted even if the Name field
            is empty.
            Although, it will show an alert message, the form will still be
            submitted. That's why we need to write the return statement.
        */
        return false;   
    }


    /*  Validation - Name cannot be less than 5 letters.
    */
    if(getName.value.length < 5) {
        alert("The Name cannot be less than 5 letters.");

        //getNames.focus();
        getName.style.border = "solid 3px red";

        return false;  
   } 



    /*  Validation - Registration Number cannot be empty.
    */
   if(getRegNo.value.trim() == "" ) {
        alert("The field 'Registration Number' cannot be blank.");

        getRegNo.style.border = "solid 3px red";

        return false;   
    }



   /*  Validation - A course must be selected.
    */
   if(getCourse.value == "-1"){
       alert("Please select a course");

       getCourse.style.border = "solid 3px red";

       return false;
   }



    /*  Validation - Phone must be of valid format. It should be of 10 digits
        and should not contain any letter or any special characters.
    */
   /*   The below Reg Exp can also be written as:
        var phoneRegExp = /^\d{10,10}$/ ;
   */
   var phoneRegExp = /^[0-9]{10,10}$/ ;   //Regular expression for phone...

   
   /* If the regular expression of phone doesn't match with the phone no. entered 
       by the user, send an alert message and return false. 
   */
   if(!phoneRegExp.test(getPhone.value)) {     // 'test' is a method. It tests for a match in a string.
       alert("Please provide a valid phone number. It must be 10 digits and it shouldn't contain any letters or special characters.");

       getPhone.style.border = "solid 3px red";

       return false;

   }


    /*  Validation - Email must be of valid format.
        ex: myname@example.com
    */
    //Regular expression for email.
    var emailRegExp = /^([a-z A-Z 0-9 \.-]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,4})$/ ;
    
    if(!emailRegExp.test(getEmail.value)) {    
        alert("Please provide a valid email address");
        
        getEmail.style.border = "solid 3px red";
        return false;

    }


} //End of function.