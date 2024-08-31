import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

// eslint-disable-next-line import/prefer-default-export
export const getAllQAPosts = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/qna`, {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllMyQAPosts = async (userId, targetUserId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/qna`, {
      headers: { userId }, // userId를 헤더로 전달
      params: { targetUserId }, // targetUserId를 쿼리 파라미터로 전달
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllFollowQAPosts = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/qna/following`, {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllOXPosts = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/ox`, {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllMyOXPosts = async (userId, targetUserId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/ox`, {
      headers: { userId },
      params: { targetUserId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllFollowOXPosts = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/ox/following`, {
      headers: { userId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const createOx = async (formData, userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/api/ox`, formData, {
      headers: {
        userId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// eslint-disable-next-line import/prefer-default-export
export const createQnA = async (formData, userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${BASE_URL}/api/qna`, formData, {
      headers: {
        userId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findUsers = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`${BASE_URL}/api/search`, {
      headers: {
        userId,
      },
    });
    return response.data.userList;
  } catch (error) {
    throw error;
  }
};

export const followUser = async (userId, follow) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      `${BASE_URL}/api/follow/${follow}`,
      {},
      {
        headers: {
          userId,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
