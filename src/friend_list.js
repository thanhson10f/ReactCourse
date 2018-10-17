import React from "react";

class FriendList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map(function(friend) {
            return <li>{friend}</li>;
          })}
        </ul>
      </div>
    );
  }
}
FriendList.defaultProps = {
  friends: []
};
export default FriendList;
