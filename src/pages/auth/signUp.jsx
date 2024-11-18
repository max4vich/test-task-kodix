import logo from '../../images/logo-large.png'
import {useState} from "react";
import arrow from '../../images/arrow.svg'
import eye from '../../images/eye.svg'
import free from '../../images/monetization_on_black_24dp.svg'
import fast from '../../images/dynamic_form_black_24dp.svg'
import data from '../../images/ic_assignment_ind.svg'
import features from '../../images/ic_stars.svg'
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password')
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
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

        const user = {
            email,
            password,
            name,
            surName
        }

        localStorage.setItem("user", JSON.stringify(user));
        setEmail("");
        setPassword("");
        setName("");
        setSurName("");
        alert("Registration successful!");
        navigate("/login")
    };

    return (
        <div className='w-[100vw] h-[100vh] bg-white flex justify-center items-center flex-col gap-[40px]'>
            <img src={logo} className='w-[240px] h-[42px]'/>
            <div
                className='border-[1px] border-black flex justify-between w-[751px] rounded-[8px] bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.08)]'>
                <div className='w-[484px] flex flex-col p-[32px]'>
                    <h1 className='text-[#202020] font-[Inter] text-[24px] font-semibold leading-[34px]'>Sign up</h1>
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
                        <div className='flex gap-[24px]'>
                            <div className="flex flex-col gap-[12px] font-[Inter] mt-[23px] text-[14px] font-medium">
                                <label htmlFor="email" className="">First name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="font-normal block w-[100%] pr-[16px] pl-[16px] pt-[15px] pb-[16px] border border-[#E8E8E8] rounded-[4px] focus:outline-none text-[#484848]"
                                    placeholder="Your first name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-[12px] font-[Inter] mt-[23px] text-[14px] font-medium">
                                <label htmlFor="email" className="">Last name</label>
                                <input
                                    type="text"
                                    id="surname"
                                    className="font-normal block w-[100%] pr-[16px] pl-[16px] pt-[15px] pb-[16px] border border-[#E8E8E8] rounded-[4px] focus:outline-none text-[#484848]"
                                    placeholder="Your last name"
                                    value={surName}
                                    onChange={(e) => setSurName(e.target.value)}
                                    required
                                />
                            </div>
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
                            <button
                                className='w-[24px] h-[24px] absolute bottom-[15px] right-[10px] flex items-center justify-center'>
                                <img className='' src={eye} onClick={() => toggleType()}
                                     alt='eye'/>
                            </button>
                        </div>

                        <div className='mt-[24px]'>
                            <a href="#" className="pt-[24px] text-[14px] text-[#04AA00] font-[Inter] font-normal">Forgot
                                password?</a>
                        </div>


                        <button
                            type="submit"
                            className="text-[14px] font-semibold mt-[32px] rounded-[4px] w-[100%] bg-[#04AA00] text-white font-[Inter] flex h-[48px] p-[15px_15px_15px_24px] justify-between items-center"
                        >
                            Sign Up
                            <img src={arrow} alt='arrow'/>
                        </button>
                    </form>
                    <p className='mt-[30px] text-[#202020] font-[Inter] text-[14px] font-normal'>Already have an
                        account?
                        <a href='/login' className='text-[#04AA00] font-[Inter] font-semibold '> Sign In</a>
                    </p>
                </div>
                <div className='bg-black w-[293px] flex flex-col justify-center items-center rounded-[0px_8px_8px_0px]'>
                    <div className='flex gap-[20px] flex-col items-start'>
                        <h1 className='text-white font-semibold text-[24px] font-[Inter]'>Get Your FREE<br/>
                            30-Days Trial Now!</h1>

                        <div className='flex gap-[10px]'>
                            <img src={free} alt='free' className='w-[24px] h-[24px]'/>
                            <div className='flex flex-col gap-[0px] items-start'>
                                <h3 className='text-white text-[14px] font-[Inter] font-semibold'>Absolutely FREE</h3>
                                <p className='text-[#484848] text-[14px] font-[Inter] leading-[24px]'>No hidden charges,
                                    No credit<br/>card required</p>
                            </div>
                        </div>

                        <div className='flex gap-[10px]'>
                            <img src={fast} alt='fast' className='w-[24px] h-[24px]'/>
                            <div className='flex flex-col gap-[0px] items-start'>
                                <h3 className='text-white text-[14px] font-[Inter] font-semibold'>Fast & Easy</h3>
                                <p className='text-[#484848] text-[14px] font-[Inter] leading-[24px]'>Get access
                                    instantly, no<br/>downloads required</p>
                            </div>
                        </div>

                        <div className='flex gap-[10px]'>
                            <img src={data} alt='data' className='w-[24px] h-[24px]'/>
                            <div className='flex flex-col gap-[0px] items-start'>
                                <h3 className='text-white text-[14px] font-[Inter] font-semibold'>Your Own Data</h3>
                                <p className='text-[#484848] text-[14px] font-[Inter] leading-[24px]'>Enjoy the Free
                                    Trial with your<br/>company data</p>
                            </div>
                        </div>

                        <div className='flex gap-[10px]'>
                            <img src={features} alt='features' className='w-[24px] h-[24px]'/>
                            <div className='flex flex-col gap-[0px] items-start'>
                                <h3 className='text-white text-[14px] font-[Inter] font-semibold'>Unlimited
                                    Features</h3>
                                <p className='text-[#484848] text-[14px] font-[Inter] leading-[24px]'>Access all
                                    features of the<br/>world's #1 business software!</p>
                            </div>
                        </div>
                        <p className='text-white text-[14px] font-[Inter] font-semibold mt-[60px]'>Call us at <span
                            className='text-[#1FFF1A]'>800 1301 448</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}