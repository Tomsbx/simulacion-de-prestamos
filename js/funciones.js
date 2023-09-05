function ingresarCliente() {
    let sosCliente = prompt("Sos cliente del banco?\n1 - Si \n2 - No");

    while (sosCliente != 1 && sosCliente != 2) {
        alert("Solo es posible indicar 1 - Si 2 - No");
        sosCliente = prompt("Sos cliente?\n1 - Si\n2 - No");
    }

    console.log("Sos cliente? : " + sosCliente);

    return sosCliente;
}

function ingresarTipoPaquete() {
    let tipoPrestamo = prompt(
        "Ingrese el tipo de paquete: Empresa/Personal/Proyecto"
    ).toUpperCase();

    return tipoPrestamo;
}

function calcularInteresPaquete(tipoPrestamo) {

    if (tipoPrestamo == "EMPRESA") {
        interesPaquete = 30;
    } else if (tipoPrestamo == "PERSONAL") {
        interesPaquete = 40;
    } else {
        interesPaquete = 50;
    }

    return interesPaquete;
}

function ingresarMontoSolicitado() {
    let montoSolicitado = parseFloat(
        prompt("Ingrese el Monto a Solicitar: (Max: $ " + limitePrestamo + ")")
    );

    while (montoSolicitado > limitePrestamo) {
        alert("Superaste el monto Maximo permitido!");
        montoSolicitado = parseFloat(
            prompt("Ingrese el Monto a Solicitar: (Max: $ " + limitePrestamo + ")")
        );
    }
    console.log("Monto Solicitado :" + montoSolicitado);

    return montoSolicitado;
}

function solicitarCuotas() {
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));

    while (cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48) {
        alert("Indique una de las cuotas mencionadas");
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));
    }
    return cuotas;
}

function calcularInteresCuota(cuotas) {
    if (cuotas == 12) {
        interesCuota = 30;
    } else if (cuotas == 24) {
        interesCuota = 40;
    } else if (cuotas == 36) {
        interesCuota = 50;
    } else {
        interesCuota = 60;
    }

    console.log("Interes de cuota :" + interesCuota);

    return interesCuota;
}

function calculoValorCuota() {
    let cuotaPura = montoSolicitado / cuotas;
    let interesPaqueteCuota = interesPaquete / cuotas;
    let interesCuotaCuota = interesCuota / cuotas;
    let tnaCuota = TNA / cuotas;
    let teaCuota = TEA / cuotas;
    let cfteaCuota = CFTEA / cuotas;

    let cuotaPura_interesPaqueteCuota = (cuotaPura * interesPaqueteCuota) / 100;
    console.log(cuotaPura_interesPaqueteCuota);

    let cuotaPura_interesCuotaCuota = (cuotaPura * interesCuotaCuota) / 100;
    console.log(cuotaPura_interesCuotaCuota);

    let cuotaPura_tnaCuota = (cuotaPura * tnaCuota) / 100;
    console.log(cuotaPura_tnaCuota);

    let cuotaPura_teaCuota = (cuotaPura * teaCuota) / 100;
    console.log(cuotaPura_teaCuota);

    let cuotaPura_cfteaCuota = (cuotaPura * cfteaCuota) / 100;
    console.log(cuotaPura_cfteaCuota);

    let valorCuota =
        cuotaPura +
        cuotaPura_interesPaqueteCuota +
        cuotaPura_interesCuotaCuota +
        cuotaPura_tnaCuota +
        cuotaPura_teaCuota +
        cuotaPura_cfteaCuota;
    console.log("Valor de cuota: " + valorCuota);

    return valorCuota;
}

function informarPrestamo() {
    if (sosCliente == 1) {
        valorCuota = valorCuota - (valorCuota * descuentoCliente) / 100;
    }

    let salida = "SIMULADOR DE PRESTAMOS\n\n";
    salida += "Sos Cliente :" + sosCliente + "\n";
    salida += "Tipo de paquete: " + tipoPrestamo + "\n";
    salida += "Monto Solicitado: $ " + montoSolicitado + "\n";
    salida += "Cuotas: " + cuotas + "\n";
    salida += "Total a Pagar:\n ";
    salida += cuotas + " cuotas de $" + valorCuota.toFixed(2);
    alert(salida);
}
