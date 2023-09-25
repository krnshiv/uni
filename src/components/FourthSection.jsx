import React from "react";
import AppleLogo from "../assets/AppleLogo";
import PlayLogo from "../assets/PlayLogo";

function FourthSection(props) {
  return (
    <div>
      <section className="py-12 lg:py-[100px] bg-[#222627] lg:py-[120px]">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:flex-col text-left md:text-center">
          <p className="mx-auto text-[28px] font-medium md:text-[40px] md:max-w-6xl text-white leading-[1.2]">
            <span>
              At Uni, we’re committed to{" "}
              <span className="uni-gradient-primary">
                {" "}
                delivering an unmatched credit experience{" "}
              </span>{" "}
              for millions of Indians.
            </span>
          </p>
          <p className="mt-6 max-w-[500px] mx-auto text-[#BFC9CC] text-2xl">
            On this mission, we’ve partnered with some of the best in the
            business.
          </p>
          <div className="md:mt-24 flex flex-row justify-center flex-wrap">
            <div className="flex justify-center w-[100px] md:w-44 mt-10 md:mt-0 md:mx-8 mx-4">
              <img
                className="w-full h-full"
                src="https://www.uni.cards/images/SBM.svg"
                alt="sbm bank"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12">
        <p className="max-w-3xl">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </p>
      </div>
      <section className="py-12 lg:py-[100px] lg:py-[100px] bg-cover download-bg" style={{ backgroundImage: 'linear-gradient(158deg,#5ad6c4,#fdef78)'}}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-around items-center my-4">
          <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
            Download now to get started
          </p>
          <div className="flex">
            <a
              href="https://unicards.onelink.me/KRuW/"
              className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2 flex items-center justify-center gap-1"
            >
              <PlayLogo />
              Google Play
            </a>
            <a
              href="https://uni-growth.onelink.me/v6cm/"
              className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black apple-btn-2 flex items-center justify-center gap-1"
            >

              <AppleLogo />
              App Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FourthSection;
