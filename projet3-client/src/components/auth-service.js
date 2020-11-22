import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true
});

export default service;

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
  availability_frequency
) {
  return service.post('/signup', {      
    username,
    userType,
    email,
    password,
    location,
    expertise,
    description,
    availability_start_date,
    availability_end_date,
    availability_frequency})
    .then(response => response.data)
}
export {signup}


function loggedin() {
  return service.get('/loggedin').then(response => response.data)
}
export {loggedin}

function login(email, password) {
  return service.post('/login', {email, password}).then(response => response.data)
}
export {login}

function logout() {
  return service.post('/logout', {}).then(response => response.data)
}
export {logout}

