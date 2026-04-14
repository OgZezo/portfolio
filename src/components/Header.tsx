import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


export default function Header() {
    const [menuOpen, setMenuOpen]       = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-10 pt-8 pb-4">
            <header className="py-5" >
                <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-[6px] p-1"
                aria-label="Menu"
                >
                    <span className="block w-7 h-[2px] bg-[#FBD15B]" />
                    <span className="block w-7 h-[2px] bg-[#FBD15B]" />
                    <span className="block w-7 h-[2px] bg-[#FBD15B]" />
                </button>
            </header>

            <Link to="/" className="font-display font-bold text-2xl tracking-widest hover:opacity-80 transition-opacity">
                <img src="/images/logo.svg" alt="JMB Logo" className="h-8 w-auto" />        
            </Link>
        </nav>
            );
}