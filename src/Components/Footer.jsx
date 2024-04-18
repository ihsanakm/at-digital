import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className=" desktop:px-20 laptop:px-[60px] mobile:px-5 pt-10 pb-5 bg-[#6B3CC9] flex flex-col gap-10">
          <div className="laptop:flex laptop:justify-between laptop:flex-row mobile:flex-col">
            <div className="tablet:w-[413px] mobile:w-[335px] flex flex-col gap-5 mobile:mb-[60px]">
              <div>
                <img src="/WhiteLogo.png"></img>
              </div>
              <div className="text-left text-white font-normal text-base font-lato">
                <p>
                  Your goal is our target. Not anything in between. We use
                  online marketing platforms and tools to achieve single
                  objective - your business results.
                </p>
              </div>
            </div>
            <div className="flex tablet:gap-32 tablet:flex-row  mobile:flex-col">
              <div className="flex flex-col items-start gap-3 mobile:mb-10">
                <p className="text-left text-white font-semibold text-[21px]">
                  Our Technologies
                </p>
                <div className="text-left flex flex-col gap-3 text-white font-medium text-sm">
                  <p>ReactJS</p>
                  <p>Gatsby</p>
                  <p>NextJS</p>
                  <p>NodeJS</p>
                </div>
              </div>
              <div className="flex flex-col items-start  gap-3">
                <p className="text-left text-white font-semibold text-[21px]">
                  Our Services
                </p>
                <div className="text-left flex flex-col gap-3 text-white font-medium text-sm">
                  <p>Social media Marketing</p>
                  <p>Web & Mobile App Development</p>
                  <p>Data & Analytics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="border-t  border-white tablet:w-[630px] h-[25px] flex justify-center mobile:w-[335px]">
              <div className="flex mt-2 gap-4">
                <p className="text-white text-sm font-medium ">Privacy Policy</p>
                <div className="border"></div>
                <p className="text-white text-sm font-medium">Terms & Conditions</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
