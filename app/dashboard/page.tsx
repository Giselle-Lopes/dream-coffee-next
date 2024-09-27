import CarouselDashboard from "../components/carousel";
import CSOptions from "../components/csOptions";
import Header from "../components/header";

export default async function MainClient() {

  return (
    <div className="bg-white">
      <div className="sticky top-0 z-10">
        <Header colorBg="bg-rose-200"/>
      </div>
      <CarouselDashboard offset={4} showArrows={false} width={"90%"} height={"500px"} margin={"0 auto"}/>
      <div className="lg:mt-24 mt-8">
        <CSOptions/>
      </div>
    </div>
  );
}
