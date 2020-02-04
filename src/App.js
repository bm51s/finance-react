import React from "react";
import axios from "axios";
import Card from "./Card";
import Reference from "./Reference";
import Select from "./Select";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      params: [],
      company: ["snap", "tsla"],
      counter: 0
    };

    this.handler = this.handler.bind(this);
  }

  handler = () => {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
    console.log("app counter: " + this.state.counter);
  };

  componentDidMount() {
    let company = this.state.company.join(),
      token = "uojwh6sISmZX6qqbgzuh3jruxQJzKJJP9VxMhunjDIZEqJO770i8vAWtitKw";
    axios
      .get(
        "https://api.worldtradingdata.com/api/v1/stock?symbol=" +
          company +
          "&api_token=" +
          token
      )
      .then(res => {
        // handle success
        let response = res.data.data;
        this.setState({ params: response });
        console.log(res);
        console.log(res.data.data[0]);
        console.log(this.state.params);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  render() {
    return (
      <>
        <Select handler={this.handler} />
        {this.state.params.map((par, index) => (
          <Card key={index} info={par} />
        ))}
        <Reference />
        <div>test</div>
      </>
    );
  }
}
