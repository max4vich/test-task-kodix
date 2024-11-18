import {Link} from "react-router-dom";

export default function AuthButtons() {
    return (

        <div className='flex gap-[9px] items-center'>
            {localStorage.getItem('login') === 'true' ?
                <button
                    className='flex w-[114px] h-[42px] p-[8px_24px] justify-center items-center gap-1 bg-[#04AA00] border border-[#0000001A] rounded-[24px] text-white text-center font-[Inter] text-sm font-semibold leading-normal tracking[-0.7px]'  onClick={() => {
                        localStorage.setItem('login', false);
                        window.location.reload()
                    }}>Log
                    out</button>
                :
                <>
                    <Link to='/login'
                          className='flex w-[114px] h-[42px] p-[8px_24px] justify-center items-center gap-1 bg-white border border-[#0000001A] rounded-[24px] text-black text-center font-[Inter] text-sm font-medium leading-normal tracking[-0.7px]'>Log
                        in</Link>
                    <Link to='/sign-up'
                          className='flex w-[114px] h-[42px] p-[8px_24px] justify-center items-center gap-1 bg-[#04AA00] border border-[#0000001A] rounded-[24px] text-white text-center font-[Inter] text-sm font-semibold leading-normal tracking[-0.7px]'>
                        Sign up</Link>
                </>
            }

        </div>
    )
}