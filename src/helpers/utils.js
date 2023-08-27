import decode from "jwt-decode";
  
export const isUserAdmin = (user) => {
  if (!user) return;

  return user?.role?.includes("admin");
};

export const getUserInitials = (user) => {
  if (!user) return "";

  return `${user.firstName.charAt(0).toUpperCase()}${user.lastName
    .charAt(0)
    .toUpperCase()}`;
};

export const checkTokenValidity = (token) => {
  const expirationDate = decode(token).exp;
  const isExpired = expirationDate * 1000 < new Date().getTime();
  return isExpired;
};