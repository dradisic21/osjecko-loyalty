import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;


// Registracija
export async function registers(userData) {
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
  };

  const response = await axios
    .post(
      `${BASE_URL}/auth/register`,
      JSON.stringify(userData),
      requestOptions
    )
    .catch(function (error) {
      throw error;
    });
    
  return response;
}

// Login
export async function login(email, password) {
  try {
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await axios
      .post(
        `${BASE_URL}/auth/login`,
        JSON.stringify({ email: email, password: password }),
        requestOptions
      )
      .then((response) => {
        localStorage.setItem("userToken", response.data.token);
      });
    
    return response;
  } catch (error) {
    throw error;
  }
}

//google login

export async function googleLogin(tokenId) {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/social-login/google`,
      { code: tokenId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}


//update password

export async function updatePassword(oldPassword, newPassword, newPasswordConfirmation) {
  const userToken = localStorage.getItem("userToken");

  const data = {
    old_password: oldPassword,
    new_password: newPassword,
    new_password_confirmation: newPasswordConfirmation
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/update-password`,
      data,
      { headers: headers }
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

//Reset password init - send on email 

export async function resetPasswordInit(email) {
  const data = {
    email: email
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/reset-password-init`,
      data
    );
      
    return response;
  } catch (error) {
    throw error;
  }
}

//reset password from mail

export async function resetPassword(email, code, password, passwordConfirmation) {
  const data = {
    email: email,
    code: code,
    password: password,
    password_confirmation: passwordConfirmation
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/reset-password`,
      data
    );
      
    return response.data;
  } catch (error) {
    throw error;
  }
}


//logout

export async function logout() {
  const userToken = localStorage.getItem("userToken");
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    const response = await axios.post(
      `${BASE_URL}/auth/logout`,
      {},
      requestOptions
    );
    return response;
  } catch (error) {
    throw error;
  }
}


//update info users details

export async function updateDetails(name, surname, city, zip, address, phone, newsletter) {
  const userToken = localStorage.getItem("userToken");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`
  };

  const data = {
    name: name,
    surname: surname,
    city: city,
    zip: zip,
    address: address,
    phone: phone,
    newsletter: newsletter
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/update-details`,
      data,
      { headers: headers }
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
}



// Confirm Email
export async function confirmEmail(token) {
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/auth/confirm-email`,
      { token: token },
      requestOptions
    );
  
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Dohvacanje svih podataka od korisnika

export async function getUserData() {
  const userToken = localStorage.getItem("userToken");

  if (!userToken) {
    throw new Error("Korisnik nije pronađen");
  }

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/auth/get`,
      requestOptions
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
}

//dohvacanje nagrada

export async function getAllRewards() {
  const userToken = localStorage.getItem("userToken");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/prize/getAll`,
      requestOptions
    );
    
    return response.data.prizes;
  } catch (error) {
    throw error;
  }
}

//dohvacanje jednog proizvoda

export async function getOneReward(id) {
  const userToken = localStorage.getItem("userToken");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/prize/get/${id}`,
      requestOptions
    );
    
    return response.data.prize;
  } catch (error) {
    throw error;
  }
}


//slanje kodova
export async function sendCode(code) {
  const userToken = localStorage.getItem("userToken");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const response = await axios.post(
      `${BASE_URL}/code/validate`,
      { code: code },
      requestOptions
      
    );
 
    return response;
    
  } catch (error) {
    throw error;
  }
}

//dohvacanje kodova
export async function getAllCode(pageNumber) {
  const userToken = localStorage.getItem("userToken");

  const requestOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/code/history?page=${pageNumber}`,
      requestOptions
    );
  
    const { current_page, per_page, data, next_page_url } = response.data.codes;

    return {
      currentPage: current_page,
      perPage: per_page,
      codeData: data,
      lastPage: next_page_url
    };
    
  } catch (error) {
    throw error;
  }
}

// slanje nagrada

export async function sendOrder(orderData) {
  try {
    const userToken = localStorage.getItem("userToken");
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    const response = await axios.post(
      `${BASE_URL}/order/create`,
      orderData, 
      requestOptions
    );
    
    return response;
  } catch (error) {
    throw error;
  }
}

// dohvacanje zamijenjenih nagrada

export async function getAllOrders(pageNumber) {
  const userToken = localStorage.getItem("userToken");
  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    const response = await axios.get(
      `${BASE_URL}/order/getAll?page=${pageNumber}`,
      requestOptions
    );

    const { current_page, per_page, data, last_page } = response.data.orders;
    
    return {
      currentPage: current_page,
      perPage: per_page,
      codeData: data,
      lastPage: current_page === last_page
    };

  } catch (error) {
    throw error;
  }
}

// dohvacanje lokacija paketomata

export async function getAllLocation() {
  const userToken = localStorage.getItem("userToken");

  try {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    const response = await axios.post(
      `${BASE_URL}/order/get-parcel-lockers`,
      {},
      requestOptions,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}