///<reference path="../lib/jquery-3.4.1.min.js"/>
///<reference path="../Model/loginModel.js"/>

function logincontroller(loginModel) // As a class constructor with parameter 
 {
   //private property
  let loginModelobj=loginModel;
  

   //private method
   let getLoginInfo=function (){
        loginModelobj.email=$(".email").val();
        loginModelobj.password=$(".password").val();
      }

  let loginVarification = function (){
      let Message=undefined;
      let tempEmail="udayskai@gmail.com";
      let tempPassword="1234";
      //let dataBaseOutput= [tempEmail="udayskai@gmail.com",tempPassword="1234"];
  
   if
     ((tempEmail==loginModelobj.email)
      &&
     (tempPassword==loginModelobj.password))
        {
           Message=true;
        }

   else
        {
      Message="User data does Not match  please try agian!!"
        }
         return Message;
  } 



 let redirectSucessful = function () {
  window.location.pathname = "../../../../../../CODES/Git/Kai_Js_LoginVarification/View/index.html";
  }

 let loginFailed = function (Message) {
    alert("try agian");
   document.write(Message);
 }
  // respnse meessage

 let loginOutput = function (Message) {

  let type = typeof (Message);
    if (type === "boolean") {
    redirectSucessful();
      }
  else
      {
      loginFailed(Message);
      }

}



  // public method  Two function
    this.onCancelbtn = function() 
    {
      $(".email").val("");
      $(".password").val("");
       //Focus
      $("#email").focus();
    };
    

   this.onSubmit =function(){
           getLoginInfo();
           Message=loginVarification();
           loginOutput(Message);
    }
   
}

// instance of diffrent class to acess the method & propety of class

let loginModelobj= new loginModel();
let logincontrollerobj= new logincontroller(loginModelobj);


// We can not call instance in html onclik due to this we use another function.
 function onCancelEvent(){
   logincontrollerobj.onCancelbtn();
  
}
function onSubmitEvent(){
   logincontrollerobj.onSubmit();


}
