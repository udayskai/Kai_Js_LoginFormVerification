

let loginVarification = function(userEmail,userPassword) {
 
     
    let Message=undefined;
    let dataBaseOutput= [tempEmail="udayskai@gmail.com",tempPassword="1234"];
    
    if((dataBaseOutput[0]==userEmail)&&(dataBaseOutput[1]==userPassword)){
             Message=true;
    }
    else{
        Message="User data does Not match  please try agian!!"
    }
    return Message;
}