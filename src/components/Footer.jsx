import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo";
import WhiteLogo from "../assets/WhiteLogo";

function Footer(props) {
    
const [isTop, checkTop] = useState(true)

  return (
    <div>
      <section>
        <div className="relative w-full bg-[rgba(34,34,34,1);]">
          <div className="flex items-center justify-center p-4 text-gray-500">
            <p>Uni maintains the highest level of security standards</p>
            <img
              src="https://www.uni.cards/images/pcidss_cert.svg"
              className="ml-3 w-20 css-0"
              width="80px"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <footer
          as=""
          className="flex flex-col items-center bg-black text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40"
          id="footer"
        >
          <div className="w-full max-w-[1240px] min-h-[auto]">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
              <div className="flex flex-col w-full lg:w-1/2 items-start">
                <div className="mx-0 md:m-0">
                  <WhiteLogo />
                </div>
                <div className="text-gray-500 text-[13px] lg:text-base">
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI
                    Colony, Koramangala, Bengaluru, Karnataka 560034
                  </p>
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px] mt-4">
                    Contact Us:<a href="tel: 080 68216821">080 68216821</a>
                  </p>
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Email:<a href="mailto: care@uni.club">care@uni.club</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] h-[1px] w-full max-w-[1240px] mt-8"></div>
          <div className="py-4 w-full max-w-[1240px] min-h-[auto]">
            <p className="text-left">
              <a
                href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
                className="text-[#FFFFFF]"
              >
                <u>Grievance Redressal Mechanism</u> - SBM Bank India
              </a>
            </p>
          </div>
          <div
            className="h-[1px] w-full max-w-[1240px] mx-0 mb-5 md:mb-8"
            style={{
              background:
                "linear-gradient(90deg,#00dcc8 26.31%,#00dcc8 61.59%,#fff061 74.32%,#fff061 85.31%)",
            }}
          ></div>
          <div className="flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between">
            <div className="flex w-full flex-wrap flex-1 justify-center md:justify-start">
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://www.instagram.com/uni_cards/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://www.linkedin.com/company/uni-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://twitter.com/cards_uni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://www.facebook.com/Uni-Cards-104179288358904"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://careers.uni.cards/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
            </div>
            <div className="p-0 pb-5 flex justify-center flex-wrap">
              <span data-testid="cc-kfs">
                <a
                  className="h-[60px]"
                  href="/credit-card-key-facts"
                  target="_blank"
                >
                  Credit Card KFS
                </a>
                <span className="px-2">|</span>
              </span>
              <span data-testid="nxwave-tnc">
                <a
                  className="h-[60px]"
                  href="/docs/Credit_Card_MITC.pdf"
                  target="_blank"
                >
                  Credit Card T&amp;Cs
                </a>
                <span className="px-2">|</span>
              </span>
              <span data-testid="uni-tnc">
                <a
                  className="h-[60px]"
                  href="/privacy-policy-main"
                  target="_blank"
                >
                  Uni T&amp;Cs
                </a>
                <span className="px-2">|</span>
              </span>
              <span data-testid="nbfc-tnc">
                <a className="h-[60px]" href="/nbfc-terms" target="_blank">
                  Lending Partner TnCs
                </a>
              </span>
            </div>
          </div>
          <div className="sm:h-40 md:hidden"></div>
        </footer>
      </section>

      <div className="w-full bottom-0 z-40 fixed md:hidden py-8 css-1s4jw3r">
        <div className="w-[90vw] mx-auto md:mx-0 md:max-w-[280px] font-medium">
          <div className="flex flex-col transition-all ease-in">
            <button className="p-4 rounded-lg z-10 flex justify-between items-center bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
              <span>Apply now</span>
              <img
                src="https://www.uni.cards/images/right_arrow.svg"
                alt="right_arrow"
                width="21px"
                className="inline ml-3 css-0"
              />
            </button>
          </div>
        </div>
      </div>

      {!props.isTop && <div style={{ opacity: "1" }}>
        <section className="hidden sm:block fixed bottom-0 w-screen bg-[rgba(245,245,245,1)] py-5 z-10">
          <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
            <div className="flex justify-between items-center block w-full">
              <div className="flex w-full flex-row justify-between items-center">
                <form>
                  <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
                    <div className="flex items-center">
                      <input
                        className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                        placeholder="Enter Phone Number"
                        value={props.value}
                        onChange={(e)=>{props.setValue(e.target.value)}}
                      />
                      {props.value?<button type="button" onClick={()=>{props.setValue('')}}>
                      <svg width="14" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z" fill="#fff"></path></svg></button>
                    :  <span className="w-6 flex items-center justify-end h-full"></span>
                    }
                    </div>
                    <button
                      type="submit"
                      className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-500 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                    >
                      <span>Apply Now</span>
                    </button>
                  </div>
                </form>
                <div className="consent flex items-center py-4 px-2 max-w-xs gap-2">
                  <input type="checkbox" id="consent-msg" checked="false" />
                  <label
                    for="consent-msg"
                    className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer"
                  >
                    You agree to be contacted by Uni Cards over Call, SMS, Email
                    or WhatsApp to guide you through your application.
                  </label>
                </div>
              </div>
            </div>
            <div className="flex hidden w-full flex-row items-center justify-between">
              <div className="w-full max-w-[300px]">
                <a
                  href="https://uni-growth.onelink.me/v6cm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]"
                >
                  <div className="w-full flex justify-center items-center">
                    <span>Download</span>
                  </div>
                </a>
              </div>
              <div className="my-2">
                <p className="text-white md:text-black text-[10px] leading-3">
                  Thank you for your interest in the Uni Card.
                  <br /> Download the Uni Cards app now and get your Uni Card in
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>}
    </div>
  );
}

export default Footer;
