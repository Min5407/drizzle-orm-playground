"use server";

import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { SignUpSchemaType } from "./type";

export const loginAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = createSupabaseServer();
  const { data } = await supabase.auth.signInWithPassword({ email, password });

  if (!data.user) return { error: "Invalid credentials" };

  redirect("/");
};

export const signUpAction = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const supabase = createSupabaseServer();

  const isUserExist =
    (await supabase.from("users").select("*").eq("email", email)).count || 0;

  if (!isUserExist) return { error: "User already exists" };

  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  });

  return response;
};
