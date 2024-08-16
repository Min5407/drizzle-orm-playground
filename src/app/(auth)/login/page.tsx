import Logo from "@/components/logo";
import { NotebookPen } from "lucide-react";
import Link from "next/link";
import LoginForm from "./form";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen w-1/2 mx-auto">
      <h1>
        <Link
          href="/"
          className="flex gap-3 items-center text-2xl justify-center"
        >
          <NotebookPen size={30} className="fill-primary" />
          <Logo />
        </Link>
      </h1>

      <LoginForm />
      <p className="mt-5">
        Don&apos;t have an account ?
        <Button asChild variant="link" className="text-primary/80">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </p>
    </div>
  );
};

export default LoginPage;
