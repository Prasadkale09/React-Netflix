import React from "react";
import ReactDOM from "react-dom";
import Card from "./componant/Card";
import Imformation from "./componant/Imformation";
import "./index.css";



ReactDOM.render(
  <>
  
  <div id="Heading">
    <h1 className="Heading">Top 5 Netflix Web Series</h1>
    </div>
    <div className="All">
    {/* fat Arrow function */}
      {Imformation.map((val,index)=>{
        return (
          <Card
            imgsrc={val.imgsrc}
            category={val.category}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </div>
  </>,
  document.getElementById("root")
);
