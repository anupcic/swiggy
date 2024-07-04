import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "dummy",
        location: "dummy2",
        avatar_url: "",
      },
    };
    console.log("childe constructor");
  }
  onClickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  fetchdata = async () => {
    const data = await fetch("https://api.github.com/users/anupcic");
    const jsondata = await data.json();
    this.setState({
      userinfo: jsondata,
    });
  };
  componentDidMount() {
    this.fetchdata();
    console.log(this.state.userinfo);
  }
  componentDidCatch() {
    console.log("component did update");
  }
  render() {
    console.log("childe render");

    return (
      <div className="user-card">
        <img src={this.state.userinfo.avatar_url}></img>
        <button onClick={this.onClickHandler}> Count Button</button>
        <h1>Count: {this.state.count}</h1>
        <h3>Name : {this.state.userinfo.name}</h3>
        <h3>Location: Sadiq Nagar</h3>
        <h4>Contact: anupk1790@gmail--.com</h4>
      </div>
    );
  }
}
export default UserClass;
