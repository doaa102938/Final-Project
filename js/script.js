let text = '';


function validate() {
    if (document.myform.project.value == "") {
        text = "Project Name Can't Be Empty"
        document.getElementById("ex1").innerHTML = text
        document.myform.project.focus();
    }



    let emailid = document.myform.email.value;
    let atpos = emailid.indexOf("@");
    let dotpos = emailid.lastIndexOf(".");
    if (document.myform.email.value == "") {
        text = "Email Can't Be Empty"
        document.getElementById("ex2").innerHTML = text
        document.myform.email.focus();
    } else if (atpos < 1 || dotpos - atpos < 2) {

        text = "Enter Vaild Email "
        document.getElementById("ex2").innerHTML = text
        document.myform.email.focus();


    }



    if (document.myform.describe.value == "") {
        text = "Please Describe Your Project"
        document.getElementById("ex3").innerHTML = text
        document.myform.describe.focus();
    }
    if (document.myform.name.value == "") {
        text = "Please Enter Your Telegram Name"
        document.getElementById("ex4").innerHTML = text
        document.myform.name.focus();
    }




}