import { Link } from "react-router-dom";
import { item, services } from "./Constant";
import SectionHeading from "../../SectionHeading";


const Footer = () => {
  return (
    <footer className="bg-[#ffffffc2] border-4 mt-4 text-black  inset-4 p-2 ">
      <div className="pt-4 flex flex-col gap-10">
        <div className="bg-[white] pl-4 md:px-[4.861vw] xxl:px-[70px]">
            <div className="text-left text-base font-medium capitalize leading-xs md:text-center md:text-xl lg:text-2xl xl:text-[2rem] mb-5 md:mb-8 select-none md:select-text">
              <div className="flex w-full justify-center gap-2 uppercase font-thin italic ">
                <SectionHeading variant="secondary" size="medium" >Our Unique</SectionHeading>
          <SectionHeading variant="primary" size="large">Offering</SectionHeading>
              </div>
            </div>
            <div className="bg-transparent hide-scrollbar mt-4 pb-2 items-center gap-1 overflow-x-auto pr-4 md:mt-6  md:justify-between md:pr-0 lg:mt-7  xl:mt-8">
                <div className="bg-transparent min-w-[100px] md:w-auto flex gap-5 ">
                    {services.map((item, id) => (
                      
                      <div  className="flex flex-col h-[124px]   items-center gap-3 rounded bg- px-2 py-4 md:size-full md:flex-row md:bg-white md:p-1 lg:p-2" key={id}>
                        <div key={id}>
                          <img src={item.image} className="w-7 sm:w-10"/>
                        </div>
                        <div>
                          <p className="text-center text-xs font-normal leading-lg text-neutral-700 md:text-start md:text-sm lg:text-base select-none md:select-text">
                            {item.name}
                          </p>
                        </div>
                      </div>
                      
                    ))}
                </div>
            </div>
        </div>

        <div className="bg-[#e8e7eba2] p-4 md:px-[4.861vw] xxl:px-[70px] ">
          <div className="flex flex-col  gap-3 sm:gap-0 justify-between md:flex-row md:px-1  ">
            <div className="footerXXS flex  gap-2 border-b pb-4 md:flex-col md:gap-5 md:border-0 md:pb-0">
              <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-[#221F20] font-sans opacity-75 uppercase dark:text-gold md:leading-5 lg:!leading-[25.56px] select-none md:select-text"> Pay securely by </h4>
              <div className="flex items-center gap-1 lg:gap-2">
                <img className="h-8 w-10 lg:h-8 lg:w-10 xl:h-10 xl:w-[3.25rem]"  src="/src/assets/footer/icons8-visa-card-48.png"/>
                <img className="h-6 w-8 lg:h-6 lg:w-10 xl:h-10 xl:w-[3.35rem] bg-white p-1" src="/src/assets/footer/mastercard.256x198.png"/>
                <img className="h-6 w-8 lg:h-6 lg:w-10 xl:h-10 xl:w-[3rem]" src="/src/assets/footer/amarican.png"/>
                <img className="h-6 w-8 lg:h-6 lg:w-10 xl:h-14 xl:w-[3.25rem]" src="/src/assets/footer/701549_bank_card_payment_rupay_icon.png"/>
              </div>
            </div>
            <div className="hidden md:block shrink-0 w-px h-12 self-center bg-[#221F20] opacity-[1.34] md:h-16 lg:h-[75px]"></div>
            <div className="border-b py-4 md:border-0 md:py-0">
              <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-[#221F20] opacity-75 font-sans  uppercase  md:mb-1 md:!leading-[25.56px] lg:mb-2 select-none md:select-text">Reach out to us</h4>
              <div className="text-[10px] md:text-xs lg:text-sm xl:text-base text-ssBlack font-normal  md:leading-3 lg:leading-6 select-none md:select-text">
                For any queries, please write to us:
                <div className="text-[10px] md:text-xs lg:text-sm xl:text-base text-ssBlack cursor-pointer font-medium underline  md:block select-none md:select-text"> customercare@shoppersstop.com</div>
              </div>
            </div>
            <div className="hidden md:block shrink-0 w-px h-12 self-center bg-[#221F20] opacity-[1.34] md:h-16 lg:h-[75px]"></div>
            <div className="footerXXS flex items-center gap-2 border-b py-4 md:flex-col md:items-start md:gap-4 md:border-0 md:py-0">
              <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-[#221F20] opacity-75  font-sans uppercase !leading-[25.56px] dark:text-gold select-none md:select-text">Download the app</h4>
              <div className="flex items-center gap-2">
                <img className="h-7 cursor-pointer xl:h-[34.57px] " src="/src/assets/footer/googlplay.png"/>
                <img className="h-7 cursor-pointer xl:h-[35px] " src="/src/assets/footer/addstore.png"/>
              </div>
            </div>
            <div className="hidden md:block shrink-0 w-px h-12 self-center bg-[#221F20] opacity-[1.34] md:h-16 lg:h-[75px]"></div>
            <div className="footerXXS flex items-center gap-2 border-b py-4 md:flex-col md:items-start md:gap-0 md:border-0 md:py-0">
              <h4 className="text-xs md:text-sm lg:text-base xl:text-lg text-[#221F20] font-sans opacity-75 text-left uppercase !leading-[25.56px]  md:mb-2 lg:mb-4 select-none md:select-text">Verified by</h4>
              <div className="flex items-center gap-2 lg:gap-4 ">
                <img className="size-5 xl:h-[40px] xl:w-10"   src="/src/assets/footer/enimage.png"/>
                <img className="size-5 xl:h-[40px] xl:w-14"   src="/src/assets/footer/vvimage.jpg"/>
                <img className="size-5 xl:h-[40px] xl:w-16"  src="/src/assets/footer/mastercard-securecode6659.jpg" />
                <img className="size-5 xl:h-[40px] xl:w-14"   src="/src/assets/footer/dssImage1.png"/>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 border-0 border-[#221F20] border-opacity-[0.34] py-4  md:my-6 md:flex-row md:items-center md:border lg:my-8 lg:gap-8 lg:py-6 xl:my-10 xl:gap-16 xl:py-8">
            <div className="flex items-center gap-2 border-b  pb-4 md:border-0 md:pb-0 lg:gap-4 xl:gap-5">
              <p className="text-xs lg:text-base xl:text-lg text-[#221F20] font-sans opacity-75 uppercase !leading-[25.56px]  md:text-xs select-none md:select-text">Follow us on</p>
              <Link to="http://x.com/i/flow/login"><img className="size-5 cursor-pointer xl:size-[42px]"  src="/src/assets/footer/twitter_b1a5711e35.png"/></Link>
              <Link to="https://www.instagram.com"><img className="size-5 cursor-pointer xl:size-[42px]"  src="/src/assets/footer/instagram.png"/></Link>
            </div>
          </div>
          <div className="footerXXS flex justify-between gap-2.5 md:items-center">
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-center lg:gap-4">
              <img className="size-8 xl:size-[42px] " src="/src/assets/footer/sec2/ep1.svg"/>
              <div>
                <p className="text-center text-[10px] font-sans capitalize !leading-[15px] sm:!leading-[25px] text-[#221f20e8]  md:text-sm lg:text-base xl:text-lg select-none md:select-text">Easy Exchange</p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-[#221f20e8]  md:text-start select-none md:select-text">& Return</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
              <img className="size-8 xl:size-[38px]" src="/src/assets/footer/sec2/sp.svg"/>
              <div>
                <p className="text-center text-[10px] font-sans capitalize !leading-[15px] sm:!leading-[25px] text-[#221f20e8]  md:text-sm lg:text-base xl:text-lg select-none md:select-text">Secure payment</p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-neutral-500  md:text-start select-none md:select-text">Secure payment</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
              <img className="size-8 xl:size-[38px]" src="/src/assets/footer/sec2/ep3.svg"/>
              <div>
                <p className="text-center text-[10px] font-sans capitalize !leading-[15px] sm:!leading-[25px] text-[#221f20e8]  md:text-sm lg:text-base xl:text-lg select-none md:select-text">Express Pickup</p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-neutral-500  md:text-start select-none md:select-text">Stores near you</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-row lg:gap-4">
              <img className="size-8 xl:size-[38px]" src="/src/assets/footer/sec2/ap.svg"/>
              <div>
                <p className="text-center text-[10px] font-sans capitalize !leading-[15px] sm:!leading-[25px] text-[#221f20e8]  md:text-sm lg:text-base xl:text-lg select-none md:select-text">Authentic products</p>
                <p className="text-[10px] md:text-xs lg:text-sm xl:text-base font-normal text-center capitalize text-neutral-500  md:text-start select-none md:select-text">100% Genuine</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white w-full "> */}
          
          <div className="bg-[white] pl-4 md:px-[4.861vw] xxl:px-[70px]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 lg:gap-6">
      
              <div className="mt-6 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f3e3e] mb-4">
                    CUSTOMER
                
                </h3>
                <ul className="flex flex-col gap-1 text-[#313131]">       
                  <li>HELP/FAQS</li>
                  
                </ul>
              </div>

              
              <div className="mt-6 sm:mt-0 ">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f3e3e] mb-4">
                  TOP CATEGORY
                </h3>
                <ul className="flex flex-col gap-1 text-[#313131]">       
                  <Link to={"/category/men"}><li>MEN</li></Link>
                  <Link to={"/category/women"}><li>WOMEN</li></Link>
                  <Link to={"/category"}><li>ALL CATEGORY</li></Link>
                </ul>
              </div>
              <div className="mt-6 sm:mt-0 text-[#221f20e]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f3e3e] mb-4">
                    POLICIES                
                </h3>
                <ul className="flex flex-col gap-1 text-[#313131]">       
                  <li>TERMS OF USE</li>
                  <li>PRIVACY</li>
                  <li>DELIVERY POLICY</li>
                  <li>EXCHANGE & RETURN</li>
                </ul>
              </div>
              <div className="mt-6 sm:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[#3f3e3e] mb-4">
                    FIRST CITIZEN
               
                </h3>
                <ul className="flex flex-col gap-1 text-[#313131]">       
                  <li>FIRST CITIZEN CLUB</li>
                </ul>
              </div>
              
              
            </div>
            <div className=" ">
                  {item.map((items) =>(
                    
                    <div className="flex flex-col gap-3 " key={items.id}>
                      <h1 className="font-bold text-x text-sens text-[#313131] mb-2">{items.name}</h1>
                      <p className=" text-sm text-arial text-[#353434] mb-4">{items.desc}</p>
                    </div>
                    
                  ))}
          </div>
            </div>

          
          
        </div>
        <div className="bg-[#070707] w-full p-2">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-[#fdfdfc] text-xs sm:text-sm">
                © {new Date().getFullYear()} Shopper. All rights reserved.
              </p>
            </div>
          </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;