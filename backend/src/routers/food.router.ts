import { Food } from './../../../frontend/src/app/shared/models/Food';
import { Router } from 'express';
import { sample_foods, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res: any) => {
        const foodsCount = await FoodModel.countDocuments();
        if(foodsCount>0) {
            res.send("Database already seeded! Seed is already done!");
            return;
        }

        await FoodModel.create(sample_foods);
        res.send("Seed Is Done")
    }
))

// router.get("/", async (req, res) => {
//     const foods = await FoodModel.find();
//     res.send(sample_foods)
//  });

router.get("/", asyncHandler(async (req, res: any) => {
    const foods = await FoodModel.find();
    if (foods.length > 0) {
        res.send(foods)
    } else {
        console.log('UMAY!!')
        res.status(404).send({ message: "KINGINA MO LO" });
    }

    // foods.length > 0 ? res.send(foods) : res.status(404).send({ message: "KINGINA MO LO" });
    
}));

router.get("/search/:searchTerm", asyncHandler(
    async (req: any, res: any) => {
        const searchRegex = new RegExp(req.params.searchTerm, "i");
        const foods = await FoodModel.find({ name: {$regex:searchRegex}});
        res.send(foods);
    }
));

router.get("/tags", asyncHandler(
    async (req: any, res: any) => {
        const tags = await FoodModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count:-1});

        const all = {
            name: 'All',
            count: await FoodModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags)
    }
))

router.get("/tag/:tagName", asyncHandler(
    async (req: any, res: any) => {
        const foods = await FoodModel.find({ tags: req.params.tagName });
        res.send(foods);
    }
));

router.get("/:foodId", asyncHandler(
    async (req: any, res: any) => {
        // this below used to be the code for getting samle_foods from mockdata (data.ts), now we are using MongoDB
        // const foodId = req.params.foodId;
        // const food = sample_foods.find(food => food.id == foodId);

        const food = await FoodModel.findById(req.params.foodId);
        res.send(food);
}));

export default router;