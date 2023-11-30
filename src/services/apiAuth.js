import supabase from "./supabase";

export async function signup({ name, email, password }) {
  const { data, error1 } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error1) throw new Error(error1.message);

  const { data: userData, error: error2 } = await supabase
    .from("customers")
    .insert([{ name, email, auth: data.user.id }])
    .select();

  if (error2) throw new Error(error2.message);

  return userData;
}

export async function login({ email, password }) {
  const { data, error1 } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error1) throw new Error(error1.message);

  const { data: userData, error: error2 } = await supabase
    .from("customers")
    .eq("auth", data.user.id)
    .select();

  if (error2) throw new Error(error2.message);

  return userData;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password OR fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
