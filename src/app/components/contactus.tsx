import Image from "next/image";
const Contact = () => {
  return (
    <div className="sm:px-10 px-4 md:px-24 lg:px-32">
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl mt-5 text-[#BDBDBD]">
            Contact Us
          </h1>
          <form action="" className="flex flex-col space-y-2  ">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="tel" placeholder="E-mail" />
            <input type="tel" placeholder="Interested in" />
            <textarea name="" id="" placeholder="messages"></textarea>
          </form>


          <button className="w-44 mt-4 flex border border-slate-950 px-4 py-2">
            READ MORE
            <span>
              <img src="/arrow-2-right-long.svg" alt="" />
            </span>
          </button>
        </div>

        

        <div className="flex justify-center items-center">
          <Image
            src={"/contact/image12.png"}
            width={850}
            height={300}
            alt={""}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Contact;
