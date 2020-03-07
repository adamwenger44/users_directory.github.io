import React, { Component } from 'react';
// import Page from './components/page'
import Wrapper from "./components/wrapper/wrapper";
import EmployeeInfo from "./components/employeeInfo/employeeInfo"
import Title from "./components/header/header"
import Search from "./components/search/search"
import employees from "./employees.json"

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Search></Search>
        {this.state.employees.map(employees => (
          <EmployeeInfo
            id={employees.id}
            key={employees.id}
            name={employees.name}
            image={employees.image}
            phone={employees.phone}
            email={employees.email}
          />
        ))}
      </Wrapper>
    );
  }


}

export default App;
