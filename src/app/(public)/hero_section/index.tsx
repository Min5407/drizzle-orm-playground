import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <h1 className="text-6xl mb-5">
        Customize Your <b className="text-primary">notes</b> with us!
      </h1>
      <p className="text-primary-foreground/70 text-3xl mb-10">
        Write, plan and organize your notes
      </p>

      <Button asChild>
        <Link href="/login">Get started</Link>
      </Button>
    </section>
  );
};

export default HeroSection;
