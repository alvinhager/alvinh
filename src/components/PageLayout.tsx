import React from "react";
import { cn } from "../lib/utils";

interface PageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn(`p-4`, className)} {...rest}>
      {children}
    </div>
  );
};

export default PageLayout;
