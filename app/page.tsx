import Image from "next/image";
import {
  Feedback,
  Footer,
  Header,
  Information,
  Main,
  Tours,
} from "./container";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Feedback />
      <Information />
      <Tours />
      <Footer />
    </div>
  );
}
