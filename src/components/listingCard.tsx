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
  const [includeBorder, setIncludeBorder] = useState<string>(
    border ? "" : "border-none"
  );

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
          {online ? (
            <>
              <p className="text-xs text-green-500">online</p>
              <div className="w-1.5 h-1.5 rounded-full mb-0.5 bg-green-500"></div>
            </>
          ) : (
            <>
              <p className="text-xs text-gray-500">offline</p>
              <div className="w-1.5 h-1.5 rounded-full mb-0.5 bg-gray-500"></div>
            </>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
