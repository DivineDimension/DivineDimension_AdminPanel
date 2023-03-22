import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

class RangeSlider extends React.Component {
  state = {
    values: [10]
  };
  render() {
    return (
      <div
        className="range-slider-outer"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "0px"
        }}
      >
        <Range
          values={this.state.values}
          disabled={true}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "25px",
                width: "25px",
                borderRadius: "25px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "12px",
                  width: "3px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              ><span className="tool-value">{this.state.values[0].toFixed(1)}</span></div>
            </div>
          )}
        />
        {/* <output style={{ marginTop: "30px" }} id="output">
          {this.state.values[0].toFixed(1)}
        </output> */}
      </div>
    );
  }
}

export default RangeSlider;