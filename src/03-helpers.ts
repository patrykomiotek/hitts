type UserDto = {
  id: string; //
  first: number;
  second: number;
  firstName: string;
  lastName?: string;
  email: string;
};

// Omit
type CreateUserDto = Omit<UserDto, "id">;
// Pick
type UpdateUserDto = Pick<UserDto, "first" | "lastName" | "email">;
// Required
type RequiredUpdateUserDto = Required<UpdateUserDto>;
// Partial
type OptionalUpdateUserDto = Partial<UpdateUserDto>;

type UserSecondOptional = UserDto &
  Partial<{
    second?: number;
  }>;
