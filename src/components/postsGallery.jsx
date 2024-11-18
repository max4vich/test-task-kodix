import {useEffect, useState} from "react";
import Post from "./post";

export default function PostsGallery(){
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
            setPosts(response)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchPosts()
        setTimeout(()=>{
            console.log(posts)
        },1000)

    }, []);


    return (
        <div className='z-10 mt-[34px] flex gap-[20px] items-start p-[20px] rounded-[24px] border-white-[1px] bg-white border border-[#D6D6D6] shadow-[0px_189px_53px_0px_rgba(194,194,194,0),0px_121px_48px_0px_rgba(194,194,194,0.01),0px_68px_41px_0px_rgba(194,194,194,0.05),0px_30px_30px_0px_rgba(194,194,194,0.09),0px_8px_17px_0px_rgba(194,194,194,0.10)]'>
            {posts.slice(0,5).map((post, index)=>
                <Post {...post} key={index}/>
            )}
        </div>
    )
}