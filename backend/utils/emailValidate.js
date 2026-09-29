function emailValidate(email){
    try{
        //basic email regex
         const emailRegex= /^[^\s@]+@[^\s@]\.[^\s@]+$/;
         if(!emailRegex.test(email)){
            return email;
         }

         const domain=email.split("@")[1];
         const allowDomain = "vdart"
         if(allowDomain.includes(domain)){
            return email;
         }else{
            return email;
         }

    }catch(err){
        console.error("error in email validation", err)
    }
}
export default emailValidate;