class Calculadora {
    /**
     * Soma dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} Resultado da soma
     */
    somar(a, b) {
        return a + b;
    }

    /**
     * Subtrai dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} Resultado da subtração
     */
    subtrair(a, b) {
        return a - b;
    }

    /**
     * Multiplica dois números
     * @param {number} a - Primeiro número
     * @param {number} b - Segundo número
     * @returns {number} Resultado da multiplicação
     */
    multiplicar(a, b) {
        return a * b;
    }

    /**
     * Divide dois números
     * @param {number} a - Primeiro número (dividendo)
     * @param {number} b - Segundo número (divisor)
     * @returns {number|null} Resultado da divisão ou null se divisão por zero
     */
    dividir(a, b) {
        if (b === 0) {
            mostrarMensagem("Divisão por zero não é permitida.", "error");
            return null;
        }
        return a / b;
    }

    /**
     * Calcula a potência de um número
     * @param {number} a - Base
     * @param {number} b - Expoente
     * @returns {number} Resultado da potenciação
     */
    potencia(a, b) {
        return Math.pow(a, b);
    }

    /**
     * Calcula a raiz quadrada de um número
     * @param {number} a - Número para calcular a raiz quadrada
     * @returns {number|null} Resultado da raiz quadrada ou null se número negativo
     */
    raizQuadrada(a) {
        if (a < 0) {
            mostrarMensagem("Raiz quadrada de número negativo não é permitida.", "error");
            return null;
        }
        return Math.sqrt(a);
    }

    /**
     * Calcula a raiz cúbica de um número
     * @param {number} a - Número para calcular a raiz cúbica
     * @returns {number} Resultado da raiz cúbica
     */
    raizCubica(a) {
        return Math.cbrt(a);
    }

    /**
     * Calcula a porcentagem de um valor
     * @param {number} total - Valor total
     * @param {number} percentual - Percentual a calcular
     * @returns {number} Resultado do cálculo percentual
     */
    porcentagem(total, percentual) {
        return (total * percentual) / 100;
    }
}

// Instancia a calculadora
const calc = new Calculadora();

/**
 * Valida se o valor é um número válido
 * @param {string} valor - Valor a ser validado
 * @returns {boolean} true se válido, false caso contrário
 */
function validarNumero(valor) {
    return valor !== "" && !isNaN(valor);
}

/**
 * Obtém e valida os números dos inputs
 * @returns {object|null} Objeto com num1 e num2 ou null se inválido
 */
function obterNumeros() {
    const input1 = document.getElementById("num1").value;
    const input2 = document.getElementById("num2").value;

    if (!validarNumero(input1)) {
        mostrarMensagem("Por favor, insira um número válido no campo 1.", "error");
        return null;
    }

    if (!validarNumero(input2)) {
        mostrarMensagem("Por favor, insira um número válido no campo 2.", "error");
        return null;
    }

    return {
        num1: parseFloat(input1),
        num2: parseFloat(input2)
    };
}

/**
 * Obtém e valida um único número do primeiro input
 * @returns {number|null} Número ou null se inválido
 */
function obterNumeroUnico() {
    const input1 = document.getElementById("num1").value;

    if (!validarNumero(input1)) {
        mostrarMensagem("Por favor, insira um número válido no campo 1.", "error");
        return null;
    }

    return parseFloat(input1);
}

/**
 * Atualiza o display com o resultado
 * @param {number} resultado - Resultado a ser exibido
 */
function atualizarDisplay(resultado) {
    const display = document.getElementById("display");
    // Formata o número para no máximo 10 casas decimais
    display.textContent = Number(resultado.toFixed(10));
}

/**
 * Mostra uma mensagem para o usuário
 * @param {string} texto - Texto da mensagem
 * @param {string} tipo - Tipo da mensagem (error ou success)
 */
function mostrarMensagem(texto, tipo = "error") {
    const messageArea = document.getElementById("message-area");
    
    // Remove mensagem anterior se existir
    messageArea.innerHTML = "";
    
    // Cria nova mensagem
    const message = document.createElement("div");
    message.className = `message ${tipo}`;
    message.textContent = texto;
    
    messageArea.appendChild(message);
    
    // Remove a mensagem após 4 segundos
    setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
            messageArea.innerHTML = "";
        }, 300);
    }, 4000);
}

/**
 * Executa uma operação que requer dois números
 * @param {string} operacao - Nome da operação a executar
 */
function executarOperacao(operacao) {
    const numeros = obterNumeros();
    
    if (numeros === null) {
        return;
    }

    const { num1, num2 } = numeros;
    let resultado;

    switch(operacao) {
        case "somar":
            resultado = calc.somar(num1, num2);
            break;
        case "subtrair":
            resultado = calc.subtrair(num1, num2);
            break;
        case "multiplicar":
            resultado = calc.multiplicar(num1, num2);
            break;
        case "dividir":
            resultado = calc.dividir(num1, num2);
            if (resultado === null) return;
            break;
        case "potencia":
            resultado = calc.potencia(num1, num2);
            break;
        case "porcentagem":
            resultado = calc.porcentagem(num1, num2);
            break;
        default:
            mostrarMensagem("Operação desconhecida.", "error");
            return;
    }

    atualizarDisplay(resultado);
    mostrarMensagem("Operação realizada com sucesso!", "success");
}

/**
 * Executa uma operação que requer apenas um número
 * @param {string} operacao - Nome da operação a executar
 */
function executarOperacaoUnica(operacao) {
    const num = obterNumeroUnico();
    
    if (num === null) {
        return;
    }

    let resultado;

    switch(operacao) {
        case "raizQuadrada":
            resultado = calc.raizQuadrada(num);
            if (resultado === null) return;
            break;
        case "raizCubica":
            resultado = calc.raizCubica(num);
            break;
        default:
            mostrarMensagem("Operação desconhecida.", "error");
            return;
    }

    atualizarDisplay(resultado);
    mostrarMensagem("Operação realizada com sucesso!", "success");
}

/**
 * Limpa todos os campos e o display
 */
function limpar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("display").textContent = "0";
    document.getElementById("message-area").innerHTML = "";
}

// Event listeners para tecla Enter nos inputs
document.getElementById("num1").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        executarOperacao("somar");
    }
});

document.getElementById("num2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        executarOperacao("somar");
    }
});
