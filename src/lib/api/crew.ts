import axios from 'axios';

export const fetchCrewProfile = async (id: string, token: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/crew/${id}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchCrewNotifications = async (id: string, token: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/crew/${id}/notifications`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
