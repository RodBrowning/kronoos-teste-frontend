import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter } from "./ui/card";
import React, { useEffect, useState } from "react";

import clsx from "clsx";

type props = {
  imgURL: string;
  online: boolean;
  border?: boolean;
  name: string;
  position: string;
};
export const ListingCard: React.FC<props> = ({
  name,
  position,
  imgURL,
  online,
  border = false,
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    online ? "green" : "gray"
  );
  const [includeBorder, setIncludeBorder] = useState<string>(
    border ? "" : "border-none"
  );

  useEffect(() => {
    setSelectedColor(online ? "green" : "gray");
  }, [online]);

  useEffect(() => {
    setIncludeBorder(border ? "" : "border-none");
    console.log(includeBorder);
  }, [border, includeBorder]);

  return (
    <Card
      style={{
        borderRadius: 0,
      }}
      className={clsx("p-4 w-full hover:bg-secondary", {
        [includeBorder]: includeBorder,
      })}
    >
      <div className="flex flex-row justify-between gap-5">
        <CardContent className="flex flex-row gap-3 items-center p-0">
          <Avatar>
            <AvatarImage src={imgURL} alt="Profile image" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-normal">{name}</p>
            <p className="text-xs text-gray-500">{position}</p>
          </div>
        </CardContent>
        <CardFooter className="p-0 flex items-end gap-1">
          <p
            className={clsx("text-xs", {
              [`text-${selectedColor}-500`]: selectedColor,
            })}
          >
            {online ? "online" : "offline"}
          </p>
          <div
            className={clsx("w-1.5 h-1.5 rounded-full mb-0.5", {
              [`bg-${selectedColor}-500`]: selectedColor,
            })}
          ></div>
          <div hidden className="bg-gray-500 text-gray-500 bg-green-500 text-green-500"></div>
        </CardFooter>
      </div>
    </Card>
  );
};
