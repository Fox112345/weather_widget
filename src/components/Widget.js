import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";

class Widget extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  render() {
    if (!this.props.isLoaded) return <div>Loading...</div>;

    return (
      <div className="widget">
        <p>{this.props.name}</p>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${this.props.weather[0].icon}@2x.png`}
            alt="weather pic"
          />
          <div className="widget__temperature">
            {Math.floor(this.props.main.temp)}°С
          </div>
          <div>
            <p>Ощущается как: {Math.floor(this.props.main.feels_like)}°</p>
            <p>Давление: {this.props.main.pressure} мм рт.ст</p>
            <p>Ветер: {Math.ceil(this.props.wind.speed)} м/с</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state.weather, { getWeather })(Widget);
