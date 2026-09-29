
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    email:{type:String, unique : true ,required:true},
    password:{type:String, required:true},

},{timestamp:true});
userSchema.prev("Save", async(res,req)=>{
    if(!this.isModified('password')) return;
   try{
         const salt=await bcrypt.genSalt(10);
         this.password = await bcrypt.hash(this.password, salt);
   }catch(err){
        console.error("error to hassing password", err)
        throw err;
   }
});

userSchema.methods.comparePassword=async function(password) {
    return await bcrypt.compare(password, this.password);
    
}

const User = mongoose.model("User",userSchema);
export default User;