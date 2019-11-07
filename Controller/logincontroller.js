///<reference path="../lib/jquery-3.4.1.min.js"/>
///<reference path="../Model/loginModel.js"/>

function logincontroller(loginModel) // As a class constructor with parameter 
 
{
 
  let loginModelobj=loginModel;
  


  //private method
  let getLoginInfo=function (){

    loginModelobj.email=$("#email").val();
    loginModelobj.password=$("password").val();
    
   
   }






  // public method 
    this.onCancelbtn = function() 
    {
      $("#email").val("");
      $("#password").val("");
       //Focus
      $("#email").focus();
    };
    

  //public method
    this.onSubmit =function(){
     loginModelobj=getLoginInfo();
    }

}
// instance of diffrent class to acess the method & propety of class

let loginModelobj= new loginModel();
let logincontrollerobj= new logincontroller(loginModelobj);


// We can not call instance in html onclik due to this we use another function.

 function onCancelEvent(){
   logincontrollerobj.onCancelbtn();
  
}

