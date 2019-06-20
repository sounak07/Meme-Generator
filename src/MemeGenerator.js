import React, { Component } from "react";
import axios from "axios";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      memes: [],
      randomImage: "http://i.imgflip.com/1bij.jpg",
      topText: "",
      buttomText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.imgflip.com/get_memes").then(res => {
      const memes = res.data.data.memes;
      this.setState({ memes: memes });
    });
  }

  handleChange(event) {
    const { value, name, checked, type } = event.target;
    type === "checkBox"
      ? this.setState({ [checked]: value })
      : this.setState({ [name]: value });
  }

  submitHandle = event => {
    event.preventDefault();
    const random = Math.floor(Math.random() * 100 + 1);
    const { value, type, name } = this.state.memes;
    this.setState({
      randomImage: this.state.memes[random].url,
      [name]: value
    });
  };

  render() {
    const data = this.state.memes;

    return (
      <div>
        <form className="meme-form" onSubmit={this.submitHandle}>
          <input
            placeholder="Top Text"
            type="text"
            onChange={this.handleChange}
            value={this.state.topText}
            name="topText"
          />
          <input
            placeholder="Buttom Text"
            type="text"
            onChange={this.handleChange}
            value={this.state.buttomText}
            name="buttomText"
          />

          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.buttomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
