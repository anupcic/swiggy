import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("parent contructor");
  }
  componentDidMount() {
    console.log("parent-compoentdid-cmount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us--</h1>
        <UserClass name={"Anup Kumar Sah"} />
        <User name={"Tvasti Sah"} />
        <User name={"Neha Sah"} />
      </div>
    );
  }
}
export default AboutClass;
