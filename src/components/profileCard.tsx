import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { SocialMedia } from "./socialMedia";

export type SocialMedias = {
  link: string;
  platform: "linkedin" | "twitch" | "twitter" | "facebook" | "instagram";
};

type props = {
  imgURL: string;
  title: string;
  position: string;
  description: string;
  socialMedias: SocialMedias[];
};

export const ProfileCard: React.FC<props> = ({
  imgURL,
  title,
  position,
  description,
  socialMedias,
}) => {
  const AvatarFallbackText = title.split(" ");

  return (
    <Card className="max-w-[290px] h-full flex justify-between flex-col">
      <div>
        <CardHeader className="text-center">
          <Avatar className="m-auto h-28 w-28 mb-3">
            <AvatarImage src={imgURL} alt="Profile image" />
            <AvatarFallback>
              {AvatarFallbackText[0][0] + AvatarFallbackText[1][0]}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-light">{title}</CardTitle>
          <CardDescription className="text-xs">{position}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 pb-0 font-extralight text-sm">
          <p>
            <q>{description}</q>
          </p>
        </CardContent>
      </div>
      <div>
        <div className="px-6 pt-8 pb-4 w-[100%]">
          <Separator />
        </div>
        <CardFooter className="gap-7 p-6 pt-0 gap-y-3 justify-center flex-wrap">
          {socialMedias.length &&
            socialMedias.map((media, index) => (
              <div key={index}>
                <SocialMedia link={media.link} platform={media.platform} />
              </div>
            ))}
        </CardFooter>
      </div>
    </Card>
  );
};
