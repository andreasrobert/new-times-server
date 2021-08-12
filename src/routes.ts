import express from 'express';
import { pool } from './db';
// import {pool} from './db';

const router = express.Router();

router.get('/', (_,res) =>{
    res.send("hello there");
})



router.get("/todos", async (_req, res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }catch(err){
        console.log(err.meesage)
    }
})

router.get("/todos/:id", async (req, res)=>{
    try{
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    }catch(err){
        console.log(err.meesage)
    }
})

router.post("/todos", async (req, res)=>{
    try{
        const {description} = req.body
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);
        res.json(newTodo.rows[0])

    }catch(err){
        console.log(err.meesage)
    }
})

router.put("/todos/:id", async (req, res)=>{
    try{
        const { id } = req.params;
        const { description } = req.body
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
        res.json("Todo was updated");
    }catch(err){
        console.log(err.meesage)
    }
})

router.delete("/todos/:id", async (req, res)=>{
    try{
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was updated");
    }catch(err){
        console.log(err.meesage)
    }
})

router.get("*", (_req,res)=>{
    res.send("hello there");
})

export default router;
