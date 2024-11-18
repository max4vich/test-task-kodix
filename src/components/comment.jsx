export default function Comment(props) {
    return (
        <div className='flex flex-col'>
            <p className='opacity-50 font-[Inter] tracking-[-0.7px] font-normal text-[14px]'>{props.email}</p>
            <h3 className='self-stretch text-[17px] font-semibold font-[Inter] text-black tracking-[-0.85px]'>{props.name}</h3>
            <p className='overflow-hidden h-[27px] text-black whitespace-nowrap font-[Inter] text-[14px] font-normal tracking-[-0.7px] overflow-ellipsis'>{props.body}</p>
        </div>
    )
}