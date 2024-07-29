import React, { useEffect, useState } from "react";

import { ListingCard } from "./listingCard";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

type props = {
  ListingCardPropsArray: {
    imgURL: string;
    online: boolean;
    border?: boolean;
    name: string;
    position: string;
  }[];
};
export const ListingCardWrapper: React.FC<props> = ({
  ListingCardPropsArray,
}) => {
  const [onlineUsers, setOnlineUsers] = useState<typeof ListingCardPropsArray>(
    []
  );
  const [offlineUsers, setOfflineUsers] = useState<
    typeof ListingCardPropsArray
  >([]);
  useEffect(() => {
    setOnlineUsers(
      ListingCardPropsArray.filter((cardProps) => cardProps.online)
    );
    setOfflineUsers(
      ListingCardPropsArray.filter((cardProps) => !cardProps.online)
    );
  }, [ListingCardPropsArray]);

  return (
    <div className="border rounded-md w-[300px]">
      <h3 className="p-6 pb-0 mb-4 text-base font-medium leading-none">Team</h3>
      <Separator className="mt-5 mb-2" />
      <ScrollArea className="h-72 ">
        {onlineUsers.map((user) => (
          <div key={user.name}>
            <ListingCard
              imgURL={user.imgURL}
              online={user.online}
              border={user.border}
              name={user.name}
              position={user.position}
            />
          </div>
        ))}
        <Separator className="my-2" />
        {offlineUsers.map((user) => (
          <div key={user.name}>
            <ListingCard
              imgURL={user.imgURL}
              online={user.online}
              border={user.border}
              name={user.name}
              position={user.position}
            />
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
