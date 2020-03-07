import React from "react";
import "./style.css"

function employeeInfo(props) {
  return (
    <div className="app">
      <div className="row" id="characters">

        <div className="col-md-1"></div>

        <div className="col-md-2">
          <div>
            <img id="pics" alt={props.name} src={props.image} />
          </div>
        </div>

        <div className="col-md-2">{props.name}</div>

      <div className="col-md-2">{props.phone}</div>

      <div className="col-md-3">{props.email}</div>

      <div className="col-md-2">{props.DOB}</div>


      </div>

    </div>
  );
}

export default employeeInfo;