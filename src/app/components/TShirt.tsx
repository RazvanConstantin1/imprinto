import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TShirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const TShirt = ({ imgSrc, dark = false, className, ...props }: TShirtProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={dark ? "/dark-shirt.png" : "/t-shirt.png"}
        alt="T-shirt image"
        className="pointer-events-none select-none mx-auto"
      />

      <div className="absolute z-50 inset-0 h-[250px] w-full top-24  ">
        <img
          src={imgSrc}
          alt="overlaying t-shirt image"
          className="object-cover h-full mx-auto rounded-sm"
        />
      </div>
    </div>
  );
};

export default TShirt;
