const express = require("express")
const router = express.Router()
const foodItem = require('../models/foodItem')

// submit a post
router.post('/', async(req,res)=>{
    const post = new foodItem({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    })
    try{
        const savedItem = await post.save()
        res.json(savedItem)
    } catch(error){
        res.json({message: error})
    }
})

// gets all posts
router.get('/', async(req,res)=>{
    try{
        const items = await foodItem.find()
        res.json(items)
    } catch(error){
        res.json({ message: error })
    }
})

// get specific item
router.get('/:itemId', async(req,res)=>{
    try{
        const oneItem = await foodItem.findById(req.params.itemId)
        res.json(oneItem)
    } catch (error) {
        res.json({message: error})
    }
})

// Update a post
router.patch('/:itemId', async(req,res)=>{
    try{
        const updatedItem = await foodItem.updateOne(
            {_id: req.params.itemId},
            {$set: { name: req.body.name },
            $set: {price: req.body.price }})
        res.json(updatedItem)
    } catch (error) {
        req.json({ message: error})
    }
})

// Delete a specific post
router.delete('/:itemId', async(req,res)=>{
    try{
        const remodeItem = await foodItem.remode({ _id: req.params.itemId})
        res.json(remodeItem)
    } catch(error) {
        res.json({ message: error})
    }
})
module.exports = router