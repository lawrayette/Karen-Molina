import React from 'react'
import Header from './header'
import Footer from '../Components/Home/Header_footer/Footer'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
            style = {{
                height:'78vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#141414'
            }}
        >{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
