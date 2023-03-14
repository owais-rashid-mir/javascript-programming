function verifyCredentials() {

    var uname = document.getElementById("un").value;
    var pword = document.getElementById("pw").value;

    var myUsername="owais";
    var myPassword="ovi";

    if(uname == myUsername && pword == myPassword) {
        document.write("Welcome");
    }

	else {
		document.write("Login credentials are incorrect.");
    }
    
}