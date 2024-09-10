import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-screen overflow-hidden bg-[url('/images/assets/coffee-bg.svg')] bg-auto">
      <div className="absolute right-0 -top-1">
        <Image
          src="/images/assets/cloud.png"
          alt="Cloud image"
          height={350}
          width={350}
        />
      </div>
      <div className="absolute left-0 bottom-0 rotate-180">
        <Image
          src="/images/assets/cloud.png"
          alt="Cloud image"
          height={350}
          width={350}
        />
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-10">
        <div className="flex">
          <Image
            src="/images/assets/logo-round.svg"
            alt="Cloud image"
            height={200}
            width={200}
          />
        </div>
        <div className="flex flex-col gap-6 w-64 justify-center">
          <input type="email" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          <input type="password" className="text-[#8D8F8A] text-lg bg-[#EBEBE9] outiline-[#8D8F8A] outline-2 outline p-2 rounded-md"/>
          <Link href="/dashboard" className="text-white font-jua">
            <button className="bg-primary-darkPink p-2 rounded-md hover:bg-primary-hotPint w-64">Login</button>
          </Link>
          <div className="flex flex-col gap-2">
            <button>
              <p className="text-primary-hotPint text-xs text-center font-jua">Esqueceu a senha?</p>
            </button>
            <button>
              <p className="text-primary-hotPint text-xs text-center font-jua">Criar conta</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
