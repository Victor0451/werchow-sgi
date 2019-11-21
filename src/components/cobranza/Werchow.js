import React, { Component } from "react";
import CobranzaPalpala from "./palpala/CobranzaPalpala";
import CobranzaPerico from "./perico/CobranzaPerico";
import CobranzaSanPedro from "./sanpedro/CobranzaSanPedro";
import CobranzaSSJ from "./ssj/CobranzaSSJ";

export default class Werchow extends Component {
  render() {
    return (
      <div className="container mt-4 mb-4">
        <nav className="mb-4">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
              id="nav-palpala-tab"
              data-toggle="tab"
              href="#nav-palpala"
              role="tab"
              aria-controls="nav-palpala"
              aria-selected="true"
            >
              Palpala
            </a>
            <a
              className="nav-item nav-link"
              id="nav-perico-tab"
              data-toggle="tab"
              href="#nav-perico"
              role="tab"
              aria-controls="nav-perico"
              aria-selected="false"
            >
              Perico
            </a>
            <a
              className="nav-item nav-link"
              id="nav-sanpedro-tab"
              data-toggle="tab"
              href="#nav-sanpedro"
              role="tab"
              aria-controls="nav-sanpedro"
              aria-selected="false"
            >
              San Pedro
            </a>
            <a
              className="nav-item nav-link"
              id="nav-ssj-tab"
              data-toggle="tab"
              href="#nav-ssj"
              role="tab"
              aria-controls="nav-ssj"
              aria-selected="false"
            >
              San Salvador
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-palpala"
            role="tabpanel"
            aria-labelledby="nav-palpala-tab"
          >
            <CobranzaPalpala />
          </div>
          <div
            className="tab-pane fade"
            id="nav-perico"
            role="tabpanel"
            aria-labelledby="nav-perico-tab"
          >
            <CobranzaPerico />
          </div>
          <div
            className="tab-pane fade"
            id="nav-sanpedro"
            role="tabpanel"
            aria-labelledby="nav-sanpedro-tab"
          >
            <CobranzaSanPedro />
          </div>
          <div
            className="tab-pane fade"
            id="nav-ssj"
            role="tabpanel"
            aria-labelledby="nav-ssj-tab"
          >
            <CobranzaSSJ />
          </div>
        </div>
      </div>
    );
  }
}
