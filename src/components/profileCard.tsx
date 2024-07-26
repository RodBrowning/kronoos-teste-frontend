import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

const platforms: {
  [key in
    | "linkedin"
    | "twitch"
    | "twitter"
    | "facebook"
    | "instagram"]: JSX.Element;
} = {
  linkedin: <Linkedin className="h-4 w-4 m-0" />,
  twitch: <Twitch className="h-4 w-4 m-0" />,
  twitter: <Twitter className="h-4 w-4 m-0" />,
  facebook: <Facebook className="h-4 w-4 m-0" />,
  instagram: <Instagram className="h-4 w-4 m-0" />,
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
            <AvatarImage src={imgURL} alt="@shadcn" />
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
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <a href={media.link} target="_blank" rel="noopener noreferrer">
                  {platforms[media.platform]}
                </a>
              </Button>
            ))}
        </CardFooter>
      </div>
    </Card>
  );
};
