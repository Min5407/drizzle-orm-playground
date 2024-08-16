"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import loginAction from "./action";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData(e.currentTarget);
      const email = String(formData.get("email"));
      const password = String(formData.get("password"));

      const { error } = await loginAction({ email, password });
      console.log("##", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="mt-10 grid gap-7" onSubmit={handleLogin}>
      <div className="grid gap-4">
        <Label htmlFor="email">Email Address</Label>
        <Input className="border-white" name="email" id="email" />
      </div>
      <div className="grid gap-4">
        <Label htmlFor="password">Password</Label>
        <Input className="border-white" name="password" id="password" />
      </div>
      <Button>
        {isLoading ? (
          <Loader2 className="mr-2 animate-spin" size={20} />
        ) : (
          "Log In"
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
