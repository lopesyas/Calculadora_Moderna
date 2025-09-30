class Calculadora:
    def somar(self, a, b):
        return a + b

    def subtrair(self, a, b):
        return a - b

    def multiplicar(self, a, b):
        return a * b

    def dividir(self, a, b):
        if b == 0:
            print("Divisão por zero não é permitida.")
            return None
        return a / b

    def potencia(self, a, b):
        return a ** b

    def raiz_quadrada(self, a):
        if a < 0:
            print("Raiz quadrada de número negativo não é permitida.")
            return None
        return a ** 0.5

    def raiz_cubica(self, a):
        return a ** (1/3)

    def porcentagem(self, total, percentual):
        return (total * percentual) / 100
