export const totalcobssjM = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].total +
      array1[index[1]].total +
      array1[index[2]].total +
      array1[index[3]].total +
      array1[index[4]].total +
      array1[index[5]].total +
      array1[index[6]].total +
      array1[index[7]].total;
  }
  return total;
};

export const totalSsjaCob = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].total +
      array1[index[1]].total +
      array1[index[2]].total +
      array1[index[3]].total +
      array1[index[4]].total +
      array1[index[5]].total +
      array1[index[6]].total +
      array1[index[7]].total +
      array1[index[8]].total +
      array1[index[9]].total +
      array1[index[10]].total +
      array1[index[11]].total +
      array1[index[12]].total;
  }
  return total;
};

export const totalSsjCob = (array1, index) => {
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    cobrado =
      array1[index[0]].cobrado +
      array1[index[1]].cobrado +
      array1[index[2]].cobrado +
      array1[index[3]].cobrado +
      array1[index[4]].cobrado +
      array1[index[5]].cobrado +
      array1[index[6]].cobrado +
      array1[index[7]].cobrado +
      array1[index[8]].cobrado +
      array1[index[9]].cobrado +
      array1[index[10]].cobrado +
      array1[index[11]].cobrado +
      array1[index[12]].cobrado;
  }
  return cobrado;
};

export const totalSsjAdelantado = (array1, index) => {
  let adelantado = 0;

  for (let i = 0; i < array1.length; i++) {
    adelantado =
      array1[index[0]].adelantado +
      array1[index[1]].adelantado +
      array1[index[2]].adelantado +
      array1[index[3]].adelantado +
      array1[index[4]].adelantado +
      array1[index[5]].adelantado +
      array1[index[6]].adelantado +
      array1[index[7]].adelantado +
      array1[index[8]].adelantado +
      array1[index[9]].adelantado +
      array1[index[10]].adelantado +
      array1[index[11]].adelantado +
      array1[index[12]].adelantado;
  }
  return adelantado;
};

export const totalSsjaCobM = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].total +
      array1[index[1]].total +
      array1[index[2]].total +
      array1[index[3]].total +
      array1[index[4]].total +
      array1[index[5]].total +
      array1[index[6]].total;
  }
  return total;
};

export const totalSsjCobM = (array1, index) => {
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    cobrado =
      array1[index[0]].cobrado +
      array1[index[1]].cobrado +
      array1[index[2]].cobrado +
      array1[index[3]].cobrado +
      array1[index[4]].cobrado +
      array1[index[5]].cobrado +
      array1[index[6]].cobrado;
  }
  return cobrado;
};

export const totalSsjAdelantadoM = (array1, index) => {
  let adelantado = 0;

  for (let i = 0; i < array1.length; i++) {
    adelantado =
      array1[index[0]].adelantado +
      array1[index[1]].adelantado +
      array1[index[2]].adelantado +
      array1[index[3]].adelantado +
      array1[index[4]].adelantado +
      array1[index[5]].adelantado +
      array1[index[6]].adelantado;
  }
  return adelantado;
};

export const efectividadSP = (array, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[index[0]].total;
    total += array[index[1]].total;
    total += array[index[2]].total;
  }

  for (let i = 0; i < array.length; i++) {
    cobrado += array[index[0]].cobrado;
    cobrado += array[index[1]].cobrado;
    cobrado += array[index[2]].cobrado;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividad3 = (array1, array2, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total += array1[index[0]].cobranza;
    total += array1[index[1]].cobranza;
    total += array1[index[2]].cobranza;
    total += array1[index[3]].cobranza;
    total += array1[index[4]].cobranza;
    total += array1[index[5]].cobranza;
    total += array1[index[6]].cobranza;
    total += array1[index[7]].cobranza;
    total += array1[index[8]].cobranza;
    total += array1[index[9]].cobranza;
    total += array1[index[10]].cobranza;
    total += array1[index[11]].cobranza;
    total += array1[index[12]].cobranza;
  }

  for (let i = 0; i < array2.length; i++) {
    cobrado += array2[index[0]].cobranza;
    cobrado += array2[index[1]].cobranza;
    cobrado += array2[index[2]].cobranza;
    cobrado += array2[index[3]].cobranza;
    cobrado += array2[index[4]].cobranza;
    cobrado += array2[index[5]].cobranza;
    cobrado += array2[index[6]].cobranza;
    cobrado += array2[index[7]].cobranza;
    cobrado += array2[index[8]].cobranza;
    cobrado += array2[index[9]].cobranza;
    cobrado += array2[index[10]].cobranza;
    cobrado += array2[index[11]].cobranza;
    cobrado += array2[index[12]].cobranza;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividad3M = (array1, array2, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total += array1[index[0]].cobranza;
    total += array1[index[1]].cobranza;
    total += array1[index[2]].cobranza;
    total += array1[index[3]].cobranza;
    total += array1[index[4]].cobranza;
    total += array1[index[5]].cobranza;
    total += array1[index[6]].cobranza;
    total += array1[index[7]].cobranza;
    total += array1[index[8]].cobranza;
  }

  for (let i = 0; i < array2.length; i++) {
    if (index[0]) {
      cobrado += array2[index[0]].cobranza;
    }
    if (index[1]) {
      cobrado += array2[index[1]].cobranza;
    }
    if (index[2]) {
      cobrado += array2[index[2]].cobranza;
    }
    if (index[3]) {
      cobrado += array2[index[3]].cobranza;
    }
    if (index[4]) {
      cobrado += array2[index[4]].cobranza;
    }
    if (index[5]) {
      cobrado += array2[index[5]].cobranza;
    }
    if (index[6]) {
      cobrado += array2[index[6]].cobranza;
    }
    if (index[7]) {
      cobrado += array2[index[7]].cobranza;
    }
    // if (index[8]) {
    //   cobrado += array2[index[8]].cobranza;
    // }
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const totalfichasacobssj = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].fichas +
      array1[index[1]].fichas +
      array1[index[2]].fichas +
      array1[index[3]].fichas +
      array1[index[4]].fichas +
      array1[index[5]].fichas +
      array1[index[6]].fichas +
      array1[index[7]].fichas +
      array1[index[8]].fichas +
      array1[index[9]].fichas +
      array1[index[10]].fichas +
      array1[index[11]].fichas +
      array1[index[12]].fichas;
  }

  return total;
};

