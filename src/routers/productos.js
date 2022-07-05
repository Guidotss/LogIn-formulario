import { Router } from "express";
import path from 'path';


const router = Router(); 

router.get('/',(req,res) => {
    res.sendFile(path.resolve('public','productos.html'))
})
router.get('/logout',(req,res) => {
    req.session.destroy(err =>{
        if(!err){
            res.redirect('/')
        }else{
            res.json({status:'log out ERROR', body:err});
        }
    })
})


export default router; 