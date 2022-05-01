import { useState } from "react";
import Accordion from "./components/Accordion";
function App() {
  const data = [
    { savol: "Html zormi", javob: "ha" },
    { savol: "JS zormi", javob: "ha" },
    { savol: "JS zormi", javob: "ha" },
  ];

  return (
    <>
      <Accordion data={data} />
    </>
  );
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { index: "" };
//     this.data = [
//       { savol: "Html zormi", javob: "ha" },
//       { savol: "CSS zormi", javob: "ha" },
//       { savol: "JS zormi", javob: "ha" },
//     ];
//   }
//   getIndex = (key) => {
//     this.setState({ index: key });
//   };
//   renderData = () => {
//     return this.data.map((val, key) => {
//       let active = this.state.index === key ? " active" : "";
//       return (
//         <div>
//           <div
//             className="ui styled accordion"
//             onClick={() => {
//               this.getIndex(key);
//             }}
//           >
//             <div className={"title" + active}>
//               <i className="dropdown icon"></i>
//               {val.savol}
//             </div>
//             <div className={"content" + active}>
//               <p
//                 className="transition visible"
//                 style={{ display: "block !important" }}
//               >
//                 {val.javob}
//               </p>
//             </div>
//           </div>
//         </div>
//       );
//     });
//   };
//   render() {
//     return this.renderData();
//   }
// }

export default App;
