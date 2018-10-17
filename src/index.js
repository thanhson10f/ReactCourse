import React from "react";
import ReactDOM from "react-dom";

import FriendList from "./friend_list";
import AddFriendForm from "./add_friend_form";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "sonnguyen",
      friends: ["Son", "Ha", "Thuy"]
    };

    this.handleAddNewFriend = this.handleAddNewFriend.bind(this);
  }

  handleAddNewFriend(friend_name) {
    this.setState(function(state) {
      return {
        friends: state.friends.concat([friend_name])
      };
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.username}</h3>
        <AddFriendForm addNew={this.handleAddNewFriend} />
        <FriendList friends={this.state.friends} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
