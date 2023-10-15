export type IUserCreate = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: "USER" | "ADMIN" | "SUPER_ADMIN" | "DOCTOR";
};
