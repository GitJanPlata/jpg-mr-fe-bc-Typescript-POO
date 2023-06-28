"use strict";
class Raices {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    obtenerRaices() {
        const solucion1 = (-this.b + Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        const solucion2 = (-this.b - Math.sqrt(this.getDiscriminante())) / (2 * this.a);
        console.log("Solucion 1");
        console.log(solucion1);
        console.log("Solucion 2");
        console.log(solucion2);
    }
    obtenerRaiz() {
        const x = -this.b / (2 * this.a);
        console.log("Unica solucion");
        console.log(x);
    }
    getDiscriminante() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
    tieneRaices() {
        return this.getDiscriminante() > 0;
    }
    tieneRaiz() {
        return this.getDiscriminante() === 0;
    }
    calcular() {
        if (this.tieneRaices()) {
            console.log("La ecuación tiene dos soluciones:");
            this.obtenerRaices();
        }
        else if (this.tieneRaiz()) {
            console.log("La ecuación tiene una única solución:");
            this.obtenerRaiz();
        }
        else {
            console.log("La ecuación no tiene soluciones reales.");
        }
    }
}
const ecuacion = new Raices(1, 4, 3);
console.log("Discriminante:", ecuacion.getDiscriminante());
console.log("¿Tiene raíces?:", ecuacion.tieneRaices());
console.log("¿Tiene raíz única?:", ecuacion.tieneRaiz());
ecuacion.calcular();
ecuacion.obtenerRaices();
ecuacion.obtenerRaiz();
