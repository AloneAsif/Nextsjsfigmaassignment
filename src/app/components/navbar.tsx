import Link from "next/link";
import Image from "next/image";
const navlinks = [
  { name: "home", path: "#" },
  { name: "gallery", path: "#" },
  { name: "projects", path: "#" },
  { name: "certifications", path: "#" },
  { name: "contacts", path: "#" },
];

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between lg:px-32 md:px-24 sm:px-16 px-4 h-[102px] items-center">
        <div>
          {" "}
          <Image
            src={"/logo/logo1.svg"}
            width={145}
            height={30}
            alt={""}
          ></Image>
        </div>
        <div className="lg:flex gap-10 uppercase hidden">
          {navlinks.map((link, index) => (
            <Link className="tracking-widest" href={link.path} key={index}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
