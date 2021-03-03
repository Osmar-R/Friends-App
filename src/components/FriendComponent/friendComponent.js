import React from "react";

function FriendComponent(props) {
  return (
    <div className="col-md-6 friendComponent">
      <h4 className="componentHeader">Friends List</h4>
      <button className="closeFriend" onClick={props.closeComponent}>X</button>
      <div>
          <ul>
            <li>Jake</li>
            <li>Will</li>
            <li>Reggie</li>
            <li>Lucy</li>
            <li>Leland</li>
          </ul>
        <button className="btn submitBtn">Add Friend</button>
      </div>
    </div>
  );
}

export default FriendComponent;