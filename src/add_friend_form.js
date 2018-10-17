import React from "react";
import PropTypes from "prop-types";

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      new_friend: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitNewFriend = this.submitNewFriend.bind(this);
  }

  handleChange(e) {
    let friend_name = e.target.value;

    this.setState(function(state) {
      return {
        new_friend: friend_name
      };
    });
  }

  submitNewFriend() {
    this.props.addNew(this.state.new_friend);
    this.setState({
      new_friend: ""
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.new_friend}
        />
        <button onClick={this.submitNewFriend}>Add</button>
      </div>
    );
  }
}
AddFriendForm.propTypes = {
  addNew: PropTypes.func.isRequired
};
export default AddFriendForm;
