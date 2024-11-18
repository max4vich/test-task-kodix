import logo from '../../images/logo-large.png'
import {useState} from "react";
import arrow from '../../images/arrow.svg'
import eye from '../../images/eye.svg'
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password')
    const navigate = useNavigate();
    const toggleType = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser.email === email && storedUser.password === password) {
            alert('Successful login!')
            localStorage.setItem('login',true)
            navigate("/")
        } else {
            alert('Check your credentials')
        }
    };

    return (
        <div className='w-[100vw] h-[100vh] bg-white flex justify-center items-center flex-col gap-[40px]'>
            <img src={logo} alt='logo' className='w-[240px] h-[42px]'/>
            <div
                className='border-[1px] border-black flex justify-between w-[751px] rounded-[8px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]'>
                <div className='w-[484px] flex flex-col p-[32px]'>
                    <h1 className='text-[#202020] font-[Inter] text-[24px] font-semibold leading-[34px]'>Sign in</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-[12px] font-[Inter] mt-[23px] text-[14px] font-medium">
                            <label htmlFor="email" className="">Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="font-normal block w-[100%] pr-[16px] pl-[16px] pt-[15px] pb-[16px] border border-[#E8E8E8] rounded-[4px] focus:outline-none text-[#484848]"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div
                            className="relative flex flex-col gap-[12px] font-[Inter] mt-[23px] text-[14px] font-medium">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                type={type}
                                id="password"
                                className="relative font-normal block w-[100%] pr-[16px] pl-[16px] pt-[15px] pb-[16px] border border-[#E8E8E8] rounded-[4px] focus:outline-none text-[#484848]"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className='cursor-pointer w-[24px] h-[24px] absolute bottom-[15px] right-[10px] flex items-center justify-center'>
                                <img className='' src={eye} onClick={() => toggleType()}
                                     alt='eye'/>
                            </span>
                        </div>

                        <div className='mt-[24px]'>
                            <a href="/" className="pt-[24px] text-[14px] text-[#04AA00] font-[Inter] font-normal">Forgot
                                password?</a>
                        </div>


                        <button
                            type="submit"
                            className="text-[14px] font-semibold mt-[32px] rounded-[4px] w-[100%] bg-[#04AA00] text-white font-[Inter] flex h-[48px] p-[15px_15px_15px_24px] justify-between items-center"
                        >
                            Sign In
                            <img src={arrow} alt='arrow'/>
                        </button>
                    </form>
                    <p className='mt-[30px] text-[#202020] font-[Inter] text-[14px] font-normal'>Don’t have an account?
                        <a href='/sign-up' className='text-[#04AA00] font-[Inter] font-semibold '> Sign Up</a>
                    </p>
                </div>
                <div className='bg-black w-[293px] flex flex-col justify-center items-center rounded-[0px_8px_8px_0px]'>
                    <div className='flex gap-[11px] items-center'>
                        <h1 className='font-[Roboto] text-white text-[24px] font-bold'>Kodix</h1>
                        <span className='flex content-center items-center justify-center text-[#1FFF1A] text-[12px] font-medium font-[Inter] p-[5px_8px] border-[1px] rounded-[4px] border-[#1FFF1A]'>PRO</span>
                    </div>
                    <p className='text-[#484848] w-[210px] text-center leading-[24px] font-[Inter] text-[14px] mt-[16px]'>Unlimited traffic, strategic support, and AI-driven upsells</p>
                    <a href='/' className='mt-[24px] text-[#1FFF1A] text-[16px] underline text-center font-medium'>Learn More</a>
                </div>
            </div>
        </div>
    )
}