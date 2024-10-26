

import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/ourprojects";
import Contact from "./components/contactus";

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400','500','700','900'], 
});


export default function Home(){
  return (
    <div className={roboto.className}>
      {/* <Navbar /> */}
      <Hero/>
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}