import React from "react";

function UserCard(props) {
  return (
    <div class="card profileCard">
        <img src="https://i.pinimg.com/originals/38/5f/1c/385f1c3ea38988072022417bf0f5eb82.jpg" id="profilePic" class="card-img-top mx-auto" alt="Cal Naughton Jr"></img>
    <div class="card-body">
        <h5 class="card-title">Cal Naughton Jr</h5>
        <p class="card-text">"I like to think of Jesus as wearin' a tuxedo T-shirt, 'cause it says, like, 'I want to be formal, but I'm here to party too"</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Location: Charlotte NC</li>
            <li class="list-group-item">Job: Fun Haver</li>
        </ul>
    </div>
  );
}

export default UserCard;