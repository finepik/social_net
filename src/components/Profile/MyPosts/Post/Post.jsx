import styles from './Post.module.css'
const Post =(props)=>{
    return( <div className={styles.Item}>
            <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'/>
            {props.message}
            <div>
                <span>Like</span> {props.LikesCount}
            </div>
            </div>

    )
}

export default Post;