import React from "react";
import { cn } from "../lib/utils";

interface FullScreenContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const FullScreenContainer: React.FC<FullScreenContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        `fixed top-0 left-0 w-screen h-screen bg-pikachu`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FullScreenContainer;
