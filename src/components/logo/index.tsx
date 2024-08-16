import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });
const Logo = () => {
  return (
    <span
      className={cn(
        "p-2 border-b border-solid border-primary-foreground text-primary font-bold",
        font.className
      )}
    >
      Notes W Us
    </span>
  );
};

export default Logo;
