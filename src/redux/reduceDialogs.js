const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE_TEXT'
let initialState={
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
const reduceDialog = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = state.newMessageText
            return {...state,
                messagesData: [...state.messagesData,{id: 3, message: text}],
                newMessageText: ''

            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state,
                newMessageText: action.message_text
            };

        default:
            return state;
    }
}
export const sendMessageAction = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextAction = (message_text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message_text: message_text
})
export default reduceDialog;