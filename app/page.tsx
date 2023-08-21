import Image from "next/image";
import { Feedback, Footer, Header, Main } from "./container";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Feedback />
      <Footer />
    </div>
  );
}
