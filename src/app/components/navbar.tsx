import Link from "next/link"
export default function Nav(){
    return(
        <nav className="max-md:mr-11 flex justify-between items-center py-4 pl-16 bg-[#131128] text-white max-md:flex-col">
  {/* <!-- Navbar Left --> */}
  <div className="flex items-center max-md:flex-col max-md:items-center">
    <img src="https://cdn.prod.website-files.com/5f8f28722b0eae892596eb35/5fac14536bfe49d6412e1990_logo-crypto-template.svg" className="w-32 h-10 mr-5" alt="Logo"></img>
    <ul className="flex max-md:flex-col">
      <li className="mr-5  max-md:mr-0 "><Link className="text-white text-lg" href="/">Home</Link></li>
      <li className="mr-5  max-md:mr-0 "><Link className="text-white text-lg" href="/About">About</Link></li>
      <li className="mr-5  max-md:mr-0 "><Link className="text-white text-lg" href="/blog">Blog</Link></li>
    </ul>
  </div>
  
  {/* <!-- Navbar Right --> */}
  <div className="flex justify-between mt-0 max-md:mt-5">
    <button className="bg-[#444] text-white py-2 px-4 rounded-md">Sign In</button>
    <button className="bg-[#666] text-white py-2 px-4 rounded-md">Sign Up</button>
  </div>
</nav>

    )
}
