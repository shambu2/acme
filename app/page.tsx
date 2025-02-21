import AcmeLogo from "@/app/ui/acme-logo";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "./ui/font";
import Image from "next/image";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape}></div>
      <p
        className={`${lusitana.className} text-xl text-gray-600 md:text-3xl md:leading-normal`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the{" "}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>
        , brought to you by Vercel
      </p>
      <AcmeLogo />
      <Image 
      src='/hero-desktop.png'
      width={1000}
      height={760}
      alt="image of hero"
      className="hidden md:block"
      />
      <Image 
      src="/hero-mobile.png"
      width={500}
      height={620}
      alt="mobile img"
      className="block md:hidden"

      />
    </main>
  );
}
