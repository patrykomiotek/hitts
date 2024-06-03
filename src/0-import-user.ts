import { type User as UserType, ROLE } from "./04-create-type.problem";
import { type User as UserInterface } from "./05-arrays.problem";

const defaultUser: UserType = {
  id: 1,
  firstName: "john",
  lastName: "kowalski",
  isAdmin: false,
  role: ROLE.USER,
};

const adminUser: UserInterface = {
  id: 1,
  firstName: "John",
  lastName: "Doe",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "How I eat so much cheese",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};

type CreateUserDto = Omit<UserInterface, "id">;

// assume its type
// type AdminType = UserType & { isAdmin: true };

interface AdminInterface extends UserInterface {
  isAdmin: boolean;
}
