const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
let initialState={
    postData: [
        {id: 1, message: 'I love myself', likesCount: 12},
        {id: 2, message: 'I think that everything will work out!', likesCount: 30},
        {id: 3, message: 'Never ever give up!', likesCount: 11}],
    newPostText: 'oh my god'
}
const reduceProfile = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state,
                postData:[...state.postData,{id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: ''}

        case UPDATE_NEW_POST:
            return {...state,
            newPostText:action.text }

        default:
            return state;
    }
}
export const addPostAction = () => ({type: ADD_POST})
export const updateNewPostAction = (text) => ({type: UPDATE_NEW_POST, text: text})
export default reduceProfile;