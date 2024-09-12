'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { fetchPosts } from '@/lib/redux/slices/posts/post.thunks';
import { Title } from '@mantine/core';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.posts);

  const fetchAllPosts = () => {
    return dispatch(fetchPosts());
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Title order={1}>Welcome Onboard!</Title>
        <h1 className="font-title text-h1">Welcome Onboard!</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(({ id, title }) => <li key={id}>{title}</li>)
        )}
      </div>
    </main>
  );
}
