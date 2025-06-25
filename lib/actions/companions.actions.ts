'use server';
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const CreateCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth(); // Get the Clerk user ID
  const supabase = createSupabaseClient(); // Create Supabase client instance

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author }) 
    .select();

  if (error) {
    console.error("Error creating companion:", error);
    throw error;
  }

  return data[0];
};
