import Nav from "../components/navbar"
export default function Blog(){
    return(
        <div className="max-md:h-[1000px] bg-[#131128] h-screen ;">
            <Nav/>
            <div className=" max-w-[1246px] mx-auto px-6 pt-10 max-md:max-w-full max-lg:h-auto">
            <div className=" flex justify-between items-center mb-10 mt-10 max-md:flex-col max-md:items-center;">
                <h1 className=" text-white text-6xl font-bold leading-tight max-md:text-5xl max-lg:text-3xl">Blog</h1>
                <p className=" max-md:text-white text-lg w-full mt-5 max-md:text-base ;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>
            </div>
            <div className="max-md:mb-11 flex transition duration-1000 hover:scale-105 max-md:flex-col ;
">
            <div className="w-full pl-15px bg-[#282454] p-10 rounded-tl-lg rounded-bl-lg max-md:p-5 max-lg:p-10">
                    <div className="w-[120px] text-center bg-[#6639E4] text-white text-lg font-medium rounded-3xl py-2 mt-5 max-md:w-full max-lg:w-[120px];">Featured</div>
                    <div className="text-white text-5xl font-bold mt-5 max-md:text-3xl max-lg:text-2xl;">What is the best and most secure crypto wallet of 2024 </div>
                    <div className="text-white max-md:text-white;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus, nobis distinctio ?</div>
            </div>
            </div>
            </div>
        </div>
    )
}