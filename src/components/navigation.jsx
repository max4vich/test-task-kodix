import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Navigation(){
    const location = useLocation();
    const isBlogPage = /^\/blog\/\d+$/.test(location.pathname);
    useEffect(() => {
        console.log(isBlogPage)
    }, []);
    return (
        <div className='flex items-center'>
            <Link
                to='/'
                className={`p-[8px_17px] text-center font-[Inter] text-sm font-medium leading-normal tracking[-0.7px] ${location.pathname === '/' ? 'text-black font-bold opacity-100' : 'text-black opacity-50'}`}
            >
                Home
            </Link>
            <Link
                to='/feature'
                className="p-[8px_17px] text-black text-center font-[Inter] text-sm font-medium leading-normal tracking[-0.7px] opacity-50"
            >
                Feature
            </Link>
            <Link
                to='/blog'
                className={`p-[8px_17px] text-black text-center font-[Inter] text-sm font-medium leading-normal tracking[-0.7px]
                ${isBlogPage ? "text-black font-bold opacity-100" : "text-black opacity-50"
                }`}
            >
                Blog
            </Link>
            <Link
                to='/testimonials'
                className="p-[8px_17px] text-black text-center font-[Inter] text-sm font-medium leading-normal tracking[-0.7px] opacity-50"
            >
                Testimonials
            </Link>
        </div>
    )
}