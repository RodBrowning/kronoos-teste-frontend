import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

import CountUp from "react-countup";
import { LucideProps } from "lucide-react";

type props = {
  iconComponent?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  number: number;
  delay: number;
};
export const CountCard: React.FC<props> = (props) => {
  return (
    <Card className="min-w-[200px] hover:bg-secondary/90 flex-1 flex flex-col justify-center py-8">
      {props.iconComponent && (
        <CardHeader className="pt-0">
          <props.iconComponent className="h-12 w-12 m-auto" />
        </CardHeader>
      )}
      <CardContent>
        <p className="text-4xl text-center font-thin w-full">
          <CountUp
            duration={2.75}
            separator="."
            start={0}
            end={props.number}
            delay={props.delay}
          />
          <span>+</span>
        </p>
      </CardContent>
      <CardFooter
        className="justify-center font-bold text-2xl pb-0"
      >
        <p>{props.text}</p>
      </CardFooter>
    </Card>
  );
};
