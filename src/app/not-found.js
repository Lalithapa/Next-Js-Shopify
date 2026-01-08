// src/app/not-found.js
import Link from "next/link";
import errorImg from "../../public/404.webp"
import Image from "next/image";
export default function NotFound() {
    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <Image src={errorImg} width={1920} alt="Not Found" className="absolute h-full w-full object-cover" />
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        You are all alone here
                    </h1>
                    <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                        404
                    </p>
                    <div className="flex gap-3">
                        <Link
                        href="/"
                        className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                    >
                        Go to homepage
                    </Link>
                    <Link
                        href="/collections/all"
                        className="rounded-full border px-5 py-2.5 text-sm font-semibold text-gray-900 bg-gray-50"
                    >
                        Continue shopping
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
