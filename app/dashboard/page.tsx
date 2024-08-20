import CarouselDashboard from "../components/carousel";
import CSOptions from "../components/csOptions";
import Header from "../components/header";

export default async function MainClient() {

  return (
    <section className="bg-white">
      <div className="sticky top-0 z-10">
        <Header colorBg="bg-rose-200"/>
      </div>
      <CarouselDashboard offset={2} showArrows={false} width={"90%"} height={"500px"} margin={"0 auto"}/>
      <div className="text-pink-500 text-center items-center justify-center flex w-full flex-col">
        <div className="bg-black">
          <CSOptions/>
        </div>
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
