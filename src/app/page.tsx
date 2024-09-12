'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { fetchPosts } from '@/lib/redux/slices/posts/post.thunks';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.posts);

  const fetchAllPosts = async () => {
    try {
      await dispatch(fetchPosts()).unwrap();
    } catch (error: any) {
      toast.error(error?.message);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
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
