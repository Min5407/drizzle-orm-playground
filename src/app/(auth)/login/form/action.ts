"use server";

import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function loginAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createSupabaseServer();
  const { data } = await supabase.auth.signInWithPassword({ email, password });

  if (!data.user) return { error: "Invalid credentials" };

  redirect("/");
}
