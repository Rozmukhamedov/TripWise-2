"use client";

import React from "react";
import classes from "./style.module.css";
import { Container } from "@mantine/core";
import Image from "next/image";

function Header() {
  return (
    <div className={`${classes.header} absolute w-full z-20	`}>
      <Container size={"xl"}>
        <div className="flex justify-between items-center py-4">
          <Image src="" alt="trip wise" />
          <h4>
            <a href="tel:+998777774033">+998 (77) 777-40-33</a>
          </h4>
        </div>
      </Container>
    </div>
  );
}

export default Header;
