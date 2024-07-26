import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "lucide-react";

import { Button } from "./ui/button";

type props = {
  link: string;
  platform: "linkedin" | "twitch" | "twitter" | "facebook" | "instagram";
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
export const SocialMedia: React.FC<props> = (props) => (
  <Button variant="outline" size="icon" className="rounded-full">
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {platforms[props.platform]}
    </a>
  </Button>
);
