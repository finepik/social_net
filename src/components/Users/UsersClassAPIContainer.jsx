import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../../commonComponents/Preloader";


class UsersClassAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${5}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            //this.props.setTotalCount(response.data.totalCount)
        }) //переопределение?????

    }


    render() {
        let viewUsers=(currentPage)=>{
            this.props.toggleIsFetching(true)
            this.props.addCurrentPage(currentPage)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${5}`).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })

        }


        return <>
            { this.props.isFetching? <Preloader/>:

                <Users totalCount={this.props.totalCount}
                      amountOfUsers={this.props.amountOfUsers}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      viewUsers={viewUsers}/>}

            </>
    }
}

export default UsersClassAPIContainer;