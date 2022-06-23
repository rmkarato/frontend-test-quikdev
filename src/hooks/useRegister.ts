export const UseRegister = async (creds: {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        creds.name === "teste" &&
        creds.username === "teste" &&
        creds.password === "teste" &&
        creds.confirmPassword === "teste"
      ) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
