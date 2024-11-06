function validate(e){
   
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const age=document.getElementById("age").value;

    const msgbox=document.getElementById("welcome");
    let msg="";
    if (email===""){
        msg="please enter email";
        msgbox.style.color="red";
    }
    else if (pass==="") {
        msg="password must be atleast eight characters";
        msgbox.style.color="red";
    }
    else if (age==="") {
        msg="age must be between 16 to 60";
        msgbox.style.color="red";
    }
    else {
        msg="login successful";
        msgbox.style.color="green";
    }
msgbox.innerText=msg;
}
