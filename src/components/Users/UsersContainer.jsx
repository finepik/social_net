import React from "react";
import {connect} from "react-redux";
import {addCurrentPageAC, followAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../redux/reduceUsers";
import UsersClassAPIContainer from "./UsersClassAPIContainer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        amountOfUsers: state.usersPage.amountOfUsers,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            dispatch(followAC(userId))
        },

        unfollow(userId) {
            dispatch(unfollowAC(userId))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
        setTotalCount(totalCount) {
            dispatch(setTotalCountAC(totalCount))
        },
        addCurrentPage(currentPage){
            dispatch(addCurrentPageAC(currentPage))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassAPIContainer)
export default UsersContainer;