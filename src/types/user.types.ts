interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  provider: "firebase" | "google";
}

export default User;
