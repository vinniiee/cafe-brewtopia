import supabase from "./supabase";

export const signup = async ({ name, email, password }) => {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error("Could not register new user!");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export const login = async ({ email, password }) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error("Could not authenticate user!");
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
