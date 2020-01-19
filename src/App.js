import React from "react";
import axios from "axios";

import Card from "./Card";

export default class App extends React.Component {
  state = {
    params: []
  };

  componentDidMount() {
    let company = this.props.company,
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
        {this.state.params.map(par => (
          <Card info={par} />
        ))}
        <div>test</div>
      </>
    );
  }
}
