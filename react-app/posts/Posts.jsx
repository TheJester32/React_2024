import { Post } from './Post';

export default function Posts(props) {
    return (
        <div>
            {props.posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} cb={props.cb} deletePost={props.deletePost}/>
            ))}
        </div>
    );
}