import {combineReducers, legacy_createStore as createStore} from "redux";
import reduceProfile from "./reduceProfile";
import reduceDialogs from "./reduceDialogs";
import reduceUsers from "./reduceUsers";
let reducers=combineReducers({
    profilePage:reduceProfile,
    dialogsPage:reduceDialogs,
    usersPage:reduceUsers
})
let store=createStore(reducers)
window.store=store
export default store;