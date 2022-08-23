import styles from './Users.module.css'
import avatar from '../../images/avatar.png'
let Users = (props) => {

    let pages = []
    for (let i = 1; i <= Math.ceil(props.totalCount / props.amountOfUsers); i++) {
        pages.push(i)
    }


    return (<div>
        {pages.map(p => {
            return <span onClick={() => {
                props.viewUsers(p)
            }} className={p === props.currentPage ? styles.pageHighlight : ''}>
                {p}
            </span>

        })}
        {props.users.map(u => <div>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : avatar} className={styles.userPhoto}/>
                </div>
                <div>
                   {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                       <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{/*{u.location.country}*/}</div>
                    <div>{/*{u.location.city}*/}</div>
                </span>
            </span>
        </div>)}
    </div>)


}

export default Users;