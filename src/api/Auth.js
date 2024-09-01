import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line import/prefer-default-export
export const login = async (formData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUp = async (formData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/signup`, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchId = async (formData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/searchId`,
      formData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (formData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/updatePassword`,
      formData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
