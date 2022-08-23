import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageAction, updateNewMessageTextAction} from "../../redux/reduceDialogs";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps=(state)=>{
    return{
        dialogsData:state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
        newMessageText:state.dialogsPage.newMessageText

    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageText:(message_text)=>{
            dispatch(updateNewMessageTextAction(message_text))
        },
        sendMessage:()=>{
            dispatch(sendMessageAction())
        }
    }
}
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;