import dotenv from "dotenv";
dotenv.config();

import path from 'path';

import express from "express";
import cors from "cors";

import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";

import { dbConnect } from "./configs/database.config";

dbConnect();

const app = express();
app.use(express.json());
//localhost:4200
//localhost:5000

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

// ALL OF THESE HAVE BEEN MOVED TO food.router.ts 
// app.get("/api/foods", (req, res) => {
//     // res.send("Hello World!")
//     res.send(sample_foods)
//  });

// app.get("/api/foods/search/:searchTerm", (req, res) => {
//     const searchTerm = req.params.searchTerm;
//     const foods = sample_foods.filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
//     res.send(foods);
// });

// app.get("/api/foods/tags", (req, res) => {
//     res.send(sample_tags)
// })

// app.get("/api/foods/tag/:tagName", (req, res) => {
//     const tagName = req.params.tagName;
//     const foods = sample_foods.filter(food => food.tags?.includes(tagName.trim()))
//     res.send(foods);
// });

//  app.get("/api/foods/:foodId", (req, res) => {
//     const foodId = req.params.foodId;
//     const food = sample_foods.find(food => food.id == foodId);
//     res.send(food);
// });


app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// ALL OF THESE HAVE BEEN MOVED TO user.router.ts 
// app.post("/api/users/login", (req, res) => {
//     // const body = req.body;
//     const { email, password } = req.body;
//     const user = sample_users.find(user => user.email == email && user.password == password);

//     if(user) {
//         res.send(generateTokenResponse(user));
//     } else {
//         res.status(400).send("Username or password is not valid!")
//     }
// });

// const generateTokenResponse = (user:any) => { 
//     const token = jwt.sign(
//         { email:user.email, isAdmin:user.isAdmin }, 
//         "SomeRandomText",
//         { expiresIn: "30d" }
//     );

//     user.token = token;
//     return user;
// }

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

 const port = 5000;
 app.listen(port, () => { 
        console.log(`Website is served on http://localhost:${port}`);
 });