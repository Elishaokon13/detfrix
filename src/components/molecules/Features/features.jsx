import React from "react";
import { Card } from "../../atoms/Card/card";
import Heading from "../../atoms/Heading";
import { useContent } from "../../../hook/useContent";
import { Image } from "../../atoms/ReactImage/image";

export const Features = () => {
  return (
    <div className={`flex justify-center items-center -translate-y-[3rem]`}>
      <Card className="w-[20rem] h-[20rem] flex flex-col justify-center items-center bg-black">
        <Image
          src="https://res.cloudinary.com/freecodingboy/image/upload/v1663673859/Detfrix/Home/bi_display_ivo9wm.svg"
          alt=""
        />
        <Heading level={2} className="text-white font-bold">
          Data Storage
        </Heading>
        <p className="text-white text-center p-3">
          Client’s personal investment data is stored in logical pools over
          physical storage that spans multiple servers and this guarantees
          safety of funds and 100% uptime.
        </p>
      </Card>
      <Card className="bg-blue w-[20rem] h-[20rem] flex flex-col justify-center items-center">
        <Image
          src="https://res.cloudinary.com/freecodingboy/image/upload/v1663673858/Detfrix/Home/bx_bx-globe-alt_rmytyi.svg"
          alt=""
        />
        <Heading level={2} className="text-white font-bold">
          Ease of Investment Deposit
        </Heading>
        <p className="text-white text-center p-3">
          This feature allows smooth and easy processing of investment funds
          into clients' account. Our platform supports multiple media for
          investment funding.
        </p>
      </Card>
      <Card
        variant="bg-white"
        className="w-[20rem] h-[20rem] flex flex-col justify-center items-center"
      >
        <Image
          src="https://res.cloudinary.com/freecodingboy/image/upload/v1663673856/Detfrix/Home/ant-design_cloud-upload-outlined_poiplz.svg"
          alt=""
        />
        <Heading level={2} className="text-black font-bold">
          Customer Insights
        </Heading>
        <p className="text-black text-center p-3">
          In today's economy, we are aware of uncertainties, hence, we provide
          fastest trading cash-outs and withdrawal exit options! No delays in
          order executions and lags in user interface.
        </p>
      </Card>
    </div>
  );
};
