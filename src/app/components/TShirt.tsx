import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TshirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  bigSize?: boolean;
}

const Tshirt = ({
  imgSrc,
  className,
  dark = false,
  bigSize,
  ...props
}: TshirtProps) => {
  return (
    <div
      className={
        (cn("relative pointer-events-none z-50 overflow-hidden"), className)
      }
      {...props}
    >
      <img
        src={dark ? "/dark-tshirt.png" : "/t-shirt.png"}
        className="pointer-events-none -z-10 select-none h-full w-full"
        alt="T-shirt image"
      />
      <div className="absolute z-50 inset-0 pl-2 flex flex-col items-center  justify-center">
        <img
          src={imgSrc}
          alt="overlaying T-shirt image"
          className={`${
            bigSize ? "h-[300px]" : "h-[150px]"
          } object-cover rounded-lg  shadow-2xl opacity-90`}
        />
      </div>
    </div>
  );
};

export default Tshirt;
