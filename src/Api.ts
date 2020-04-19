import user from 'mocks/user.json';
import jobs from 'mocks/user.json';
export const getInitialData = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        users: user,
        jobs,
      });
    }, 800);
  });
};
