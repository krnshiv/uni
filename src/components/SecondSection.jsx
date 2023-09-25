import React from "react";
import SecondSectionWorker from "./SecondSectionWorker";
import SecondSectionWorkerImage from "./SecondSectionWorkerImage";
import SecondSectionWorkerInfo from "./SecondSectionWorkerInfo";

function SecondSection(props) {
  return (
    <div className="py-12 md:py-[150px]">
      <section>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
          <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
            <p style={{ opacity: "1", transform: "none" }}>
              Earn 1% assured cashback{" "}
              <span className="font-normal text-[#9ea7ae]">
                on your spends. Get
              </span>{" "}
              5X
            </p>
            <p style={{ opacity: "1", transform: "none" }}>
              more value than cashback{" "}
              <span className="font-normal text-[#9ea7ae]">
                {" "}
                at the Uni Store. Enjoy
              </span>
            </p>
            <p style={{ opacity: "1", transform: "none" }}>
              <span className="text-[#9EA7AE] font-normal text-[#9ea7ae]">
                round the clock{" "}
              </span>
              Whatsapp support.{" "}
              <span className="text-[#9EA7AE] font-normal text-[#9ea7ae]">
                And it's
              </span>
            </p>
            <p style={{ opacity: "1", transform: "none" }}>
              lifetime free
              <span className="font-normal text-[#9ea7ae]">
                ; no joining fee, no annual charges.
              </span>
            </p>
          </div>
        </div>

        <div
          className=" flex md:justify-center py-12"
          style={{ opacity: "1", transform: "none" }}
        >
          <div
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
                
            }}
            className="icon-fade flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center 
            "
          >
            <img
              alt="down_arrow"
              src="https://www.uni.cards/images/down_arrow.svg"
              loading="lazy"
              className=" w-9 md:w-14 css-0"
            />
          </div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  px-8">
        <div className="flex justify-center flex-col">
        <div
        className="flex md:items-center flex-col-reverse md:flex-row
        w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
      >
        <SecondSectionWorkerInfo boldLine={'1% assured cashback on your spends.'} lightLine={'The more you spend, the more you earn.'} caption={` Not applicable on fuel purchase, rent &amp; wallet transfers,
        ATM withdrawals &amp; international transactions.`}/>
        <SecondSectionWorkerImage img={'https://www.uni.cards/images/one_percent_cashback.png'}/>
      </div>
       
        <div
        className="flex md:items-center flex-col md:flex-row
        w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
      >
      <SecondSectionWorkerImage img={'https://www.uni.cards/images/five_x_rewards.png'}/>
        <SecondSectionWorkerInfo boldLine={'5x more value than your cashback,'} lightLine={' only at the Uni Store.'}/>
      </div>
       
        <div
        className="flex md:items-center flex-col-reverse md:flex-row
        w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8"
      >
        <SecondSectionWorkerInfo boldLine={'Zero Forex Markup.'} lightLine={' Go international, without any fees.'}/>
        <SecondSectionWorkerImage img={'https://www.uni.cards/images/forex_globe.png'}/>
      </div>

      <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center"><p>Lifetime <span className="text-[rgba(90,214,196,1)]">free. </span><span className="block sm:inline-block md:text-center">No joining fee.</span><span className="block md:text-center"> No annual charges. </span></p></div>
       
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
