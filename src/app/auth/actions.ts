"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function safeNext(value: FormDataEntryValue | null) {
  const next = typeof value === "string" ? value : "/dashboard";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
}

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const next = safeNext(formData.get("next"));
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect(`/login?error=${encodeURIComponent(error.message)}`);
  redirect(next);
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const fullName = String(formData.get("fullName") || "").trim();
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") || headerStore.get("host");
  const protocol = headerStore.get("x-forwarded-proto") || "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const { error } = await supabase.auth.signUp({
    email, password,
    options: { data: { full_name: fullName }, emailRedirectTo: `${origin}/auth/confirm?next=/dashboard` },
  });
  if (error) redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  redirect("/signup?message=Check%20your%20email%20to%20confirm%20your%20account.");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

export async function createPortfolio(formData: FormData) {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) redirect("/login");
  const title = String(formData.get("title") || "").trim();
  const profession = String(formData.get("profession") || "Developer");
  const generationMode = String(formData.get("generationMode") || "guided");
  const designStyle = String(formData.get("designStyle") || "Premium minimal");
  const prompt = String(formData.get("prompt") || "").trim();
  if (!title) redirect("/create?error=Please%20enter%20a%20portfolio%20name.");
  const { data, error } = await supabase.from("portfolios").insert({
    user_id: user.id, title, profession, generation_mode: generationMode, design_style: designStyle, prompt, status: "draft",
  }).select("id").single();
  if (error) redirect(`/create?error=${encodeURIComponent(error.message)}`);
  redirect(`/dashboard?created=${encodeURIComponent(data.id)}`);
}

export async function deletePortfolio(formData: FormData) {
  const supabase = await createClient();
  const id = String(formData.get("id") || "");
  await supabase.from("portfolios").delete().eq("id", id);
  redirect("/dashboard?deleted=1");
}
