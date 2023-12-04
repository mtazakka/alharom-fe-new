import queryToString from 'utils/queryToString';

const Fetch = async (method, endpoint, options) => {
  const { body, credentials = true, toLogin = true } = options || {};
  const option = { method, headers: {} };
  if (method !== 'GET') {
    option.body = JSON.stringify(body);
    option.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }

  if (credentials) {
    const token = localStorage.getItem('token');
    console.log(token, 'test')
    if (token) {
      option.headers.Authorization = token;
    } else {
      throw new Error('No authorization token found');
    }
  }

  const res = await fetch(`${process.env.REACT_APP_URL}${endpoint}`, option);

  let resJson;
  try {
    resJson = await res.json();
  } catch (err) {
    throw new Error(`${res.status}, ${res.statusText}` || 'server error');
  }

  if (res.status === 401) {
    if (toLogin) {
      setTimeout(() => {
        localStorage.removeItem('token');
        window.location.replace('/login');
      }, 1000);
    }
    throw new Error(resJson.errors);
  }
  if (res.status >= 200 && res.status < 300) {
    return resJson;
  }
  throw new Error(`${resJson.errors}` || 'server error');
};

export const getCurrentUser = () => Fetch('GET', `/api/users/current`);

export const getInvoiceSeq = () => Fetch('GET', `/api/transaction/income/invoiceseq`);
export const getCustomerOption = () => Fetch('GET', `/api/customer/option`);
export const getServiceOption = () => Fetch('GET', `/api/service/option`);
export const getServiceVariantOption = (query) => Fetch('GET', `/api/servicevariant/option?${queryToString(query)}`);
export const getServiceVariantDetailOption = (query) => Fetch('GET', `/api/servicevariantdetail/option?${queryToString(query)}`);
export const getServiceVariantDetailGroupOption = (query) => Fetch('GET', `/api/servicevariantdetailgroup/option?${queryToString(query)}`);
export const getServiceVariant = () => Fetch('GET', `/api/servicevariant`);

export const getTransactionIncomeMaster = () => Fetch('GET', `/api/transaction/income/master`);
export const getCustomerTransaction = () => Fetch('GET', `/api/transaction/customer`);
// export const getNodes = (query) =>
//   Fetch('GET', `/api/nodes?${queryToString(query)}`);
// export const getSchedules = (idMaster) =>
//   Fetch('GET', `/api/server-time/schedule/${idMaster}`);

// export const patchNode = (id, body) =>
//   Fetch('PATCH', `/api/nodes/${id}`, {
//     body,
//   });
// export const patchNodes = (id, body) =>
//   Fetch('PATCH', `/api/masters/${id}`, {
//     body,
//   });
// export const postLogin = (body) => {
//   console.log(body)
// }

export const postIncomeTransaction = (body) =>
  Fetch('POST', `/api/transaction/income`, {
    body
  });
export const postCustomerMaster = (body) =>
  Fetch('POST', `/api/customer/master`, {
    body
  });
export const postServiceVariantMaster = (body) =>
  Fetch('POST', `/api/servicevariant/master`, {
    body
  });
export const postLogin = (body) =>
  Fetch('POST', `/api/users/login`, {
    body,
    credentials: false,
    toLogin: false
  });
// export const postSchedule = (body) =>
//   Fetch('POST', `/api/server-time/schedule`, {
//     body,
//   });
