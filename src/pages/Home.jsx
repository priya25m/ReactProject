import i from "../assets/Mediamodifier-Design.svg";

function Home() {
  return (
    <div className="flex flex-1 w-11/12 max-w-[1160px] mx-auto justify-center items-center text-white text-3xl">
      <section className="max-w-[90vw] lg:max-w-[85vw] xl:mt-0 mt-3 xl:max-h-screen gap-3 md:gap-0 h-full w-full flex md:flex-nowrap flex-wrap-reverse justify-between items-center mx-auto relative">
        <div className="flex flex-col justify-around w-full items-center md:items-start md:w-[50%] gap-3 md:gap-5 lg:gap-3">
          <h1 className="text-[1.1rem] md:text-4xl lg:text-[4rem] xl:text-[5rem] font-semibold md:leading-[3.5rem] xl:leading-[6.9rem]">We Take Care of Your Education</h1>
          <p className="text-[0.7rem] md:text-xs lg:text-sm xl:text-base md:text-start text-center font-normal md:leading-[1.5rem] opacity-60">
            Use this section to describe your company and the products you offer.
            You could share your company’s story and details about why you are in
            business.{" "}
          </p>
          <div className="w-[70%] md:w-full flex items-center wrap gap-[3%] mt-2">
            <input type="email" placeholder="Enter your Email" className="w-[67%] p-1 md:p-4 border-none place-self-center rounded-[70px] text-[0.7rem] md:text-xs lg:text-sm xl:text-base font-medium bg-[#fafafa] flex-grow-0" />
            <button className="py-1 md:py-3 lg:py-4 w-[30%] border-none rounded-[70px] text-[0.7rem] md:text-xs lg:text-sm xl:text-base font-medium text-white bg-blueC shadow-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">Lets Talk</button>
          </div>
        </div>
        <div className=" flex justify-center w-6/12 mx-auto md:mx-0 md:justify-end items-center">
          <img src={i} alt="" className="place-self-end object-contain " />
        </div>
      </section>
    </div>
  );
}

export default Home;
