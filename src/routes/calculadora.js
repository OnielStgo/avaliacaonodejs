const express = require('express');
const ControllerCalculadora = require('../controllers/calculadora')

const router = express.Router()

router.get("/calculadora/info", ControllerCalculadora.Info)
router.post("/calculadora/somar", ControllerCalculadora.Somar)
router.post("/calculadora/substrair", ControllerCalculadora.Substrair)
router.post("/calculadora/multiplicar", ControllerCalculadora.Multiplicar)
router.post("/calculadora/dividir", ControllerCalculadora.Dividir)
router.post("/calculadora/potencia", ControllerCalculadora.Potencia)
router.post("/calculadora/raizquadrada", ControllerCalculadora.RaizQuadrada)

module.exports = router;