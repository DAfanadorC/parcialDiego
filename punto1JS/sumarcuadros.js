function sumarCuadros(arrayNumeros) {
    function mostrarCuadrado(numero, esUltimo) {
        const numeroString = String(numero);
        const length = numeroString.length;
        const borde = esUltimo ? "=" : "-";
        let result = "+ " + borde.repeat(length) + " +\n";
        result += "| " + numeroString.padEnd(length, ' ') + " |\n";
        result += "+ " + borde.repeat(length) + " +\n";
        return result;
    }

    let sumaCuadrados = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        if (i === arrayNumeros.length - 1) {
            console.log(mostrarCuadrado(arrayNumeros[i], false));
        } else {
            console.log(mostrarCuadrado(arrayNumeros[i], false));
        }
        sumaCuadrados += arrayNumeros[i];
    }
    console.log(mostrarCuadrado(sumaCuadrados, true));

}

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);
