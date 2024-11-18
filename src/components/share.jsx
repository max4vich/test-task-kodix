import facebook from "../images/facebook.svg";
import x from "../images/meta.svg";
import youtube from "../images/youtube.svg";

export default function Share(){
    return (
        <div className='flex items-center gap-[12px]'>
            <p className='text-black text-center font-[Inter] tracking-[-0.7px] font-normal text-[14px]'>Share to</p>
            <div className='flex gap-[8.9px]'>
                <a href='https://facebook.com/'>
                    <img src={facebook} alt='facebook'/>
                </a>
                <a href='https://x.com/'>
                    <img src={x} alt='x'/>
                </a>
                <a href='https://youtube.com/'>
                    <img src={youtube} alt='youtube'/>
                </a>
            </div>
        </div>
    )
}