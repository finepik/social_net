import React from "react";
import {connect} from "react-redux";
import ProfileAPIContainer from "./ProfileAPIContainer";
import {otherProfile} from "../../redux/reduceProfile";
import {useLocation, useNavigate, useParams} from "react-router";



let mapStateToProps = (state) => {
    return {

        profile: state.profilePage.profile

    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
                debugger
            />
        );
    }

    return ComponentWithRouterProp;
}

const UsersContainer = connect(mapStateToProps, {otherProfile})(withRouter(ProfileAPIContainer))
export default UsersContainer;