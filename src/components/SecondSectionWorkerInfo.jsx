import React from 'react';

function SecondSectionWorkerInfo(props) {
    return (
        <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
        <div className="w-full md:w-[300px] lg:w-[510px]">
          <div>
            <span className="font-bold">
              {props.boldLine}
            </span>
            <span className="font-bold text-[#9EA7AE]">
              {props.lightLine}
            </span>
          </div>
        </div>
        <div className="info-caption">
          <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
           {props.caption}
          </div>
        </div>
      </div>
    );
}

export default SecondSectionWorkerInfo;