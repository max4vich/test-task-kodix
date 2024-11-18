import logo from '../images/logo.png'
import Navigation from "./navigation";
import AuthButtons from "./authButtons";

export default function Header() {
    return (
        <div
            className="relative w-[100vw] p-[32px_45px_22px_59px] border-b border-[#0000001A] flex items-center justify-between">
            <Navigation/>
            <AuthButtons/>
            <img src={logo} alt='logo' className='absolute left-1/2 -translate-x-1/2'/>
        </div>
    )
}