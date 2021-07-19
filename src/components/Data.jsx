import Spinner from "./Spinner.jsx";
import './Data.css';
import { useState, useEffect } from "react";

export default function Data() {

    const [ comments, setComments ] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?_delay=5000&t'+Math.random()
        )
            .then(response => response.json())
            .then(result => setComments(result))
    }, []);


    return (
        <div className="content">
            <h2>Comments</h2>
            {comments ? 
                <div className="comment-box">
                    {comments.map((comment) => 
                        <div className="comment">
                            {/* to look at the contents of the array: */}
                            {/* {JSON.stringify(comment)} */}
                            <p><b>From:</b> {comment.email}</p>
                            <p><b>Topic:</b> {comment.name}</p>
                            <p><b>Comment</b>: {comment.body}</p>
                        </div>
                    )}
                </div>
            : 
                <Spinner />
            }

        </div>
    );
}
