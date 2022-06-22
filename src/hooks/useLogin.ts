export const UseLogin = async (creds: {
  username: string;
  password: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (creds.username === "teste" && creds.password === "teste") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
