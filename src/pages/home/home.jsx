import Header from "../../components/header";
import RightEllipse from "../../components/rightEllipse";
import LeftEllipse from "../../components/leftEllipse";
import PostsGallery from "../../components/postsGallery";
import Hero from "../../components/hero";
export default function Home(){
    return (
        <div className='bg-white flex flex-col items-center pb-[130px]'>
            <LeftEllipse/>
            <RightEllipse/>
            <Header/>
            <Hero/>
            <PostsGallery/>
        </div>
    )
}