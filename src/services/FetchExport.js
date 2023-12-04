import baseUrl from '@/config/server';
import { queryToString } from '@/utils/helper';

const FetchExport = async (method, endpoint, filename) => {
  const option = { method, headers: {} };
  option.headers = {
    Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  };

  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    option.headers.Authorization = storedToken;
  } else {
    throw new Error('No authorization token found');
  }

  const res = await fetch(`${baseUrl}${endpoint}`, option);

  if (res.status === 401) {
    setTimeout(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.replace('/login');
    }, 1000);
    throw new Error('Unauthorized');
  }

  if (res.status >= 200 && res.status < 300) {
    const blob = await res.blob();

    // Create a blob URL and initiate a download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.xlsx`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);

    return true; // Indicates successful download
  } else {
    const errorBlob = await res.blob();
    const errorText = await new Response(errorBlob).text();
    throw new Error(`Server Error: ${res.status}, ${res.statusText}, ${errorText}`);
  }
};

export const getIntervalTableExcel = (params) =>
  FetchExport('GET', `/api/trayek/interval/excel?${queryToString(params)}`, `Interval ${params.startDate} - ${params.endDate}`);
export const getTrayekTableSummaryExcel = (params) =>
  FetchExport('GET', `/api/trayek/summary/excel?${queryToString(params)}`, `Summary ${params.startDate} - ${params.endDate}`);
export const getTrayekExcel = (params) =>
  FetchExport('GET', `/api/trayek/excel?${queryToString(params)}`, `Trayek ${params.startDate} - ${params.endDate}`);
