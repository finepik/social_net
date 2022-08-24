import styles from './ProfileInfo.module.css'
import Preloader from "../../../commonComponents/Preloader";
const ProfileInfo =(props)=>{
    if(!props.profile){
        return (
            <Preloader/>
        )
    }
    return(
        <div className={styles.content}>
            <div><img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/></div>
            <div className={styles.Description}><img src={props.profile.photos.large}/></div>
            <div><span>FULL NAME: </span>{props.profile.fullName}</div>
            <div><span>ABOUT ME: </span>{props.profile.aboutMe}</div>

        </div>
    )
}

export default ProfileInfo;