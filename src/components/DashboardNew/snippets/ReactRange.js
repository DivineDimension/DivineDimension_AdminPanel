import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";


// const MAX = 100;

function RangeSlider(props)  {
  const[values,setvalues] = useState([0]);
  const STEP = props.parentToChild/1000000 ? (props.parentToChild/1000000)/10 : 1;
const MIN = 0;
// if(props.inputVal){
//   setvalues(props.inputVal)
// }
//   // let values ;
  // useEffect(() => {
  //   let v = [0];
  //   setvalues(v)
  // },[])
  // state = {
  //   values: [0],
  //   // Max : (this.props.parentToChild/1000000)
  // };
  // state ={
  //   setassetid1:this.state.values
  // }
  console.log("data",props.inputval)
 

  // componentDidUpdate = (prevProps,{childToParent}) => {  
   
  //   console.log('this props',this.state.values);
  // }
  const updateColour= (value) =>{
  	// console.log('the colour is biege');
    // this.setState({ values:values })
    setvalues(value);
    // values = value;
    props.datas(value)
    // this.childToParent()
  }
 

  

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
            values={values}
            step={STEP}
            min={MIN}
            max={props.parentToChild/1000000? props.parentToChild/1000000 : 1}
            // onChange={(values) => this.setState({ values })}
            onChange={(values)=>updateColour(values) }
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
                      values: values,
                      colors: ["#548BF4", "#ccc"],
                      min: MIN,
                      max:(props.parentToChild/1000000)
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
                ><span className="tool-value">{values[0].toFixed(1)}</span>
               
                </div>
              </div>
            )}
          />
          {/* <output style={{ marginTop: "30px" }} id="output">
            {this.state.values[0].toFixed(1)}
          </output> */}
        </div>
      );
    }
  


export default RangeSlider;