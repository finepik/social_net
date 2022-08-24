import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

        </div>
    )
}

export default Profile;