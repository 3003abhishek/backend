const bcrypt = require("bcrypt");
const UserModel = require("../models/user");
const jwt=require("jsonwebtoken");

module.exports = function (app: any) {

    const authRauter = app.Router();

    authRauter.post("/register", async (req: any, res: any) => {
        try {

            let { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({
                    "status": 400,
                    "message": "Email and Password required"
                })
            }
            else {
                let existingUser = await UserModel.findOne({ email });
                console.log(existingUser);
                if (existingUser) {
                    res.send("Bhaiya yeh admi to pehle se he kla");
                }
                else {
                    let hashPassword = bcrypt.hash(password, 10, async (err: any, hash: any) => {

                        try {
                            console.log(hash);
                            let user = await new UserModel({ email, password: hash });
                            user.save();
                            res.send("Tum registered ho gaye sale");
                        }

                        catch (err) {
                            console.log(err);
                        }

                    });

                }
            }
        }

        catch (err:any){
            res.json({"status":404,"message":err.message})
        }

    });



    authRauter.post("/login",async(req:any,res:any)=>{
    try{
        let {email,password}=req.body;

        if(!email||!password){
            res.send("Bhai email password mangta he");
        }
        else{
            let existingUser = await UserModel.findOne({ email });

            //  console.log(existingUser);
              bcrypt.compare(password,existingUser.password,(err:any,result:any)=>{
                  if(result){
                    let token=jwt.sign({id:existingUser._id},"gandhi");

                    res.json({"status":200,"message":"Logged in successfully","token":token});
                  }
              })
             
        }

    }



    catch(err){
         console.log(err);
    }
    })















    return authRauter


}






