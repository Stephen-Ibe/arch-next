import axios from 'axios';

export const GetAllPostsApi = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
  return res.data;
};
