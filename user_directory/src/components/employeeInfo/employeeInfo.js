import React from "react";
import "./style.css"

function employeeInfo(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>name:</strong> {props.name}
          </li>
          <li>
            <strong>phone:</strong> {props.phone}
          </li>
          <li>
            <strong>email:</strong> {props.email}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default employeeInfo;