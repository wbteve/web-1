import * as React from "react";
import TopBarContainer from "../TopBar/TopBarContainer";

export class Layout extends React.Component<any,{}> {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "80px"
    };
    
    return (
      <div>
        <TopBarContainer />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout