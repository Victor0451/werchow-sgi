import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Barra extends Component {
  render() {
    const { casosconaccion, casossinaccion } = this.props;

    const data = {
      labels: ["Casos Vistos", "Casos Sin Ver"],
      datasets: [
        {
          label: "Werchow",
          fill: false,
          lineTension: 0.1,
          backgroundColor: ["#00FF00", "#FF0000"],
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [casosconaccion, casossinaccion]
        }
      ]
    };
    return (
      <div>
        <Bar data={data} />
      </div>
    );
  }
}
