
import { Banner } from "./Banner/Banner";
import { Qui } from "./Qui/Qui";
import { Que } from "./Que/Que";
import { Nous } from "./Nous/Nous";
import {Footer} from '../footer/Footer'
export function Main() {
  return (
    <>
      <main id="main" className="main">
        <Banner></Banner>
        <Qui></Qui>
        <Que></Que>
        <Nous></Nous>
        <Footer></Footer>
      </main>
      
    </>
  );
}
