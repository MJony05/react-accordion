import { useState } from "react";
const Accordion = ({ data }) => {
  const [index, setIndex] = useState("");
  const dataRender = () => {
    console.log(data);
    return data.map((val, key) => {
      let active = index === key ? " active" : "";
      return (
        <div key={key}>
          <div
            className="ui styled accordion"
            onClick={() => {
              setIndex(key);
            }}
          >
            <div className={"title" + active}>
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={"content" + active}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div>{dataRender()}</div>;
};
export default Accordion;
