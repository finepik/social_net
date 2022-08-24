import React from "react";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {otherProfile} from "../../redux/reduceProfile";



let mapStateToProps = (state) => {
    return {

        profile: state.profilePage.profile

    }
}


const UsersContainer = connect(mapStateToProps, {otherProfile})(ProfileAPIContainer)
export default UsersContainer;