"use client"
import Header from "../components/header";

export default function MainClient() {

  return (
    <section className="bg-white">
      <div className="sticky top-0 z-10">
        <Header colorBg="bg-rose-200"/>
      </div>
      <div className="text-pink-500 text-center items-center justify-center flex w-full flex-col">
        <p className="pb-96">
          este será p dashboard
        </p>
        <p className="pb-96">
          este será p dashboard
        </p>
        <p className="pb-96">
          este será p dashboard
        </p>
        <p className="pb-96">
          este será p dashboard
        </p>
        <p className="pb-96">
          este será p dashboard
        </p>
        <p className="pb-96">
          este será p dashboard
        </p>
      </div>
    </section>
  );
}
