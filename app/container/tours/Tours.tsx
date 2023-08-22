"use client";

import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import Image1 from "@/app/assets/images/tours/image.png";
import { Container, Grid } from "@mantine/core";

function Tours() {
  return (
    <div className={classes.tours}>
      <Container size={"xl"}>
        <div className="text-center py-20 z-20 relative">
          <h3 className="mb-10">Выберите свой курорт</h3>
          <Grid>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image1} alt="Image" />

                <h5>Золотые пески</h5>
                <p>
                  Изобилие горных трасс, подъемников <br />и
                  достопримечательностей
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image1} alt="Image" />

                <h5>Золотые пески</h5>
                <p>
                  Изобилие горных трасс, подъемников <br />и
                  достопримечательностей
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image1} alt="Image" />

                <h5>Золотые пески</h5>
                <p>
                  Изобилие горных трасс, подъемников <br />и
                  достопримечательностей
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image1} alt="Image" />

                <h5>Золотые пески</h5>
                <p>
                  Изобилие горных трасс, подъемников <br />и
                  достопримечательностей
                </p>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Tours;
