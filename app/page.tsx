import Image from "next/image";
import {
  Feedback,
  Footer,
  Header,
  Information,
  Main,
  Tours,
  Travel,
} from "./container";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Feedback />
      <Information />
      <Tours />
      <Travel />
      <Footer />
    </div>
  );
}
