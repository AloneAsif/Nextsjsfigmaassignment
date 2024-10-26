import Image from "next/image";

const Footer = (()=>{
    return(
        <div className="md:mt-24 mt-4 text-white bg-[#2C2C2C] sm:px-10 px-4 md:px-24 lg:px-32">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-12 p-4 ">
                <div>
                    <Image src={"/logo/logo2.svg"} width={145} height={30} alt={""}></Image>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li>Information</li>
                        <li>Main</li>
                        <li>Gallery</li>
                        <li>Projects</li>
                        <li>Certifications</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div>
                <ul className="space-y-4">
                        <li> <img src="/icons/email" alt="" /> Contacts</li>
                        <li>1234 Sample Street Austin Texas 78704</li>
                        <li>+999999999</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <li>Follow us</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    )
})


export default Footer;