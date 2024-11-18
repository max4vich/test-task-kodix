import star from '../images/star.svg'
import Share from "./share";
import DateAndAuthor from "./dateAndAuthor";
export default function Hero() {
    return (
        <div className='z-10 mt-[34px] gap-[20px] flex items-center flex-col'>
            <div className='flex flex-col items-center gap-[20px]'>
                <p className='flex gap-[8px] text-black text-[20px] font-[Inter] font-medium'>
                    <img src={star} alt='star'/>
                    Featured
                </p>
                <div className='flex flex-col items-center gap-[8px]'>
                    <h1 className='text-black text-center text-[32px] font-inter font-semibold leading-normal tracking-[-1.6px]'>
                        Global Climate Summit <br/> Urges Immediate Action
                    </h1>
                    <p className='text-[14px] opacity-50 text-black font-normal tracking-[-0.7px] text-center'>
                        Leaders from around the world gathered for a global climate summit, emphasizing the urgent need
                        for
                        coordinated action to address climate change.
                    </p>
                </div>
                <DateAndAuthor/>
            </div>
            <div className='h-[339px] w-[894px] p-[297px_791px_21px_16px] bg-[#f5f5f5] rounded-[24px]'>
                <p className='text-white rounded-[2px] bg-[rgba(0,0,0,0.4)] font-[Inter] backdrop-blur-[6px] p-[4px_8px] text-[10px] tracking-[-0.5px] font-medium'>Photo by Antara</p>
            </div>
            <Share/>
        </div>
    )
}