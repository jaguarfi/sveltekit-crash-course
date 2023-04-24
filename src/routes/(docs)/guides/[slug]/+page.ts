import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const guide = await response.json();

  if (!response.ok) {
    throw error(404, {
      message: 'Not found'
    });
  }
  return guide;
}
