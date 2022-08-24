import React from "react";
import {connect} from "react-redux";
import {
    addCurrentPage,
    follow,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/reduceUsers";
import UsersClassAPIContainer from "./UsersClassAPIContainer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        amountOfUsers: state.usersPage.amountOfUsers,
        currentPage: state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow(userId) {
//             dispatch(followAC(userId))
//         },
//
//         unfollow(userId) {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers(users) {
//             dispatch(setUsersAC(users))
//         },
//         setTotalCount(totalCount) {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         addCurrentPage(currentPage){
//             dispatch(addCurrentPageAC(currentPage))
//         },
//         toggleIsFetching(currentValue){
//             dispatch(toggleIsFetchingAC(currentValue))
//         }
//
//     }
// }

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setUsers,setTotalCount,addCurrentPage,toggleIsFetching})(UsersClassAPIContainer)
export default UsersContainer;