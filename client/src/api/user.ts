import axios from 'axios';  // Ensure axios is imported correctlyimport { kinde } from 'kinde-sdk';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'http://ec2-3-25-94-38.ap-southeast-2.compute.amazonaws.com:3000',
});

export const handleSignUp = async () => {
  const { getToken } = useKindeAuth();
  try {
    let token;
    if (getToken) {
      token = await getToken();
    }
    // Send token to backend
    await api.post('/api/auth', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Handle the response
    // alert(`user added to database!`);
  } catch (error) {
    // Handle errors
    // alert('error during signing up');
    console.error('Error during signing up:', error);
  }
}