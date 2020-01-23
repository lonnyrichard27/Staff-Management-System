import React from 'react';
import Navbar from './Navbar';
import StaffList from './StaffList';
import Address from './Address';
import Number from './Number';
import Email from './Email';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Navbar />
        <h2>Staff Management System</h2>
        <StaffList />
        <Address />
        <Number />
        <Email />
      </div>
    );
  }
}

export default App;