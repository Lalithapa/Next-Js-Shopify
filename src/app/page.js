import Card from "./components/Card";
import Slider from "./components/Slider";
import { categoriesSlideConfig, heroSliderConfig, topPicksSlideConfig } from "./SliderConfig";


export default async function HomePage() {
  return (
    <>
    <div className="flex flex-col gap-10">
      <Slider config={heroSliderConfig}></Slider>
      <div className='container mx-auto w-full max-w-7xl py-6 lg:py-8'>
        <Slider config={categoriesSlideConfig}></Slider>
      </div>
      <div className='container mx-auto w-full max-w-7xl py-6 lg:py-8'>
        <Slider config={topPicksSlideConfig}></Slider>
      </div>
      <div className='container mx-auto w-full max-w-7xl py-6 lg:py-8'>
        <Card></Card>
      </div>
    </div>
    </>
  );
}