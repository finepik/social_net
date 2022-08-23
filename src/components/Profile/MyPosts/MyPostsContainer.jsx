import React from "react";
import {addPostAction, updateNewPostAction} from "../../../redux/reduceProfile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
    return{
    postData:state.profilePage.postData,
    newPostText:state.profilePage.newPostText }
}
let mapDispatchToProps=(dispatch)=> {
    return {
    updateNewPostText(text)
    {
        dispatch(updateNewPostAction(text))
    }
,
    addPost()
    {
        dispatch(addPostAction())
    }
    }
}

const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;