import axios from 'axios';

export const fetchAdminProfile = async (id: string, token: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/admin/${id}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const updateAdminProfile = async (id: string, profile: any, token: string) => {
  const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/admin/${id}/profile`, profile, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchAdminNotifications = async (id: string, token: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/admin/${id}/notifications`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