export const totalfichascobradasssj = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].fichascob +
      array1[index[1]].fichascob +
      array1[index[2]].fichascob +
      array1[index[3]].fichascob +
      array1[index[4]].fichascob +
      array1[index[5]].fichascob +
      array1[index[6]].fichascob +
      array1[index[7]].fichascob +
      array1[index[8]].fichascob +
      array1[index[9]].fichascob +
      array1[index[10]].fichascob +
      array1[index[11]].fichascob +
      array1[index[12]].fichascob;
  }

  return total;
};

export const totalfichasacobssjM = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].fichas +
      array1[index[1]].fichas +
      array1[index[2]].fichas +
      array1[index[3]].fichas +
      array1[index[4]].fichas +
      array1[index[5]].fichas +
      array1[index[6]].fichas;
  }

  return total;
};

export const totalfichascobradasssjM = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].fichascob +
      array1[index[1]].fichascob +
      array1[index[2]].fichascob +
      array1[index[3]].fichascob +
      array1[index[4]].fichascob +
      array1[index[5]].fichascob +
      array1[index[6]].fichascob;
  }

  return total;
};

export const total = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].total;
  }

  return total;
};

export const totaladelantadounindex = (array, index) => {
  let totalad = 0;

  for (let i = 0; i < array.length; i++) {
    totalad = array[index].adelantado;
  }

  return totalad;
};

export const totaladelantadodosindex = (array, index1, index2) => {
  let totalad = 0;
  let ad1 = 0;
  let ad2 = 0;

  for (let i = 0; i < array.length; i++) {
    ad1 = array[index1].adelantado;
  }

  for (let i = 0; i < array.length; i++) {
    ad2 = array[index2].adelantado;
  }

  totalad = ad1 + ad2;

  return totalad;
};

export const totalSsjCobrado = array => {
  let cobrado = 0;

  for (let i = 0; i < array.length; i++) {
    cobrado = array[i].cobrado;
  }

  return cobrado;
};

export const totalSsjACob = array => {
  let cobrado = 0;

  for (let i = 0; i < array.length; i++) {
    cobrado = array[i].total;
  }

  return cobrado;
};

export const total2indexacob = (array, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < array.length; i++) {
    total1 = array[index1].total;
  }

  for (let i = 0; i < array.length; i++) {
    total2 = array[index2].total;
  }

  let total = total1 + total2;

  return total;
};

export const total2indexcobrado = (array, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < array.length; i++) {
    total1 = array[index1].cobrado;
  }

  for (let i = 0; i < array.length; i++) {
    total2 = array[index2].cobrado;
  }

  let total = total1 + total2;

  return total;
};

export const total2indexfichas = (array, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < array.length; i++) {
    total1 = array[index1].fichas;
  }

  for (let i = 0; i < array.length; i++) {
    total2 = array[index2].fichas;
  }

  let total = total1 + total2;

  return total;
};

export const total2indexfichascob = (array, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < array.length; i++) {
    total1 = array[index1].fichascob;
  }

  for (let i = 0; i < array.length; i++) {
    total2 = array[index2].fichascob;
  }

  let total = total1 + total2;

  return total;
};

export const totalacob = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].total;
  }

  return total;
};

export const total1indexfichas = (array, index) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = array[index].fichas;
  }

  return total;
};

