import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = props.messagesData.map((m) => <Message message={m.message} key={m.id}/>)
    let changeMessageText = (e) => {
        let message_text = e.target.value
        props.updateNewMessageText(message_text)
    }
    let sendMessage = () => {
        props.sendMessage()
    }
    return (

        <div className={styles.Dialogs}>
            <div className={styles.dialogs_items}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div>
                    <textarea onChange={changeMessageText} value={props.newMessageText}
                              placeholder='Message'> </textarea>
                </div>
                <div>
                    <button onClick={sendMessage}> SEND</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;