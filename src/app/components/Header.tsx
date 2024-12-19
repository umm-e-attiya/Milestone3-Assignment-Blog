import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
    return (
        <div className="bg-blue-600 bg-fixed w-full h-[60px] flex ">
            <div className="flex">
                <div className="ml-4 pt-5  md:pt-5 lg:pt-5">
                    <h1 className="text-white">Information Technology (IT)</h1>
                </div>
                <div>
                    <ul className="hidden md:hidden lg:flex lg:ml-96 lg:gap-16  lg:mt-5 text-white ">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                       
                    </ul>

                </div>
                <div>
                    <button className="w-[100px] h-[40px] mt-3 pl-2 pt-2 rounded-sm bg-black text-white hidden md:hidden lg:flex  lg:ml-80 "><Link href="/contact">Contact Us </Link></button>
                </div>
                    
                
            </div>
            <div>
                       <Sheet>
                        <SheetTrigger className="lg:hidden pt-5 pl-[200px]  md:pl-[600px]">
                        <MenuIcon/>
                        </SheetTrigger>
                        <SheetContent className="bg-blue-500">
                        <ul className="mt-2  text-white">
                        <li className="mt-4"><Link href="/">Home</Link></li>
                        <li className="mt-4"><Link href="/blog">Blog</Link></li>
                        <li className="mt-4"><Link href="/about">About Us</Link></li>
                       
                    </ul>
                         
                    <div>
                    <button className="w-[100px] h-[40px] mt-5 pl-0 pt-0 rounded-sm bg-black text-white"><Link href="/contact">Contact Us</Link></button>
                    </div>
                        </SheetContent>
                       </Sheet>
                   </div>


        </div>
    )
}

export default Navbar;