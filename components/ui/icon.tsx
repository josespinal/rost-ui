import * as React from "react";

import { cn } from "./utils";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function Icon({ icon: IconComponent, className, ...props }: IconProps) {
  return <IconComponent className={cn("rost-icon", className)} {...props} />;
}
