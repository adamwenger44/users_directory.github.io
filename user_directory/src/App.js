import React, { Component } from 'react';
// import Page from './components/page'
import Wrapper from "./components/wrapper/wrapper";
import EmployeeInfo from "./components/employeeInfo/employeeInfo"
import Title from "./components/header/header"
// import Search from "./components/search/search"
import employees from "./employees.json"

class App extends Component {
  state = {
    employees,
    search: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.search}`);
    this.setState({
      search: ""
    });
  };

  render() {
    return (
      <Wrapper>
        <Title></Title>
        <div>
        <p>
          Hello {this.state.search}
        </p>
        <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="search"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
        {employees.map(employees => (
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
