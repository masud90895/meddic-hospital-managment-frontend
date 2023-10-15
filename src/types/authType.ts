export type IUserCreate = {
  firstName: string;
  lastName: string;
  profileImage: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN" | "SUPER_ADMIN" | "DOCTOR";
  qualification: string;
  specializationId: string;
};
