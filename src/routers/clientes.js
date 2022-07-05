import { Router } from "express";
const router = Router(); 

const getNombreSession = req => req.session.name ? req.session.name : 'Invitado';
 
router.get('/login',(req,res) => {
    const nombre = getNombreSession(req);
    res.json({nombre});
})

router.post('/login',(req,res) => {
    for(const key in req.body){
        req.session[key] = req.body[key]
    }  
    res.redirect('/productos')
}); 




export default router; 