export const total1indexfichascob = (array, index) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = array[index].fichascob;
  }

  return total;
};

export const total1indexacob = (array, index) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = array[index].total;
  }

  return total;
};

export const total1indexcobrado = (array, index) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = array[index].cobrado;
  }

  return total;
};

export const totalcobrado = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].cobrado;
  }

  return total;
};

export const totalfichas = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].fichas;
  }

  return total;
};

export const totalfichascob = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].fichascob;
  }

  return total;
};

export const efectividad2 = (array1, array2, index) => {
  let total1 = 0;
  let total2 = 0;
  let cobrado1 = 0;
  let cobrado2 = 0;

  for (let i = 0; i < array1.length; i++) {
    total1 += array1[i].total;
    cobrado1 += array1[i].cobrado;
  }

  for (let i = 0; i < array2.length; i++) {
    total2 = array2[index].total;
    cobrado2 = array2[index].cobrado;
  }

  let total = total1 + total2;
  let cobrado = cobrado1 + cobrado2;

  let efectividad = (cobrado * 100) / total;
  // console.log("a cobrar: ", total, "cobrado: ", cobrado);
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividad = (array1, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  let cobrado1 = 0;
  let cobrado2 = 0;

  for (let i = 0; i < array1.length; i++) {
    total1 += array1[index1].total + array1[index1].adelantado;
    total2 += array1[index2].total + array1[index2].adelantado;
  }

  for (let i = 0; i < array1.length; i++) {
    cobrado1 += array1[index1].cobrado;
    cobrado2 += array1[index2].cobrado;
  }

  let total = total1 + total2;
  let cobrado = cobrado1 + cobrado2;

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividad2a = (array1, array2, index1) => {
  let total1;
  let total2;
  let cobrado1;
  let cobrado2;

  for (let i = 0; i < array1.length; i++) {
    total1 = array1[index1].total;
    cobrado1 = array1[index1].cobrado;
  }

  for (let i = 0; i < array2.length; i++) {
    total2 = array2[index1].total;
    cobrado2 = array2[index1].cobrado;
  }

  let total = total1 + total2;
  let cobrado = cobrado1 + cobrado2;

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efecparcial = (array1, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total += array1[index].total + array1[index].adelantado;
  }

  for (let i = 0; i < array1.length; i++) {
    cobrado += array1[index].cobrado;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividadTjt = array1 => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total += array1[i].total;
  }

  for (let i = 0; i < array1.length; i++) {
    cobrado += array1[i].cobrado;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividadSsj = (array1, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].total +
      array1[index[0]].adelantado +
      array1[index[1]].total +
      array1[index[1]].adelantado +
      array1[index[2]].total +
      array1[index[2]].adelantado +
      array1[index[3]].total +
      array1[index[3]].adelantado +
      array1[index[4]].total +
      array1[index[4]].adelantado +
      array1[index[5]].total +
      array1[index[5]].adelantado +
      array1[index[6]].total +
      array1[index[6]].adelantado +
      array1[index[7]].total +
      array1[index[7]].adelantado +
      array1[index[8]].total +
      array1[index[8]].adelantado +
      array1[index[9]].total +
      array1[index[9]].adelantado +
      array1[index[10]].total +
      array1[index[10]].adelantado +
      array1[index[11]].total +
      array1[index[11]].adelantado +
      array1[index[12]].total +
      array1[index[12]].adelantado;
  }

  for (let i = 0; i < array1.length; i++) {
    cobrado =
      array1[index[0]].cobrado +
      array1[index[1]].cobrado +
      array1[index[2]].cobrado +
      array1[index[3]].cobrado +
      array1[index[4]].cobrado +
      array1[index[5]].cobrado +
      array1[index[6]].cobrado +
      array1[index[7]].cobrado +
      array1[index[8]].cobrado +
      array1[index[9]].cobrado +
      array1[index[10]].cobrado +
      array1[index[11]].cobrado +
      array1[index[12]].cobrado;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividadSsjM = (array1, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].total +
      array1[index[0]].adelantado +
      array1[index[1]].total +
      array1[index[1]].adelantado +
      array1[index[2]].total +
      array1[index[2]].adelantado +
      array1[index[3]].total +
      array1[index[3]].adelantado +
      array1[index[4]].total +
      array1[index[4]].adelantado +
      array1[index[5]].total +
      array1[index[5]].adelantado +
      array1[index[6]].total +
      array1[index[6]].adelantado;
  }

  for (let i = 0; i < array1.length; i++) {
    cobrado =
      array1[index[0]].cobrado +
      array1[index[1]].cobrado +
      array1[index[2]].cobrado +
      array1[index[3]].cobrado +
      array1[index[4]].cobrado +
      array1[index[5]].cobrado +
      array1[index[6]].cobrado;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};
