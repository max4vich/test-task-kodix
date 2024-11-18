import {useParams} from "react-router-dom";
import LeftEllipse from "../../components/leftEllipse";
import RightEllipse from "../../components/rightEllipse";
import Header from "../../components/header";
import DateAndAuthor from "../../components/dateAndAuthor";
import Share from "../../components/share";
import article from '../../images/article.svg'
import {useEffect, useState} from "react";
import Article from "../../components/article";
import Comment from "../../components/comment";

export default function PostDetail() {
    const {id} = useParams()
    const [details, setDetails] = useState(null);
    const [comments, setComments] = useState([]);
    const [articles, setArticles] = useState([]);
    const fetchPostDetails = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => response.json())
            setDetails(response)
        } catch (e) {
            console.error(e)
        }
    }
    const fetchPostComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(response => response.json())
            setComments(response)
        } catch (e) {
            console.error(e)
        }
    }
    const fetchArticles = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                .then(response => response.json())
            console.log(response)
            setArticles(response)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchPostDetails()
        fetchPostComments()
        fetchArticles()
        console.log(articles)
    }, [id]);

    return (
        <div className='flex flex-col items-center pb-[100px]'>
            <LeftEllipse/>
            <RightEllipse/>
            <Header/>
            <div className='mt-[27px] flex gap-[130px] z-10'>
                <div className='flex flex-col gap-[20px] max-w-[553px]'>
                    <div className='flex flex-col gap-[20px]'>
                        <div className='flex flex-col gap-[8px]'>
                            <h1 className='text-black font-[Inter] tracking-[-1.6px] text-[32px] font-semibold max-w-[340px]'>{details ? details.title : ''}</h1>
                            <p className='opacity-50 font-[Inter] tracking-[-0.7px] font-normal text-[14px]'>{details ? details.body: ''}</p>
                        </div>
                        <DateAndAuthor/>
                    </div>
                    <div
                        className='flex p-[210px_450px_16.5px_16px] items-center flex-grow flex-shrink basis-0 self-stretch rounded-[24px] bg-[#f5f5f5]'>
                        <p className='text-white text-[10px] font-[Inter] tracking-[-0.5px] font-medium flex p-[4px_8px] items-center content-center rounded-[2px] bg-[rgba(0,0,0,0.4)] backdrop-blur-[6px]'>Photo
                            by Antara</p>
                    </div>
                    <Share/>
                    <div>
                        <h2 className='text-black font-[Inter] tracking-[-1.6px] text-[24px] font-semibold'>Comments:</h2>
                        <div className='flex flex-col mt-[10px] gap-[20px]'>
                            {comments && comments.map((comment, index) =>
                                <Comment {...comment} key={index}/>
                            )}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[38px] items-start w-[471px]'>
                    <div className='flex w-[100%] items-center justify-between'>
                        <div className='flex content-center items-center gap-[8px]'>
                            <img className='flex w-[18px] h-[18px] content-center items-center' src={article}
                                 alt='article'/>
                            <p className='text-black font-[Inter] text-[20px] tracking-[-1px] font-medium'>Related
                                Articles</p>
                        </div>
                        <a href='/'
                           className='p-[10px_24px] rounded-[24px] bg-white border-[1px] border-[rgba(0,0,0,0.1)] text-center tracking-[-0.7px] text-[14px] font-[Inter] font-normal'>Read
                            more</a>
                    </div>
                    <div className='flex flex-col h-[856px] gap-[auto] justify-between items-start self-stretch'>
                        {articles && articles.slice(0, 5).map((article, index) =>
                            <Article {...article} key={index}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}