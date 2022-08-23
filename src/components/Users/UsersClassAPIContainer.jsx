import React from "react";
import * as axios from "axios";
import Users from "./Users";


class UsersClassAPIContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${5}`).then(response => {
            this.props.setUsers(response.data.items)
            //this.props.setTotalCount(response.data.totalCount)


        }) //переопределение?????
    }

    viewUsers(currentPage) {
        debugger
        this.props.addCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${5}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        return <Users totalCount={this.props.totalCount}
                      amountOfUsers={this.props.amountOfUsers}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      viewUsers={this.viewUsers}


        />
    }
}

export default UsersClassAPIContainer;