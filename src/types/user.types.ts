interface User {
  email: string;
  firstName: string;
  lastName: string;
  provider: "firebase" | "google";
}

export default User;
