import React from "react";
import { SetDigimons } from "../../redux/DigimonStore";
import api from "../../service/api";
import "./digimon-main.style.scss";
import { connect } from "react-redux";

const mapStateToProps = (store) => ({
  digimons: store.digimons.digimons,
});

const mapDispatchToProps = (dispatch) => ({
  setDigimons: (value) => dispatch(SetDigimons(value)),
});

class Digimon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: true,
      digimons: [],
    };
  }

  componentDidMount() {
    api
      .get("/digimon")
      .then((response) => {
        this.props.setDigimons(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }

  componentDidUpdate() {
    if (this.props.digimons.length > 0 && this.state.load) {
      this.setState({
        digimons: this.props.digimons,
        load: false,
      });
    }
  }

  setDigimonsToPage(dados) {
    this.setState({
      digimons: dados,
    });
  }

  pesquisar(item) {
    const filter = this.props.digimons.filter((digimon) =>
      digimon.name.toLowerCase().includes(item.toLowerCase())
    );
    this.setState({
      digimons: filter,
    });
  }

  render() {
    const { digimons } = this.state;

    return (
      <div id="digimons-page">
        <div>
          Pesquisar: <input onChange={(e) => this.pesquisar(e.target.value)} />
        </div>
        <h1> Digimons:</h1>
        <ul>
          {digimons.map((item, index) => (
            <li key={index}>
              <p>
                <b>Nome:</b> {item.name}
              </p>
              <p>
                <b>Nível:</b> {item.level}
              </p>
              <p>
                <img className="digimon" src={item.img} alt={item.name} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Digimon);
