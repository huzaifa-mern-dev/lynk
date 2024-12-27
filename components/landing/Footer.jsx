import { Link2 } from "lucide-react";
import { ModeToggle } from "../modetoggle";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 lg:px-32 py-10 text-center grid place-content-center">
            <div className="grid gap-2 place-items-center">
                <span><Link2 className="h-5 w-5" /></span>
                <h3 className="text-lg -mb-1 -mt-2">URL Shortner</h3>
                <p className="text-muted-foreground text-sm sm:text-base">built to demonstrate my skills & to put in my portfolio</p>
            </div>
            <div className="mt-2 flex gap-3 items-center justify-center">
                <Link href="https://github.com/huzaifa-mern-dev" className="underline underline-offset-[5px] decoration-blue-400 text-sm">Github</Link>
                <Link href="https://www.linkedin.com/in/huzaifa-dev/" className="underline underline-offset-[5px] decoration-blue-400 text-sm">Linkedin</Link>
            </div>
            <div className="mt-4">
                <ModeToggle />
            </div>
        </footer>
    )
};