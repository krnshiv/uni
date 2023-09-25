import React from 'react';

function SecondSectionWorkerImage(props) {
    return (
        <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img src={props.img} className="" />
                </div>
              </div>
            </div>
    );
}

export default SecondSectionWorkerImage;