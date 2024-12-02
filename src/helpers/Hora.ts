const fechaActual = new Date();
const año = fechaActual.getFullYear();
const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
const dia = String(fechaActual.getDate()).padStart(2, '0');

export const fechaFormateada = `${año}-${mes}-${dia}`;