const ServiceCalculadora = require('../src/services/calculadora')
const { describe, it, expect } = require('@jest/globals')

describe('Testes da operação somar: ', () => {
    
    it('Somar dois números positivos', () => {
        const resultado = ServiceCalculadora.Somar(1, 2);
        expect(resultado).toBe(3)
    })

    it('Somar um número negativo com um positivo', () => {
        const resultado = ServiceCalculadora.Somar(-1, 2);
        expect(resultado).toBe(1)
    })

    it('Somar um número positivo com um negativo', () => {
        const resultado = ServiceCalculadora.Somar(1, -2);
        expect(resultado).toBe(-1)
    })

    it('Somar um número negativo com zero', () => {
        const resultado = ServiceCalculadora.Somar(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Somar zero com um número negativo', () => {
        const resultado = ServiceCalculadora.Somar(0, -2);
        expect(resultado).toBe(-2)
    })

    it('Somar um número com uma letra', () => {
        const funSomar = () => ServiceCalculadora.Somar(1, 'a');
        expect(funSomar).toThrow('Digite um número válido')
    })
    
    it('Somar uma letra com um número', () => {
        const funSomar = () => ServiceCalculadora.Somar('b', 2);
        expect(funSomar).toThrow('Digite um número válido')
    })
    
})

describe('Testes da operaçao substrair: ', () => {
    
    it('Substrair dois números positivos', () => {
        const resultado = ServiceCalculadora.Substrair(5, 2);
        expect(resultado).toBe(3)
    })

    it('Substrair um número negativo com um positivo', () => {
        const resultado = ServiceCalculadora.Substrair(-1, 2);
        expect(resultado).toBe(-3)
    })

    it('Substrair um número positivo com um negativo', () => {
        const resultado = ServiceCalculadora.Substrair(1, -2);
        expect(resultado).toBe(3)
    })

    it('Substrair um número negativo com zero', () => {
        const resultado = ServiceCalculadora.Substrair(-1, 0);
        expect(resultado).toBe(-1)
    })
    
    it('Substrair zero com um número negativo', () => {
        const resultado = ServiceCalculadora.Substrair(0, -2);
        expect(resultado).toBe(2)
    })

    it('Substrair um número com uma letra', () => {
        const funSubstrair = () => ServiceCalculadora.Substrair(1, 'a');
        expect(funSubstrair).toThrow('Digite um número válido')
    })
    
    it('Substrair uma letra com um número', () => {
        const funSubstrair = () => ServiceCalculadora.Substrair('b', 2);
        expect(funSubstrair).toThrow('Digite um número válido')
    })
    
})


describe('Testes da operaçao multiplicar: ', () => {
    
    it('Multiplicar dois números positivos', () => {
        const resultado = ServiceCalculadora.Multiplicar(5, 2);
        expect(resultado).toBe(10)
    })

    it('Multiplicar um número negativo com um positivo', () => {
        const resultado = ServiceCalculadora.Multiplicar(-1, 2);
        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número positivo com um negativo', () => {
        const resultado = ServiceCalculadora.Multiplicar(1, -2);
        expect(resultado).toBe(-2)
    })

    it('Multiplicar um número negativo com zero', () => {
        const resultado = ServiceCalculadora.Multiplicar(-1, 0);
        expect(resultado).toBe(-0)
    })
    
    it('Multiplicar zero com um número negativo', () => {
        const resultado = ServiceCalculadora.Multiplicar(0, -2);
        expect(resultado).toBe(-0)
    })

    it('Multiplicar um número com uma letra', () => {
        const funMultiplicar = () => ServiceCalculadora.Multiplicar(1, 'a');
        expect(funMultiplicar).toThrow('Digite um número válido')
    })
    
    it('Multiplicar uma letra com um número', () => {
        const funMultiplicar = () => ServiceCalculadora.Multiplicar('b', 2);
        expect(funMultiplicar).toThrow('Digite um número válido')
    })
    
})

describe('Testes da operaçao dividir: ', () => {
    
    it('Dividir dois números positivos', () => {
        const resultado = ServiceCalculadora.Dividir(5, 2);
        expect(resultado).toBe(2.5)
    })

    it('Dividir um número negativo com um positivo', () => {
        const resultado = ServiceCalculadora.Dividir(-10, 2);
        expect(resultado).toBe(-5)
    })

    it('Dividir um número positivo com um negativo', () => {
        const resultado = ServiceCalculadora.Dividir(20, -2);
        expect(resultado).toBe(-10)
    })

    it('Dividir um número negativo com zero', () => {
        const funDividir = () => ServiceCalculadora.Dividir(1, 0);
        expect(funDividir).toThrow('Não é possível dividir por 0')
    })
    
    it('Dividir zero com um número negativo', () => {
        const resultado = ServiceCalculadora.Dividir(0, -2);
        expect(resultado).toBe(-0)
    })

    it('Dividir um número com uma letra', () => {
        const funDividir = () => ServiceCalculadora.Dividir(1, 'a');
        expect(funDividir).toThrow('Digite um número válido')
    })
    
    it('Dividir uma letra com um número', () => {
        const funDividir = () => ServiceCalculadora.Dividir('b', 2);
        expect(funDividir).toThrow('Digite um número válido')
    })
    
})


describe('Testes da operaçao potência: ', () => {
    
    it('Potencia dois números positivos', () => {
        const resultado = ServiceCalculadora.Potencia(2, 3);
        expect(resultado).toBe(8)
    })

    it('Potencia de um número negativo com um positivo', () => {
        const funPotencia = () => ServiceCalculadora.Potencia(-2, 3);
        expect(funPotencia).toThrow('O número da base deve ser positivo')
    })

    it('Potencia um número positivo com um negativo', () => {
        const resultado = ServiceCalculadora.Potencia(2, -3);
        expect(resultado).toBe(0.125)
    })

    it('Potencia um número negativo com zero', () => {
        const funPotencia = () => ServiceCalculadora.Potencia(-2, 0);
        expect(funPotencia).toThrow('O número da base deve ser positivo')
    })
    
    it('Potencia zero com um número negativo', () => {
        const resultado = ServiceCalculadora.Potencia(0, -2);
        expect(resultado).toBe(Infinity)
    })

    it('Potencia um número com uma letra', () => {
        const funPotencia = () => ServiceCalculadora.Potencia(1, 'a');
        expect(funPotencia).toThrow('Digite um número válido')
    })
    
    it('Potencia uma letra com um número', () => {
        const funPotencia = () => ServiceCalculadora.Potencia('b', 2);
        expect(funPotencia).toThrow('Digite um número válido')
    })
    
})



describe('Testes da operaçao raiz quadrada: ', () => {
    
    it('Raiz quadrada de um número positivo', () => {
        const resultado = ServiceCalculadora.RaizQuadrada(16);
        expect(resultado).toBe(4)
    })

    it('Raiz quadrada de um número negativo', () => {
        const funRaizQuadrada = () => ServiceCalculadora.RaizQuadrada(-14);
        expect(funRaizQuadrada).toThrow('Digite um número positivo')
    })

    it('Raiz quadrada de 0', () => {
        const resultado = ServiceCalculadora.RaizQuadrada(0);
        expect(resultado).toBe(0)
    })

    it('Raiz quadrada de -0', () => {
        const resultado = ServiceCalculadora.RaizQuadrada(-0);
        expect(resultado).toBe(-0)
    })

    it('Raiz quadrada de 1', () => {
        const resultado = ServiceCalculadora.RaizQuadrada(1);
        expect(resultado).toBe(1)
    })
    
    it('Raiz quadrada de Infinity', () => {
        const resultado = ServiceCalculadora.RaizQuadrada(Infinity);
        expect(resultado).toBe(Infinity)
    })
    
})