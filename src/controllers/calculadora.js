const ServiceCalculadora = require('../services/calculadora')

class ControllerCalculadora {
    Info(req, res) {
        try {
            const operacoes = ServiceCalculadora.Info();
            res.status(201).json({ operacoes })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }
    Somar(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        try {
            const resultado = ServiceCalculadora.Somar(num1, num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Substrair(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        try {
            const resultado = ServiceCalculadora.Substrair(num1, num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Multiplicar(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        try {
            const resultado = ServiceCalculadora.Multiplicar(num1, num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Dividir(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        try {
            const resultado = ServiceCalculadora.Dividir(num1, num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Potencia(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        try {
            const resultado = ServiceCalculadora.Potencia(num1, num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    RaizQuadrada(req, res) {
        const num1 = req.body.num1
        const num2 = req.body.num2
        try {
            const resultado = ServiceCalculadora.RaizQuadrada(num1, num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

}

module.exports = new ControllerCalculadora()