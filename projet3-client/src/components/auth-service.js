import axios from 'axios';

const service = axios.create({
   baseURL: `${process.env.REACT_APP_APIURL || ''}`,
   withCredentials: true,
});

const errorHandler = (err) => {
   // console.error(err);
   throw err;
};

export default service;

function handleUpload(theFiles) {
   return service
      .post('/api/upload', theFiles)
      .then((res) => res.data)
      .catch(errorHandler);
}
export { handleUpload };

function signup(
   username,
   userType,
   email,
   password,
   location,
   expertise,
   description,
   availability_start_date,
   availability_end_date,
   availability_frequency,
   cause,
   profilePic,
   logo
) {
   return service
      .post('/api/signup', {
         username,
         userType,
         email,
         password,
         location,
         expertise,
         description,
         availability_start_date,
         availability_end_date,
         availability_frequency,
         cause,
         profilePic,
         logo,
      })
      .then((response) => response.data);
}
export { signup };

function loggedin() {
   return service.get('/api/loggedin').then((response) => response.data);
}
export { loggedin };

function login(email, password) {
   return service.post('/api/login', { email, password }).then((response) => response.data);
}
export { login };

function logout() {
   return service.post('/api/logout', {}).then((response) => response.data);
}
export { logout };
