import React, { Component } from 'react';
// import Page from './components/page'
import Wrapper from "./components/wrapper/wrapper";
import EmployeeInfo from "./components/employeeInfo/employeeInfo"
import Title from "./components/header/header"
// import Search from "./components/search/search"
import employees from "./employees.json"
import "./App.css"

class App extends Component {
  state = {
    employees,
    search: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    let filteredEmployees = this.state.employees.filter(
      (emp) => {
        return emp.name.indexOf(this.state.search) !== -1;
      }
    )

    
    return (
      <Wrapper>
        <Title></Title>
        <div>
          <form className="form">
            <input
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange}
              type="text"
              placeholder="search"
            />
          </form>
          <div className="row" id="characters">
        <div className="col-md-1"></div>
        <div className="col-md-2">image</div>
        <button id="btn" className="col-md-2">
        name
        </button>
      <div className="col-md-2">phone</div>
      <div className="col-md-3">email</div>
      <div className="col-md-2">dob</div>

      </div>
        </div>
        {filteredEmployees.sort((a, b) => a.name.localeCompare(b.name)).map(employees => (
          <EmployeeInfo
            id={employees.id}
            key={employees.id}
            name={employees.name}
            image={employees.image}
            phone={employees.phone}
            email={employees.email}
            DOB={employees.DOB}
          />
        ))}
      </Wrapper>
    );
  }
  // const myData = this.state.contacts
  // .sort(function(a, b) {
  //  if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  //  if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  //  return 0;
  // })
  // .map((item, i) => <List key={i} data={item} />);

}

export default App;
