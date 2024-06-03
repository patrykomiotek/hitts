import { type User } from "./04-create-type.problem";

// discriminated union
// client -> request -> server -> response

type UserResponse =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: User[];
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

// fetch -> response data as User
let userResponse: UserResponse = {
  data: undefined,
  isLoading: true,
  isError: false,
};

fetch("/example.com/api/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data: User[]) => {
    userResponse = {
      data,
      isLoading: false,
      isError: false,
    };
    // userResponse.data = data;
    // userResponse.isLoading = false;
    // userResponse.isError = false;
  })
  .catch(() => {
    userResponse = {
      data: undefined,
      isLoading: false,
      isError: true,
    };
    // userResponse.data = [];
    // userResponse.isError = true;
  });
