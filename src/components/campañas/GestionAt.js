import React, { Component } from "react";
import ListadoGestionCaso from "./ListadoGestionCaso";

import { connect } from "react-redux";
import { campanaOperador } from "../../actions/campanasActions";

class GestionAt extends Component {
  state = {
    campop: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    console.log(id);
    this.props.campanaOperador(id);

    setTimeout(() => {
      const { campop } = this.props;

      this.setState({
        campop: campop[0]
      });
    }, 200);
  }

  render() {
    const { campop } = this.state;
    return (
      <div className="container">
        lñdjkflksj
        <ListadoGestionCaso listado={campop} />
      </div>
    );
  }
}
//state
const mapStateToProps = state => ({
  campop: state.campanas.campop
});

export default connect(
  mapStateToProps,
  { campanaOperador }
)(GestionAt);
