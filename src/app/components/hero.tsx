import Image from "next/image";

export default function Hero() {
  return (
    <div className="sm:px-10 px-4 md:px-24 lg:px-32">
      <div className="grid md:grid-cols-2 h-screen items-center gap-8">
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
            PROJECT
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Lorem</h1>
          {/* arrow Buttons */}

          <div className="flex md:justify-start justify-center gap-4">
            <img
            className="border border-slate-500 p-2 hover:shadow-md"
            src="/arrow-2-right-long-1.svg" alt="" />
            <img
            className="border border-slate-500 p-2 hover:shadow-md"
            src="/arrow-2-right-long.svg" alt="" />
            {/* <img src="/arrow-2-right-long.svg" alt="" /> */}
          </div>
        </div>

        <div className="">
          <Image
            src="/first_image.jpg"
            width={770}
            height={829}
            alt="building_pic"
            // className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
