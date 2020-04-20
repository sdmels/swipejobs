import user from 'mocks/user.json';
import jobs from 'mocks/jobs.json';

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

export const acceptJob = (doReject: boolean = false): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (doReject) {
        reject({
          success: false,
          message: 'Sorry, this role was no longer available',
          errorCode: 'FAIL-101',
        });
      }
      resolve({
        success: true,
      });
    }, 400);
  });
};

export const rejectJob = (doReject: boolean = false): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (doReject) {
        reject({
          success: false,
          message: 'Sorry, this role was no longer available',
          errorCode: 'FAIL-101',
        });
      }
      resolve({
        success: true,
      });
    }, 600);
  });
};
