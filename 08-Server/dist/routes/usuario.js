"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_model_1 = require("./../modelos/usuario.model");
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRoutes = express_1.Router();
// login
userRoutes.post('/login', (req, resp) => {
    const body = req.body;
    usuario_model_1.Usuario.findOne({ email: body.email }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return resp.json({
                ok: false,
                mensaje: 'Usuario / contraseña no correctos'
            });
        }
        if (userDB.compararPassword(body.password)) {
            resp.json({
                ok: true,
                token: 'sdjhs'
            });
        }
        else {
            resp.json({
                ok: false,
                token: 'Usuario / contraseña no correctos ***'
            });
        }
    });
});
// crear usuario
userRoutes.post('/create', (req, resp) => {
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    };
    usuario_model_1.Usuario.create(user).then(userDB => {
        resp.json({
            ok: true,
            user: userDB
        });
    }).catch(err => {
        resp.json({
            ok: false,
            error: err
        });
    });
});
exports.default = userRoutes;
