import React, { Component } from "react";
import Navbar from "../../Components/nav/NavBar";
import Footer from "../../Components/Footer/Footer"

import GlobalStyle from "../../styles/Global";

class App extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <div className="Wrapper" >
          {this.props.children}
        </div>
        <GlobalStyle />
        <Footer />
      </>
    );
  }
}

export default App;
