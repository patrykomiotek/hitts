interface BasicUser {
  id: string;
  firstName: string;
  lastName: string;
}

interface BasicPost {
  id: string;
  title: string;
  body: string;
}

interface NewBasicUser extends BasicUser {
  // id: number;
  role: string;
}

type BasicUserType = {
  id: string;
  firstName: string;
  lastName: string;
};

type NewBasicUserType = BasicUserType & { id: number };
// const newBasicUser: NewBasicUserType = {
//   id: '567', /// type never
//   firstName: "a",
//   lastName: "b",
// };
