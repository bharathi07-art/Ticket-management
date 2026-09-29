/* email verfication
    const input = "employeea@vdart.com";
    try {
    const validateEmail = async (input) => {
        const mail =await input.split("@")[1];

        if (mail === "vdart.com") {
        console.log("Register successfull!!!");
        } else {
        console.log("invalid creditional, please check your email");
        }
    };

    console.log(validateEmail(input));
    } catch (err) {
    console.error(err);
    }


*/


//Generate the tokens
/*
    import jwt from 'jsonwebtoken';

    const generateToken = ()=>{
    try{

        const secret= "JWT-SECRET-TOKEN";
        const input ={
            name:"bha",
            age:20
        };
        const token=jwt.sign(input, secret,{expiresIn:"30d"});
        console.log(token);
        

    }catch(err){
    console.error(err);
    }}
    generateToken();


*/
function validateEmail(email) {
  // Step 1: Basic email format check using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  // Step 2: Extract domain and check against allowed domain(s)
  const domain = email.split("@")[1];
  const allowedDomains = "vdart.com"; // you can add more if needed

  if (allowedDomains.includes(domain)) {
    return "Register successful!";
  } else {
    return "Invalid credential, please check your email";
  }
}
export default  validateEmail;