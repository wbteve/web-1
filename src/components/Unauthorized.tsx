import * as React from "react";

export class Unauthorized extends React.Component<any,{}> {
  render() {
    return (
    <div>
        <div className='row-fluid'>
            <div className="col-md-4"/>
            <div className="col-md-4" style={styles.heroContainer}> 
                <h6 className='lead'> Unauthorized </h6>
            </div>
            <div className="col-md-4"/>
        </div>
    </div>);
  }
}

const styles = {
  heroImage: {
    textAlign:'center',
  },
  heroContainer: {
    textAlign:'center'
  }
}

export default Unauthorized