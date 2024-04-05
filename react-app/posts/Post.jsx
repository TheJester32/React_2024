export function Post(props) {
    const handleDeleteClick = () => {
        props.deletePost(props.id);
    };

    return (
        <div>
            <h2 onClick={props.cb}>{props.name}</h2>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}