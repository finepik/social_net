
import React from "react";
import Profile from "./Profile";
import axios from "axios";
class ProfileAPIContainer extends React.Component{


    componentDidMount()
    {
        let profileId=this.props.router.params.profileId
        if (!profileId){profileId=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then(response => {debugger

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