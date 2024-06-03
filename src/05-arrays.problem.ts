interface Post {
  id: number;
  title: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Post[];
}
