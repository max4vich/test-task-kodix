import {Link} from "react-router-dom";

export default function Article(props) {
    return (
        <Link to={`/blog/${props.id}`} className='flex gap-[20px] z-10'>
            <span className='h-[136px] bg-[#f5f5f5] w-[225px] rounded-[16px]'/>
            <div className='flex flex-col gap-[20px] max-w-[226px]'>
                <p className='uppercase font-[Inter] text-[12px] text-black opacity-30 font-medium tracking-[-0.6px]'>
                    wednesday 12, march 2024
                </p>
                <div className='flex flex-col gap-[8px]'>
                    <h1 className='self-stretch text-[17px] font-semibold font-[Inter] text-black tracking-[-0.85px]'>
                        {props.title}
                    </h1>
                    <p className='overflow-hidden h-[27px] text-black whitespace-nowrap font-[Inter] text-[14px] font-normal tracking-[-0.7px] overflow-ellipsis'>
                        {props.body}
                    </p>
                </div>
            </div>
        </Link>
    )
}