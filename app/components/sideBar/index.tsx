import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type SideBarType = {
    openState: any;
    onClose: () => void;
}

export function SideBar({ openState, onClose }: SideBarType) {
    const { t } = useTranslation('main');

    return(
        <div className={`flex font-jua text-black fixed top-0 left-0 h-screen w-64 bg-[#E78C96] transition-all duration-300 ease-in-out z-50 ${openState ? 'translate-x-0 bg-opacity-45' : '-translate-x-full opacity-0'}`}>
        
        <div className="flex absolute right-[85px] lg:w-24 lg:h-24 w-20 h-20">
            <Image 
                src={"/images/assets/logo.png"}
                width={200}
                height={200}
                alt={"Dream coffe logo"}
            />
        </div>
        <div className="flex absolute right-5 lg:w-6 lg:h-6 w-4 h-4 mt-5 cursor-pointer" onClick={onClose}>
            <Image
                src={"/images/icons/close.svg"}
                alt="Close icon"
                width={100}
                height={100}
            />
        </div>

        <div className="flex w-full mt-28 ml-5">
                <ul>
                    <li className="flex mb-5 w-7 h-7 lg:w-8 lg:h-8">
                        <Link href="/" className="flex">
                            <Image
                                src={"/images/icons/home.svg"}
                                alt="Close icon"
                                width={45}
                                height={45}
                            />
                            <p className="text-white lg:text-2xl text-xl flex items-end ml-3">{t('SideBar.home')}</p>
                        </Link>
                    </li>
                    <li className="flex mb-5 w-7 h-7 lg:w-8 lg:h-8">
                        <Link href="/" className="flex">
                            <Image
                                src={"/images/icons/profile.svg"}
                                alt="Close icon"
                                width={45}
                                height={45}
                            />
                            <p className="text-white lg:text-2xl text-xl flex items-end ml-3">{t('SideBar.perfil')}</p>
                        </Link>
                    </li>
                    <li className="flex mb-5 w-7 h-7 lg:w-8 lg:h-8">
                        <Link href="/" className="flex">
                            <Image
                                src={"/images/icons/ticket.svg"}
                                alt="Close icon"
                                width={45}
                                height={45}
                            />
                            <p className="text-white lg:text-2xl text-xl flex items-end ml-3">{t('SideBar.cupons')}</p>
                        </Link>
                    </li>
                </ul>
        </div>
        <div className="absolute bottom-4 left-5">
            <Link href="/" className="flex">
            <div className="w-7 h-7">
                <Image
                    src={"/images/icons/logOut.svg"}
                    alt="Close icon"
                    width={45}
                    height={45}
                />
            </div>
                <p className="text-white lg:text-2xl text-xl flex items-end ml-3">{t('SideBar.perfil')}</p>
            </Link>
        </div>

        </div>
    );
};