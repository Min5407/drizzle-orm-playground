import Logo from "@/components/logo";
import { NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";
import SignUpForm from "./form";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
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

      <SignUpForm />
      <p className="mt-5">
        Already have an account ?
        <Button asChild variant="link" className="text-primary/80">
          <Link href="/login">LOGIN</Link>
        </Button>
      </p>
    </div>
  );
};

export default SignUpPage;
