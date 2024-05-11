import { Router } from "express";
import { sample_users } from "../data";
import jwt  from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, UserModel } from "../models/user.model";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import bcrypt from "bcryptjs";

const router = Router()

router.get("/seed", asyncHandler(
    async (req, res: any) => {
        const usersCount = await UserModel.countDocuments();
        if(usersCount>0) {
            res.send("Database already seeded! Seed is already done!");
            return;
        }

        await UserModel.create(sample_users);
        res.send("Seed Is Done")
    }
))

router.post("/login", asyncHandler(
    async (req: any, res: any) => {
        // const body = req.body;
        const { email, password } = req.body;
        // const user = sample_users.find(user => user.email == email && user.password == password);
        const user = await UserModel.findOne({ email, password })
    
        if(user) {
            res.send(await generateTokenResponse(user));
        } else {
            res.status(HTTP_BAD_REQUEST).send("Username or password is not valid!")
        }
    }
));

router.post("/register", asyncHandler(
    async (req: any, res: any) => { 
        const { name, email, password, address } = req.body;
        const user = await UserModel.findOne({ email });
        if(user) {
            res.status(HTTP_BAD_REQUEST).send('User already exist, please login!');
            return;
        }

        const encryptedPassword = await bcrypt.hashSync(password, 10);

        const newUser:User = {
            id:'',
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address,
            isAdmin: false
        }

        const dbUser = await UserModel.create(newUser);

        res.send(await generateTokenResponse(dbUser));

    })
)

const generateTokenResponse = async (user:any) => { 
    const token = jwt.sign(
        { email:user.email, isAdmin:user.isAdmin }, 
        "SomeRandomText",
        { expiresIn: "30d" }
    );

    // console.log('TOKEN-->', token)

    user.token = token;
    // console.log('USER-->', user)
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
      };
}

export default router;