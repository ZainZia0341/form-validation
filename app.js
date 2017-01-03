function formSubmit(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var emailValidation = true;
    var emailValidation2 = false;
    if(emailAddress === ""){
        emailValidation = false;
        alert("please write something in email address");
    }       
    for(i = 0; i < emailAddress.length; i++){
        if(emailAddress.slice(i,i+1) === " "){
            emailValidation = false;
            alert("please delete spacing in email address");
            break;
        }
    }
    for(i = 0; i < emailAddress.length; i++){
        if(emailAddress.slice(i,i+1) === "@"){
            emailValidation2 = true;
            break;
        }
    }
    if(emailValidation2 == false){
        alert("please add @ sign in email")
    }    
    if (emailValidation == true && emailValidation2 == true){
         alert("email is valid")
    }
}