import Image from "next/image";
import { Feedback, Footer, Header, Information, Main } from "./container";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Feedback />
      <Information />
      <Footer />
    </div>
  );
}
