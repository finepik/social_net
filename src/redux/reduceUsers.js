const FOLLOW ='FOLLOW'
const UNFOLLOW ='UNFOLLOW'
const SET_USERS='SET_USERS'
const SET_TOTAL_COUNT='SET_TOTAL_COUNT'
const ADD_CURRENT_PAGE='ADD_CURRENT_PAGE'
let initialState={
    users: [],
    currentPage:1,
    totalCount:20,
    amountOfUsers:5
    }
/*        {id: 1, photoUrl:'https://bigpicture.ru/wp-content/uploads/2019/04/grandbeauty00.jpg' ,
            followed:true, fullName:'Natasha', status: 'Everything cool', location:{city:'Moscow',country:'Russia'}},
        {id: 2,photoUrl: 'https://klike.net/uploads/posts/2019-06/1560149834_2.jpg',
            followed:false, fullName:'Valery', status: 'Everything cool too', location:{city:'Minsk',country:'Belarus'}},
        {id: 3, photoUrl:'https://i.pinimg.com/736x/f9/fe/77/f9fe77e517055bfd4c64ad544466ffbd.jpg' ,
            followed:true, fullName:'Victory', status: 'Everything nice', location:{city:'Kiev',country:'Ukraine'}}],
    newPostText: 'oh my god'
}*/
const reduceUsers=(state=initialState,action)=>{
    switch (action.type){
        case FOLLOW:
            return{
                ...state,
                users:state.users.map(u=>{
                    if(u.id===action.userId){
                        return({...u,followed:true})
                    }
                    return u
                }),

            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id===action.userId){
                        return{...u,followed:false}
                    }
                    return u
                })
            }
        case SET_USERS:
            // return({...state,users:[...state.users, ...action.users]})
            return({...state,users:[...action.users]})
        case SET_TOTAL_COUNT:
            return({...state,totalCount: action.totalCount})
        case ADD_CURRENT_PAGE:
            return({...state,currentPage: action.currentPage})
        default: return state
    }
}
export const followAC=(userId)=>{return{type:FOLLOW,userId:userId}}
export const unfollowAC=(userId)=>{return{type:UNFOLLOW, userId:userId}}
export const setUsersAC=(users)=>{return{type:SET_USERS, users:users}}
export const setTotalCountAC=(totalCount)=>{return{type:SET_TOTAL_COUNT, totalCount}}
export const addCurrentPageAC=(currentPage)=>{return{type:ADD_CURRENT_PAGE, currentPage}}

export default reduceUsers;