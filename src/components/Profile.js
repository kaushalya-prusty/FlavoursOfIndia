import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props); //why we should always need to write super? h/w
    this.state = {
      // state is always create above the render inside the constructor
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location } = this.props; // Destructure must be done inside the render only

    return (
      <div className="user">
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
      </div>
    );
  }
}
export default Profile;
