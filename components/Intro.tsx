import { Heading } from "./Heading";
// import ParallaxBackground from "@/components/ui/backgroundpic";

export function Intro() {
  return (
    <div className="flex gap-14 items-center flex-wrap w-full py-12 px-12 sm:px-14 min-h-screen">
      <div className="">
        <div className="flex justify-between gap-10 items-center flex-wrap">
          <Heading />
        </div>
        <p>
          currently studying Math at University of Waterloo.
          <br />I am interested in writing code. I enjoy listening to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 via-sky-400 to-pink-400 font-semibold">
            <a
              href="https://y.qq.com/n/ryqq/profile/like/song"
              target="_blank"
              rel="noopener noreferrer"
            >
              music
            </a>
          </span>
          , playing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 via-violet-500 to-rose-400 font-semibold">
            <a
              href="https://steamcommunity.com/profiles/76561198228900368/"
              target="_blank"
              rel="noopener noreferrer"
            >
              video games
            </a>
          </span>
          ,<br />
          and riding motorcycle in my spare time.
        </p>
        <h1>
          <a
            className="
              bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-400 
              bg-clip-text text-transparent font-semibold 
              hover:bg-none hover:text-pink-600 hover:underline transition-colors duration-600"
            href="/ZichuanYaoResume.pdf"
            target="_blank"
          >
            Resumé
          </a>
        </h1>
      </div>
    </div>
  );
}
