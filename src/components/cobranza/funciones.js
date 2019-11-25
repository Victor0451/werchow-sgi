export const totalcobssjM = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].cobranza +
      array1[index[1]].cobranza +
      array1[index[2]].cobranza +
      array1[index[3]].cobranza +
      array1[index[4]].cobranza +
      array1[index[5]].cobranza +
      array1[index[6]].cobranza +
      array1[index[7]].cobranza;
  }
  return total;
};

export const totalcobssj = (array1, index) => {
  let total = 0;

  for (let i = 0; i < array1.length; i++) {
    total =
      array1[index[0]].cobranza +
      array1[index[1]].cobranza +
      array1[index[2]].cobranza +
      array1[index[3]].cobranza +
      array1[index[4]].cobranza +
      array1[index[5]].cobranza +
      array1[index[6]].cobranza +
      array1[index[7]].cobranza +
      array1[index[8]].cobranza +
      array1[index[9]].cobranza +
      array1[index[10]].cobranza +
      array1[index[11]].cobranza +
      array1[index[12]].cobranza;
  }
  return total;
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

export const totalfichasssj = (array1, index) => {
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

export const total = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].cobranza;
  }

  return total;
};

export const total2index = (array, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < array.length; i++) {
    total1 = array[index1].cobranza;
  }

  for (let i = 0; i < array.length; i++) {
    total2 = array[index2].cobranza;
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

export const total1index = (array, index) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = array[index].cobranza;
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

export const totalcobrado = array => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i].cobranza;
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
    total += array[i].fichas;
  }

  return total;
};

export const efectividad2 = (array1, array2) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total += array1[i].cobranza;
  }

  for (let i = 0; i < array2.length; i++) {
    cobrado += array2[i].cobranza;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efectividad = (array1, array2, index1, index2) => {
  let total1 = 0;
  let total2 = 0;

  let cobrado1 = 0;
  let cobrado2 = 0;

  for (let i = 0; i < array1.length; i++) {
    total1 += array1[index1].cobranza;
    total2 += array1[index2].cobranza;
  }

  for (let i = 0; i < array2.length; i++) {
    cobrado1 += array2[index1].cobranza;
    cobrado2 += array2[index2].cobranza;
  }

  let total = total1 + total2;
  let cobrado = cobrado1 + cobrado2;

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const efecparcial = (array1, array2, index) => {
  let total = 0;
  let cobrado = 0;

  for (let i = 0; i < array1.length; i++) {
    total += array1[index].cobranza;
  }

  for (let i = 0; i < array2.length; i++) {
    cobrado += array2[index].cobranza;
  }

  let efectividad = (cobrado * 100) / total;
  let resultado = efectividad.toFixed(2);

  return resultado;
};

export const imprimir = () => {
  let contenido = document.getElementById("ssj").innerHTML;
  let contenidoOrg = document.body.innerHTML;

  document.body.innerHTML = contenido;

  window.print();

  document.body.innerHTML = contenidoOrg;

  window.location.reload(true);
};
