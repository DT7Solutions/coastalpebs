function mailto () {
    debugger
     var name=document.myform.firstName.value;
     var sname=document.myform.lastName.value;
     let x = document.myform.email.value;
    //  let atposition = x.indexOf("@");
    //  let dotposition = x.lastIndexOf(".");
     var phone=document.myform.phone.value;
     var Subject=document.myform.subject.value;
     var message=document.myform.message.value;

    //  if ( name == "" ||  name == null) {
    //     document.getElementById("demo").innerHTML = "Please enter your name";
    //     // return false;
    //   }

    //   else {
    //     document.getElementById("demo").innerHTML = "";  
    //   }

    //   alert("success");

    //   if (sname == "" || sname == null) {
    //     document.getElementById("demo1").innerHTML = "Please enter your name";
    //     return false;
    //   }
    //   else {
    //     document.getElementById("demo1").innerHTML = "";
    //   }
    //   if ( phone == "" ||  phone == null) {
    //     document.getElementById("demo3").innerHTML = "Please enter your name";
    //     return false;
    //   }
    //   else if( phone.length!=10){
    //     document.getElementById("demo3").innerHTML = "Please enter your name";
    //     return false;

    //   }
    //   else {
    //     document.getElementById("demo3").innerHTML = "";
    //   }
      
     
    
    //   if (x == "" || x == null) {
    //     document.getElementById("demo2").innerHTML = "Please enter your email address";
    //     return false;
    //   }
    
    //   if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
    //     document.getElementById("demo2").innerHTML = "Please enter a valid email address";
    //     return false;
    //   }
    //   else {
    //     document.getElementById("demo2").innerHTML = "";
    //   }
    
    //   if (Subject == "" || Subject == null) {
    //     document.getElementById("demo4").innerHTML = "Please enter your subject";
    //     return false;
    //   }
    //   else {
    //     document.getElementById("demo4").innerHTML = "";
    //   }
    
    //   if (Message == "" ||Message == null) {
    //     document.getElementById("demo5").innerHTML = "Please enter a message";
    //     return false;
    //   }
    //   else {
    //     document.getElementById("demo5").innerHTML = "";
    //   }


     Email.send({
        Host : "smtp.elasticemail.com",
        Username : "coastalpeb.website@gmail.com",
        Password : "25B88F742CFF4D6C7DF7A0D4AE9F2B6FE761",
        To : 'info@coastalpebs.com',
        From : "coastalpeb.website@gmail.com",
        Subject : Subject,
        Body : "Name:" + name + "<br/> snamed:" + sname + "<br/> For email:" + x + "<br/> Subject:" + Subject + "<br/> Message:"
        +  message + "<br/> phone:" + phone
    }).then(
      alert("sucessfully sending email!")
    );
    
  }
      
