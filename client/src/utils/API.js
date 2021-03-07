import axios from "axios";

// This code is meant to serve as a mock fetch from an API.
export const fakeGetUsers = new Promise(function(resolve) {
    setTimeout(() => {
      resolve(
          [{name:"user1"},{name:"user2"}]
      );
    }, 1000);
  });

export function getUsers() {
  return axios.get("/api/users/");
}
  