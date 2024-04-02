import axios from "axios";

export const loginRequest = async (reqBody) => {
  try {
    const response = await axios.post("/user-login", reqBody);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const OtpVerifyRequest = async (reqBody) => {
  try {
    const response = await axios.post("/verify-login", reqBody);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const getProductList = async (url, token) => {
  const option = token
    ? {
        headers: {
          token: token,
        },
      }
    : "";

  try {
    const response = await axios.get(url, option);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const addToCart = async (id, token) => {
  try {
    const response = await axios.get(`/create-cart/${id}`, {
      headers: {
        token: token,
      },
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};

export const removeCart = async (id, token) => {
  try {
    const response = await axios.get(`/remove-cart/${id}`, {
      headers: {
        token: token,
      },
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      data: error.response.data,
      status: error.response.status,
    };
  }
};
