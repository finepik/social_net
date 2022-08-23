//при передаче функций в другие компоненты для вызова, метод может вызваться не от того объекта которому принадлежит
//это изменение контекста
//поэтому отдавая этот метод нужно связать его с объектом-владельцем bind()
import reduceProfile from "./reduceProfile";
import reduceDialogs from "./reduceDialogs";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE_TEXT'
let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'I love myself', likesCount: 12},
                {id: 2, message: 'I think that everything will work out!', likesCount: 30},
                {id: 3, message: 'Never ever give up!', likesCount: 11}],
            newPostText: 'oh my god'
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Valery'},
                {id: 2, name: 'Amelia'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Alexey'},
                {id: 5, name: 'Diana'},
                {id: 6, name: 'Justa'}
            ], messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What are you doing now?'}
            ],
            newMessageText: 'oh my god'
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },

    subscribe(observe) {
        this._callSubscriber = observe
    },
    dispatch(action) {
        this._state.profilePage = reduceProfile(this._state.profilePage, action)
        this._state.dialogsPage = reduceDialogs(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}


export default store;