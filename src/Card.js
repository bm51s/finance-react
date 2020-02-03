import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-name">{this.props.info.name}</div>
        <div className="card-exchange">
          <div className="card-exchange__short">
            {this.props.info.stock_exchange_short}
          </div>
          <div className="card-exchange__symbol">{this.props.info.symbol}</div>
        </div>
        <div className="card-details">
          <div className="card-details__price">{this.props.info.price}</div>
          <div className="card-details__currency">
            {this.props.info.currency}
          </div>
          <div className="card-details__change">
            {this.props.info.day_change}
          </div>
          <div className="card-details__percent">
            ({this.props.info.change_pct}%)
          </div>
        </div>
        <div className="card-date">
          <div className="card-date__last-trading">
            {this.props.info.last_trade_time}
          </div>
          <div className="card-date__timezone">{this.props.info.timezone}</div>
        </div>
      </div>
    );
  }
}
