// import './App';
// import './components/test1'

import React from "react";
import ReactDom from "react-dom";
import TellUserTip from "./components/test1";
import BtnWrap from "./components/test2";
import "./scss/index";

ReactDom.render(
  <div>
    <TellUserTip />
    <BtnWrap />
  </div>,
  document.getElementById("app")
);

// const name="ahao";
// const element=<h1>Hello {name}</h1>

// ReactDom.render(element,
//     document.getElementById('app')
//     )

// function tick(){
//     const element=(
//         <div>
//             <h1>Hello world</h1>
//             <h2>It is {new Date().toTimeString()}</h2>

//         </div>
//     )
//     ReactDom.render(element,document.getElementById('app'))
// }
// setInterval(tick,1000)

// function Clock(props){
//     // console.log(props.date)
//     return (

//         <div>
//             <h1>Hello world</h1>

//             <h2>It is {props.date.toTimeString()}</h2>
//         </div>
//     )
// }
// function tick(){
//     ReactDom.render(
//         <Clock date={new Date()}></Clock>,
//         document.getElementById('app')
//     )
// }
// setInterval(tick,1000)

// function Blog(props) {
//     console.log(props);
//   const sidebar = (
//     <ul>
//       {props.posts.map(post => (
//         <li key={post.id} data-id={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
//   const content = props.posts.map(post => (
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   ));
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." }
// ];
// ReactDom.render(<Blog posts={posts} />, document.getElementById("app"));

// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={value:''};
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({value:event.target.value});
//     }
//     handleSubmit(event){
//         console.log('提交的名字：'+this.state.value);
//         event.preventDefault();

//     }

//     render(){
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label >
//                     name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="submit"/>
//             </form>
//         )
//     }
// }

// ReactDom.render(<NameForm></NameForm>,document.getElementById("app"));
// const scaleNames = {
//   c: "Celsius",
//   f: "Fahrenheit"
// };
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil</p>;
//   }
//   return <p>The water would not boil</p>;
// }
// function toCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return "";
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     // this.setState({ temperature: e.target.value });
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;

//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}</legend>
//         <input value={temperature} onChange={this.handleChange} />
//         <BoilingVerdict celsius={parseFloat(temperature)} />
//       </fieldset>
//     );
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = { temperature: "", scale: "c" };
//   }

//   handleCelsiusChange(temperature) {
//     console.log(temperature);
//     this.setState({ scale: "c", temperature });
//     console.log(this.state);
//   }
//   handleFahrenheitChange(temperature) {
//     this.setState({ scale: "f", temperature });
//   }
//   render() {
//     // const temperature = this.state.temperature;
//     // return (
//     //   <fieldset>
//     //     <legend>Enter temperature in celsius:</legend>
//     //     <input value={temperature} onChange={this.handleChange} />
//     //     <BoilingVerdict celsius={parseFloat(temperature)} />
//     //   </fieldset>
//     // );
//     console.log(this.state)
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius =
//       scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit =
//       scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange}
//         />

//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange}
//         />

//         {/* <BoilingVerdict celsius={parseFloat(celsius)} /> */}
//       </div>
//     );
//   }
// }

// ReactDom.render(<Calculator />, document.getElementById("app"));

/**
 * React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过props分发给子组件
 */
