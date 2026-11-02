
//



var tabla_procesada = tabla_rfc_excl.replace(/\n+/g, "\n").replace(/\t+/g, "\t");


const columnas = tabla_procesada.split("\n").filter(fila => fila.trim() !== "").map((fila) => fila.split("\t"));

procesar = columnas.slice(1).some(fila => fila[2] !== "TOD130529GY1" && fila[2] !== "ULT800610387");
// console.log(columnas);
console.log(procesar)