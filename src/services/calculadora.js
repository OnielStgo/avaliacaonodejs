class ServiceCalculadora {

    Info() {
        return {
            "operação_1": "Somar", 
            "operação_2": "Substrair", 
            "operação_3": "Multiplicar", 
            "operação_4": "Dividir", 
            "operação_5": "Potencia", 
            "operação_6": "RaizQuadrada", 
        };
    }

    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Digite um número válido')
        }
        return Number(num1) + Number(num2);
    }

    Substrair(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Digite um número válido')
        }
        return Number(num1) - Number(num2);
    }

    Multiplicar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Digite um número válido')
        }
        return Number(num1) * Number(num2);
    }

    Dividir(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Digite um número válido')
        }
        if (num2 === 0) {
            throw new Error('Não é possível dividir por 0')
        }
        return Number(num1) / Number(num2);
    }

    Potencia(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Digite um número válido')
        }
        if (num1 < 0) {
            throw new Error('O número da base deve ser positivo')
        }
        return Math.pow(num1, num2)
    }

    RaizQuadrada(num1) {
        if (isNaN(num1)) {
            throw new Error('Digite um número válido')
        }
        if (num1 < 0 ) {
            throw new Error('Digite um número positivo')
        }
        return Math.sqrt(num1)
    }



}

module.exports = new ServiceCalculadora()