const TNA = 137.50;
const TEA = 297.97;
const CFTEA = 375.60;
const descuentoCliente = 10;
const limitePrestamo = 10000;
let interesPaquete;
let interesCuota;

// Pregunta si sos Cliente
let sosCliente = ingresarCliente();

// Tipo de prestamo
let tipoPrestamo = ingresarTipoPaquete();
interesPaquete = calcularInteresPaquete(tipoPrestamo);

// Monto solicitado
let montoSolicitado = ingresarMontoSolicitado();

//Cantidad de cuotas 
let cuotas = solicitarCuotas();
interesCuota = calcularInteresCuota(cuotas);

//Interes
valorCuota = calculoValorCuota();

// Salida
let salida = informarPrestamo();



