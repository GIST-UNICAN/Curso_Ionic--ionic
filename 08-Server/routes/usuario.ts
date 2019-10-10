import { Usuario } from './../modelos/usuario.model';
import { Router, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { BADQUERY } from 'dns';


const userRoutes = Router();

// login

userRoutes.post('/login',(req: Request, resp: Response)=>{
    const body = req.body;
    Usuario.findOne({ email: body.email},(err, userDB)=>{
        if (err) throw err;
        if (! userDB){
            return resp.json( {
                ok: false,
                mensaje: 'Usuario / contraseña no correctos'
            })
        }
        if(userDB.compararPassword(body.password)){
            resp.json({
                ok: true,
                token: 'sdjhs'
            })
        }else{
            resp.json({
                ok: false,
                token: 'Usuario / contraseña no correctos ***'
            })
        }
    })
});


// crear usuario
userRoutes.post('/create',(req: Request, resp: Response) =>{
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        avatar: req.body.avatar
    };

    Usuario.create(user).then(userDB=>{
        resp.json({
            ok: true,
            user: userDB
        })
    }).catch(err=>{
        resp.json({
            ok:false,
            error: err
        })
    }

    )

})

export default userRoutes;



