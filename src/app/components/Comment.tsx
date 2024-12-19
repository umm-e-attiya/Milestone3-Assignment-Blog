"use client"
import { useState } from "react";


const Comment = () =>{
    const [comment , setcomment]=useState("")
    const [comments , setcomments]=useState<string[]>([])
    const submitComment = (notrefresh: React.FormEvent)=>{
        notrefresh.preventDefault()
        if(comment.trim()){
               setcomments([comment , ...comments])
               setcomment("")
        }
    }
    return(
           <div>
                  <h1 className="font-bold text-[30px] ml-4 md:ml-20 mt-10">Comment Here</h1>
              <form className="flex flex-row gap-4 ml-4 md:ml-20 mt-5" onSubmit={submitComment}>
                <input type="text" placeholder="write a comment here" value={comment} onChange={(notrefresh) => setcomment(notrefresh.target.value)}/>
                <button className="w-[100px] h-[40px] bg-black text-white rounded-sm">Submit</button>
              </form>
             <ul>
                {comments.map((herecomments , index)=>{
                    return(
                        <li key={index}> 
                                {herecomments}
                        </li>

                    )
                })}
             </ul>
            </div>
    );
}

export default Comment;