import Nav from "./components/navbar"
export default function Home(){
  return(
    <div className="bg-[#131128] h-screen font-serif max-md:pr-3;">
      <Nav/>
        <h1 className="text-white text-[5rem] font-bold ml-[70px] mt-[70px] max-md:text-4xl max-lg:text-3xl max-xl:text-2xl max-md:mt-7 ;">Buy and trade cryptos <br /> like never before.</h1>
        <p className="text-white text-[30px] ml-[70px] max-md:text-xl max-lg:text-lg max-xl:text-base ;">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Repellendus quia eum magni facere adipisci quae.</p>
        <button className=" ml-[70px] w-[215px] h-[70px] bg-[#6639E4] text-white font-bold text-center rounded-full mt-5  hover:bg-[#282454] max-md:w-[160px] max-lg:w-[150px] max-xl:w-[120px] max-md:h-[45px] max-lg:h-[50px] max-xl:h-[40px];">DOWNLOAD APP</button>
        <button className=" ml-[70px]  w-[191px] h-[70px] bg-[#282454] text-white font-bold text-center rounded-full mt-5  hover:bg-[#6639E4] max-md:w-[160px] max-md:h-[45px] ;">VIEW PRICING</button>
    </div>
  )
}