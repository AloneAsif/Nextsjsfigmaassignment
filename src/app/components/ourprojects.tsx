import Image from "next/image";

export default function Projects() {
  return (
    <div className="sm:px-10 px-4 md:px-24 lg:px-32">
      <h1 className="text-[#BDBDBD] text-4xl md:text-5xl lg:mt-20 md:mt-16 mt-4">
        Our Projects
      </h1>

      <div className="grid gap-4 p-4 md:gap-6 lg:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Image
              src={"/our_projects/Rectangle17.jpg"}
              height={255}
              width={570}
              alt={""}
            ></Image>
            <h1 className="absolute z-10 top-10 left-10 w-full text-white text-xl font-bold  p-4">
              sample projects
            </h1>
          </div>
          <div>
            <Image
              src={"/our_projects/image15.jpg"}
              height={255}
              width={570}
              alt={""}
            ></Image>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              src={"/our_projects/image16.jpg"}
              height={255}
              width={270}
              alt={""}
            ></Image>
          </div>
          <div>
            <Image
            className="w-full"
              src={"/our_projects/image17.jpg"}
              height={255}
              width={470}
              alt={""}
            ></Image>
          </div>
          <div>
            <Image
              src={"/our_projects/image18.jpg"}
              height={255}
              width={370}
              alt={""}
            ></Image>
          </div>
        </div>
      </div>


      <button className="flex float-end border bg-[#333333] text-white border-slate-950 px-4 py-2">
            ALL PROJECTS
            <span>
              <img
              src="/arrow-2-right-long.svg" alt="" />
            </span>
          </button>
          




          

    </div>
  );
}
