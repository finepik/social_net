import  styles from './Nav.module.css'
import { NavLink} from "react-router-dom";
//если нужно применить два стиля, то запись {`${styles.style_1} ${styles.style_2}`}, а в css .style_1.style_2{}
const Nav =()=>{
    return(
        <nav className={styles.nav}>
            <div >
                <NavLink className={(active)=>active.isActive? styles.active : styles.item} to="/profile">Profile</NavLink>
            </div>
            <div >
                <NavLink className={(active)=>active.isActive? styles.active : styles.item} to="/users">Users</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive? styles.active : styles.item}  to="/dialogs">Messages</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive? styles.active : styles.item}  to="/news">News</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive? styles.active : styles.item}  to="/music">Music</NavLink>
            </div>
            <div >
                <NavLink className={({isActive})=>isActive? styles.active : styles.item}  to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}
export default Nav;