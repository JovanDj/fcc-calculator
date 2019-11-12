import * as math from "mathjs";
import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Input from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    const { input } = this.state;

    if (val === "0") {
      console.log("entered 0");
      if (input.indexOf(0) === 0) {
        return;
      }
    }

    if (val === ".") {
      if (input.indexOf(0) === 0) {
        return;
      }
    }

    // if (input.split("") && val === ".") {
    //   return;
    // }

    this.setState({ input: input + val });
  };

  handleEqual = () => {
    this.setState({
      input: math.evaluate(this.state.input)
    });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button id={"seven"} handleClick={this.addToInput}>
              7
            </Button>
            <Button id={"eight"} handleClick={this.addToInput}>
              8
            </Button>
            <Button id={"nine"} handleClick={this.addToInput}>
              9
            </Button>
            <Button id={"divide"} handleClick={this.addToInput}>
              /
            </Button>
          </div>
          <div className="row">
            <Button id={"four"} handleClick={this.addToInput}>
              4
            </Button>
            <Button id={"five"} handleClick={this.addToInput}>
              5
            </Button>
            <Button id={"six"} handleClick={this.addToInput}>
              6
            </Button>
            <Button id={"multiply"} handleClick={this.addToInput}>
              *
            </Button>
          </div>
          <div className="row">
            <Button id={"one"} handleClick={this.addToInput}>
              1
            </Button>
            <Button id={"two"} handleClick={this.addToInput}>
              2
            </Button>
            <Button id={"three"} handleClick={this.addToInput}>
              3
            </Button>
            <Button id={"add"} handleClick={this.addToInput}>
              +
            </Button>
          </div>
          <div className="row">
            <Button id={"decimal"} handleClick={this.addToInput}>
              .
            </Button>
            <Button id={"zero"} handleClick={this.addToInput}>
              0
            </Button>
            <Button id={"equals"} handleClick={() => this.handleEqual()}>
              =
            </Button>
            <Button id={"subtract"} handleClick={this.addToInput}>
              -
            </Button>
          </div>

          <div className="row">
            <ClearButton
              id={"clear"}
              handleClear={() => this.setState({ input: "" })}
            >
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
