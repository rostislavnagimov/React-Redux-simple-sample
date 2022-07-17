import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "./redux/actions";
import { useDispatch } from 'react-redux';

function SingleComment({ data }){
    const {text, id} = data;
    const [commentText, setCommentText] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {

        if (text){
            setCommentText(text);
        }
    }, [text])
    const handleInput = (e) => {
        setCommentText(e.target.value);

    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('submit >>', commentText);
        dispatch(commentUpdate(commentText, id))

    }
    const handleDelete = (e) => {
        dispatch(commentDelete(id));

    }

    return (
            <form onSubmit={handleUpdate} className='comments-item'>
                <div onClick={handleDelete} className='comments-item-delete'>&times;</div>
                <input type='text' value={commentText} onChange={handleInput}/>
                <input type='submit' hidden/>
            </form>  
    )
}
export default SingleComment;