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
   // console.log('file in service: ', theFile)
   return service
      .post('/upload', theFiles)
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
      .post('/signup', {
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
   return service.get('/loggedin').then((response) => response.data);
}
export { loggedin };

function login(email, password) {
   return service.post('/login', { email, password }).then((response) => response.data);
}
export { login };

function logout() {
   return service.post('/logout', {}).then((response) => response.data);
}
export { logout };
