import Image from "next/image";
export default function About() {
  // const navBarPaddings = "sm:px-10 px-4 md:px-24 lg:px-32";
  return (
    <div className="sm:px-10 px-4 md:px-24 lg:px-32">
      <div className="place-content-center place-items-center md:grid grid-cols-3 lg:mt-28 bg-[#ffff] ">
        <div className="flex flex-col gap-5">
          <Image src={"/about_1.jpg"} width={270} height={265} alt=""></Image>
          <Image src={"/about_3.jpg"} width={270} height={265} alt=""></Image>
        </div>
        <div>
          <Image src={"/about_2.jpg"} width={270} height={265} alt=""></Image>
        </div>
        <div className="space-y-5">
          <h1 className="text-5xl md:text-7xl mt-5 text-[#BDBDBD]">About</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            dicta magnam voluptas impedit unde ea est saepe suscipit ullam cum
            excepturi? Ad consequatur excepturi fugit aperiam ut a alias
            eligendi? Sed obcaecati ducimus, quod optio veniam fugit magnam
            quasi! Quos facilis consequuntur expedita, voluptates quae est
            reiciendis voluptatum repellat quisquam.
          </p>

          <button className="flex border border-slate-950 px-4 py-2">
            READ MORE
            <span>
              <img src="/arrow-2-right-long.svg" alt="" />
            </span>
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl lg:mt-24 md:mt-16 mt-4 text-[#BDBDBD]">
          Main Focus/Mission Statement
        </h1>

        <div className="grid gap-8 p-4 sm:p-8 md:grid-cols-2">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold">
              1
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempore non sint perspiciatis. Voluptatum sit soluta dolore quae
              veritatis perferendis tenetur non, doloremque magnam facilis vel
              quo reprehenderit, possimus rem?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold">
              2
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              tempore non sint perspiciatis. Voluptatum sit soluta dolore quae
              veritatis perferendis tenetur non, doloremque magnam facilis vel
              quo reprehenderit, possimus rem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
