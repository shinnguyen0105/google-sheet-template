import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function useInstagramPost(url) {
  const { data, error } = useSWR(
    `https://graph.facebook.com/v8.0/instagram_oembed?url=${url}&access_token=${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}|${process.env.NEXT_PUBLIC_FACEBOOK_APP_CLIENT_ACCESS_TOKEN}`,
    fetcher
  );
  return {
    post: data,
    isLoading: !error && !data,
    isError: error,
  };
}
