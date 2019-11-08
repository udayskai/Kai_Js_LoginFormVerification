

let loginVarification = function (loginModel){
 
     
    let Message=undefined;
    let tempEmail="udayskai@gmail.com";
    let tempPassword="1234";
    //let dataBaseOutput= [tempEmail="udayskai@gmail.com",tempPassword="1234"];
    
    if((tempEmail==userEmail)&&(tempPassword==userPassword)){
             Message=true;
    }
    else{
        Message="User data does Not match  please try agian!!"
    }
    return Message;
}