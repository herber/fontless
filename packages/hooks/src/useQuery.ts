import { useRouter } from 'next/router';

export let useQuery = (name: string) => {
  let { query } = useRouter();
  let data = query[name];
  let value = Array.isArray(data) ? data[0] : data;

  if (!value && typeof window != 'undefined') {
    value = new URLSearchParams(location.search).get(name) || undefined;
  }

  return value;
};
