export enum ROLE {
  USER = "user",
  SUPER_USER = "super-user",
  ADMIN = "admin",
}

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  role: ROLE;
};

const defaultUser: User = {
  id: 1,
  firstName: "john",
  lastName: "kowalski",
  isAdmin: false,
  role: ROLE.USER,
};

const adminUser: User = {
  id: 2,
  firstName: "joe",
  lastName: "doe",
  isAdmin: false,
  role: ROLE.ADMIN, // isAdmin: true & role: ROLE.ADMIN
};
