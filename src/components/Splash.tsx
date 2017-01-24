import * as React from "react";

export class Splash extends React.Component<any,{}> {
  render() {
    return (
      <div className='container'>
        <div className='row-fluid'>
          <div className="col-md-12">
            <h3 > Hello World</h3>
            <p className='lead'> 
              ByteForBytes is a social good project dedicated to using the power of the Internet to feed hungry people. We empower restaurants to raise funds to provide free meals to those who cannot afford them.<br/>
            </p>
          </div>
        </div>
      </div>);
  }
}

const styles = {
  heroImage: {
    textAlign:'center',
    width: '200px',
    height: '200px'
  },
  heroContainer: {
    textAlign:'center',
  }
}

export default Splash