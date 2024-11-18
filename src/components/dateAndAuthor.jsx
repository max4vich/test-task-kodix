export default function DateAndAuthor(){
    return (
        <div className='flex gap-[20px] items-center'>
            <p className='uppercase text-[12px] opacity-60 tracking-[-0.6px] font-medium font-[Inter]'>
                wednesday 12, march 2024
            </p>
            <div className='flex gap-[8px] items-center p-[5px_8px_5px_5px] rounded-[100px] border-2'>
                <span className='w-[24px] h-[24px] rounded-[50%] bg-[rgba(0,0,0,0.20)]'/>
                <p className='font-[Inter] text-[14px] text-black font-medium tracking-[-0.7px]'>John Doe</p>
            </div>
        </div>
    )
}