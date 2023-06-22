const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hola estoy en Home")
});

router.get("/details", (req, res) => {
    res.send("Hola estoy en details")
});
router.get("/carrito", (Req, res) => {
    res.send("Hola estoy en el carrito")
});
router.get("/login", (req, res) => {
    res.send("Hola estoy en el login")
});
router.get("/register", (req, res) => {
    res.send("Hola estoy en el register")
});

module.exports= router