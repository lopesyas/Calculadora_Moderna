📌 CalculadoraWeb

Projeto de calculadora online responsiva, desenvolvida com HTML, CSS e JavaScript puro no front-end e um backend em Python (apenas como referência de lógica).
✅ Pronto para deploy no Netlify
 como site estático.

📂 Estrutura de Pastas
CalculadoraWeb/
├── backend/
│   └── calculadora.py    # Lógica original em Python (referência)
└── frontend/
    ├── index.html        # Estrutura da página
    ├── style.css         # Estilos responsivos
    └── script.js         # Lógica interativa

🧠 Funcionalidades

➕ Soma
➖ Subtração
✖️ Multiplicação
➗ Divisão (com verificação de zero)
aᵇ Potência
√ Raiz Quadrada
∛ Raiz Cúbica
% Porcentagem (total, percentual)
🧼 Botão de limpeza do resultado

🖼️ Interface
-- Design minimalista com fundo em gradiente azul escuro
-- Botões grandes e claros para cada operação
-- Layout totalmente responsivo (desktop e mobile)
-- Mensagens de erro para entradas inválidas (ex: divisão por zero)

🧑‍💻 Time
Projeto desenvolvido por:
-- Yasmin Lopes 💻✨

📊 Diagrama de Classes (Backend Python)
classDiagram
    class Calculadora {
        +somar(a, b)
        +subtrair(a, b)
        +multiplicar(a, b)
        +dividir(a, b)
        +potencia(a, b)
        +raiz_quadrada(a)
        +raiz_cubica(a)
        +porcentagem(total, percentual)
    }
