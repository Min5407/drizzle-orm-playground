"use client";

import { z } from "zod";
import { emailSchema, passwordSchema } from "@/lib/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { SignUpSchemaType, signUpSchema } from "@/actions/auth/type";

const SignUpForm = () => {
  const form = useForm<SignUpSchemaType>({
    mode: "onChange",
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: "", confirmPassword: "", password: "" },
  });

  const handleSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log("##", data);
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        className="mt-10 grid gap-7"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid gap-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input placeholder="email" id="email" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid gap-4">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={isLoading}
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="grid gap-4">
                  <Label htmlFor="password">Confirm Password</Label>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    id="password"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 animate-spin" size={20} />
          ) : (
            "Sign In"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
