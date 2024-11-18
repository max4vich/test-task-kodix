import {Link} from "react-router-dom";

export default function Post(props){
    return (
        <Link to={`/blog/${props.id}`} className='flex flex-col gap-[20px]'>
            <span className='h-[136px] w-[246px] bg-[#f5f5f5] self-stretch rounded-[16px]'/>
            <div className='flex flex-col gap-[20px]'>
                <p className='uppercase opacity-30 text-black self-stretch font-[Inter] tracking-[-0.6px] font-medium text-[12px]'>
                    wednesday 12, march 2024
                </p>
                <div className='flex flex-col gap-[8px]'>
                    <h3 className='text-black font-semibold font-[Inter] text-[17px] tracking-[-0.85px] max-w-[245px]'>
                        {props.title.length > 51 ? props.title.slice(0,51).concat('...') : props.title}
                    </h3>
                    <p className='max-w-[245px] tracking-[-0.7px] font-normal font-[Inter] text-[14px] whitespace-nowrap overflow-ellipsis overflow-hidden opacity-50'>
                        {props.body}
                    </p>
                </div>
            </div>
        </Link>
    )
}