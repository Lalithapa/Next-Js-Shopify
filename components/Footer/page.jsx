import Image from "next/image";
import logo from "@/../public/hok_logo.webp"
import Link from "next/link";

export default function Footer() {
  return (  
    <footer className="mx-auto w-full bg-gray-100 py-8 sm:py-12">
        <div className="container max-w-7xl mx-auto px-4">
            <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                {/* <h5 className="text-xl font-bold mb-6">Features</h5> */}
                <Link href="/" className="flex items-center">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={148}
                        height={36}
                        priority
                    />
                </Link>
                <ul className="list-none footer-links">
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</Link>
                </li>
                </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                <h5 className="text-xl font-bold mb-6">Resources</h5>
                <ul className="list-none footer-links">
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</Link>
                </li>
                </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                <h5 className="text-xl font-bold mb-6">About</h5>
                <ul className="list-none footer-links">
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</Link>
                </li>
                </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                <h5 className="text-xl font-bold mb-6">Help</h5>
                <ul className="list-none footer-links">
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</Link>
                </li>
                </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                <div className="flex sm:justify-center xl:justify-start gap-4">
                  <Link href="" className="text-center ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                    </svg>
                </Link>
                <Link href="" className="text-center text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                <Link href="" className="text-center text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                    <svg className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                    </svg>
                </Link>
                </div>
            </div>
            </div>
        </div>
    </footer>
  );
}   