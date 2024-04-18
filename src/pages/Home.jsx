import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import FAQ from "../Components/FAQ"

const Home = () => {
  return (
    <div>
      <Header />
      <section >
        <div>
          <img src="/HeroImage.png" className="laptop:h-[700px] tablet:h-[448px]  w-full object-cover"></img>
        </div>
        <div className="desktop:w-[630px] laptop:w-[622px] laptop:h-[306px] laptop:absolute laptop:bottom-[40px] desktop:left-[80px] laptop:left-[60px]  tablet:px-10 mobile:px-5  pt-6 pb-8 bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] mobile:w-full  tablet:top-[448px]    ">
          <p className="text-white font-bold tablet:text-5xl mobile:text-4xl mobile:leading-9 tablet:leading-[48px] capitalize tracking-[-.02em] mb-5">
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>
          <Button text="GET FREE CONSULTATION"/>
        </div>
      </section>
      <section className="  desktop:h-[414px] laptop:h-[346px] tablet:h-[275px] laptop:mt-20  mobile:mt-[60px] tablet:mx-10  desktop:mx-[188px] laptop:mx-[152px] flex items-center justify-center tablet:flex-row tablet:text-left mobile:flex-col mobile:content-center  mobile:mx-5 mobile:text-center">
        <img src="/image2.png" className="desktop:h-[414px] desktop:w-[414px] laptop:w-[346px] laptop:h-[346px]  mobile:w-[275px]"></img>
        <div className=" desktop:pl-[108px] tablet:pl-5">
            <div className="flex flex-col gap-5 tablet:items-start mobile:items-center">
                <p className="font-poppins font-semibold text-[27px] leading-[33px] text-[#6B3CC9]">Web & Mobile App Development</p>
                <p className="text-[16px] font-normal leading-[19px] desktop:w-[542px] laptop:w-[530px] tablet:w-[393px]">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <Button text="LEARN MORE" />
            </div>
        </div>
      </section>
      <section className=" desktop:h-[414px] laptop:h-[348px] tablet:h-[276px] tablet:mt-[60px] tablet:mx-10 mt-20 desktop:mx-[188px] laptop:mx-[152px] flex items-center justify-center tablet:flex-row  mobile:flex-col-reverse mobile:content-center mobile:mt-[60px] mobile:mx-5 mobile:text-center tablet:text-left">
        <div className=" desktop:mr-[108px] tablet:pr-5">
            <div className="flex flex-col gap-5 tablet:items-start mobile:items-center">
                <p className="font-poppins font-semibold text-[27px] leading-[33px] text-[#6B3CC9]">Digital Strategy Consulting</p>
                <p className="text-[16px] font-normal leading-[19px] desktop:w-[542px] laptop:w-[530px] tablet:w-[393px]">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                <Button text="LEARN MORE" />
            </div>
        </div>
        <img src="/image1.png" className=" desktop:h-[416px] desktop:w-[416px]  tablet:h-[275px] tablet:w-[275px] mobile:w-[275px]"></img>

      </section>
      <section className=" laptop:my-20 mobile:my-[60px] desktop:mx-[297px] laptop:mx-[152px] tablet:mr-10 tablet:ml-[42px] mobile:ml-5 mobile:mr-[21px]  flex flex-col items-center   mobile:text-center">
      <p className="font-poppins font-semibold text-[27px] leading-[33px] text-[#6B3CC9]">Frequently asked questions</p>
      <FAQ />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
