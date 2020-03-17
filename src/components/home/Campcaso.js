import React, { Component } from "react";

export default class Campcaso extends Component {
  render() {
    const { buscaso } = this.props;
    return (
      <div className=" alert alert-success mt-4">
        {buscaso.idcampana === 1
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de MARIA GALIAN`
          : buscaso.idcampana === 2
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de GISELA GIMENEZ`
          : buscaso.idcampana === 3
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de MARISA CARRIZO`
          : buscaso.idcampana === 4
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de VANESA GOROSITO`
          : buscaso.idcampana === 5
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de SILVIA JUAREZ`
          : buscaso.idcampana === 6
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de MARIA GALIAN`
          : buscaso.idcampana === 7
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de GISELA GIMENEZ`
          : buscaso.idcampana === 8
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de MARISA CARRIZO`
          : buscaso.idcampana === 9
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de VANESA GOROSITO`
          : buscaso.idcampana === 10
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES WERCHOW de SILVIA JUAREZ`
          : buscaso.idcampana === 11
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de MARIA GALIAN`
          : buscaso.idcampana === 12
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de GISELA GIMENEZ`
          : buscaso.idcampana === 13
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de MARISA CARRIZO`
          : buscaso.idcampana === 14
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de VANESA GOROSITO`
          : buscaso.idcampana === 15
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SILVIA JUAREZ`
          : buscaso.idcampana === 16
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de MARIA GALIAN`
          : buscaso.idcampana === 17
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de GISELA GIMENEZ`
          : buscaso.idcampana === 18
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de MARISA CARRIZO`
          : buscaso.idcampana === 19
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de VANESA GOROSITO`
          : buscaso.idcampana === 20
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEO WERCHOW de SILVIA JUAREZ`
          : buscaso.idcampana === 21
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION WERCHOW de ALEJANDRA TEJERINA`
          : buscaso.idcampana === 22
          ? `El socio ${buscaso.contrato} pertenece a la campaña de AUXILIAR WERCHOW de MARIA GALIAN`
          : buscaso.idcampana === 23
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de GISELA GIMENEZ`
          : buscaso.idcampana === 24
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARISA CARRIZO`
          : buscaso.idcampana === 25
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de VANESA GOROSITO`
          : buscaso.idcampana === 26
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de SILVIA JUAREZ`
          : buscaso.idcampana === 28
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARIA GALIAN`
          : buscaso.idcampana === 29
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de GISELA GIMENEZ`
          : buscaso.idcampana === 30
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de MARISA CARRIZO`
          : buscaso.idcampana === 31
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de VANESA GOROSITO`
          : buscaso.idcampana === 32
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de SILVIA JUAREZ`
          : buscaso.idcampana === 33
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de MARIA GALIAN`
          : buscaso.idcampana === 34
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de GISELA GIMENEZ`
          : buscaso.idcampana === 35
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de MARISA CARRIZO`
          : buscaso.idcampana === 36
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de VANESA GOROSITO`
          : buscaso.idcampana === 37
          ? `El socio ${buscaso.contrato} pertenece a la campaña de RECUPERACION MUTUAL de SILVIA JUAREZ`
          : buscaso.idcampana === 38
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de MARIA GALIAN`
          : buscaso.idcampana === 39
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de GISELA GIMENEZ`
          : buscaso.idcampana === 40
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de MARISA CARRIZO`
          : buscaso.idcampana === 41
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de VANESA GOROSITO`
          : buscaso.idcampana === 42
          ? `El socio ${buscaso.contrato} pertenece a la campaña de REINCIDENTES MUTUAL de SILVIA JUAREZ`
          : buscaso.idcampana === 43
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de MARIA GALIAN`
          : buscaso.idcampana === 44
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de GISELA GIMENEZ`
          : buscaso.idcampana === 45
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de MARISA CARRIZO`
          : buscaso.idcampana === 46
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de VANESA GOROSITO`
          : buscaso.idcampana === 47
          ? `El socio ${buscaso.contrato} pertenece a la campaña de BLANQUEOS MUTUAL de SILVIA JUAREZ`
          : buscaso.idcampana === 48
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de ALEJANDRA TEJERINA`
          : buscaso.idcampana === 49
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS MUTUAL de ALEJANDRA TEJERINA`
          : buscaso.idcampana === 50
          ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de MARIA GALIAN`
          : buscaso.idcampana === 51
          ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de GISELA GIMENEZ`
          : buscaso.idcampana === 52
          ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de ALEJANDRA TEJERINA`
          : buscaso.idcampana === 53
          ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de MARISA CARRIZO`
          : buscaso.idcampana === 54
          ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de VANESA GOROSITO`
          : buscaso.idcampana === 55
          ? `El socio ${buscaso.contrato} pertenece a la campaña de POLICIAS WERCHOW de SILVIA JUAREZ`
          : buscaso.idcampana === 56
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de CAJA (PBANDUR)`
          : buscaso.idcampana === 57
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SOPORTE 1`
          : buscaso.idcampana === 58
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de SOPORTE 2`
          : buscaso.idcampana === 27
          ? `El socio ${buscaso.contrato} pertenece a la campaña de ATRASADOS WERCHOW de CAJA (CVALDA)`
          : null}
      </div>
    );
  }
}
