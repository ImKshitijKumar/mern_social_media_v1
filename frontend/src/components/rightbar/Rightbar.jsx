import React from "react";
import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../userData";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Jane Doe</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img className="rghtbarAd" src="/assets/ad.png" alt="" />
        <h3 className="rightbarTitle">Online Friends</h3>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="profileRightBarTitle">User information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItems">
            <span className="rightBarInfoKey">City: </span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItems">
            <span className="rightBarInfoKey">From: </span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItems">
            <span className="rightBarInfoKey">Relationship: </span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="profileRightBarTitle">Friends List</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Kimberely</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Kimberely</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Kimberely</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Kimberely</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Kimberely</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightBarFollowingImg"
            />
            <span className="rightBarFollowingName">Kimberely</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
