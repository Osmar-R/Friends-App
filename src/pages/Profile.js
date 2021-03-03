import React, { Component } from "react";
import "../css/main.css";
import Nav from "../components/Nav/nav";
// import Favorites from "../components/Favorites/favorites";
import UserCard from "../components/UserCard/userCard";
import ProfileOptions from "../components/ProfileOptions/profileOptions";
// import InviteComponent from "../components/InviteComponent/inviteComponent";
import SocialCard from "../components/SocialCard/socialCard";
import FriendComponent from "../components/FriendComponent/friendComponent";
 import axios from "axios";
// import axios from "axios";

class Profile extends Component {
  state = {
    collapsed: false,
    optionsComponent: true,
    UserComponent: true,
    FavoriteComponent: false,
    socialComponent: false,
    friendComponent: false,
    friends:[]
  };
  componentDidMount() {  this.getFriends();}
  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  friendComponentRender = event => {
    this.setState({
      optionsComponent: false,
      friendComponent: true,
      socialComponent: false,
      FavoriteComponent: false,
      UserComponent:false
    });
  };

  closeFriendComponent = () => {
    this.setState({
      optionsComponent: true,
      UserComponent: true,
      friendComponent: false
    });
  };

  socialCardRender = event => {
    this.setState({
      optionsComponent: false,
      friendComponent: false,
      socialComponent: true,
      FavoriteComponent: false,
      UserComponent:false
    });
  };
 
  getFriends = () => { 
       let user = JSON.parse(window.localStorage.getItem('user')); 
         console.log(user);
         axios.get(`http://localhost:4000/friends/${user.id}`).then((res) => { 
               console.log(res.data); 
                    this.setState({        
                      friends: res.data      
                    })
                       }) 
                        }
  users = {
    user1: {
        name: 'Dylan',
        quote: 'I like coding a lot!'
    },
    user2: {
        name: 'Bob',
        quote: 'I have a hot tub you know.'
    },
    user3: {
        name: 'Hide',
        quote: 'I like pizza, car, and rock and roll'
    },
    user4: {
        name: 'Eric',
        quote: 'Luke Skywalker is my hero'
    }
  }

  userArray = ['user1','user2','user3', 'user4'];

  // userArray = this.users.keys(items);

  render() {
    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";
    
    return (
      <div className="profile-wrapper">
        <Nav
          toggleBurger={this.toggleBurger}
          burgerClass={burgerClass}
          showUl={showUl}
          storageClear={this.storageClear}
        >
          <a className="btn" href="/profile">
            Profile
          </a>
          <a className="btn" href="/" onClick={this.storageClear}>
            Sign Out
          </a>
        </Nav>
        <div className="profile-body">
          <div className="mobalOptionsMenu">
            <button
              className="btn optionButton submitBtn"
              onClick={event => this.friendComponentRender(event)}
            >
              Friends
            </button>
            <a href="/">
              <button className="btn btn-danger" onClick={this.storageClear}>
                Sign Out
              </button>
            </a>
          </div>
         </div>

          <div className="row justify-content-center g-5 profile-content">
              {this.state.UserComponent && (
                <div className="col-md-6 col-sm-11 eventComponent">
                  <h4 className="componentHeader">Profile</h4>
                  <div className="savedEventsWrapper">
                    <UserCard
                    />
                  </div>
                </div>
              )}
              {this.state.optionsComponent && (
                <ProfileOptions
                  storageClear={this.storageClear}
                  friendComponentRender={this.friendComponentRender}
                  socialCardRender={this.socialCardRender}
                />
              )}
              {this.state.friendComponent && (
                <FriendComponent 
                closeComponent={this.closeFriendComponent} 
                />
              )}
              {this.state.socialComponent && (
                  this.userArray.map(items => (
                      <SocialCard
                        name = {this.users[items].name}
                        quote = {this.users[items].quote}
                      />
                  ))
              )}
            </div>
        </div>
    );
  }
}

export default Profile;
