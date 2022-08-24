
import React from "react";
import Profile from "./Profile";
import axios from "axios";
class ProfileAPIContainer extends React.Component{


    componentDidMount()
    {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {debugger

        this.props.otherProfile(response.data)
        }) //переопределение?????

    }
    render()
    {

        return (
            <Profile {...this.props}/>
        )
    }
}

export default ProfileAPIContainer