"use client";

import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import { Container } from "@mantine/core";
import ImgMegafon from "@/app/assets/images/feedback/megafon.png";

function Feedback() {
  return (
    <div className={`${classes.feedback} md:p-20 relative`}>
      <Container>
        <div className="flex justify-around items-center lg:items-stretch">
          <div className={`${classes.left} text-center`}>
            <div className={classes.image__border}>
              <Image src={ImgMegafon} alt="image" />
            </div>
            <h2>Акция!</h2>
            <h4>
              Оставьте заявку СЕЙЧАС <br />и получите оформление визы в ПОДАРОК!
            </h4>
          </div>
          <div
            className={`${classes.right} py-10 px-10 w-full text-center md:w-auto md:pb-6 md:pt-4 md:px-4 lg:py-12 lg:px-10`}
          >
            <h4>Заполните форму</h4>
            <p>
              и получите подбор <br />
              индивидуального тура
            </p>
            <form className="flex flex-col">
              <input type="text" name="name" placeholder="Ваше имя" />
              <input type="text" name="phone" placeholder="Ваше телефон" />
              <input type="text" name="email" placeholder="Ваш e-mail" />
              <button type="submit">Подобрать тур</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feedback;
