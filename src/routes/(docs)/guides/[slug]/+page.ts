import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const guide = await response.json();
  console.log(response.ok);

  if (response.ok) {
    console.log(guide);

    return guide;
  }
  return error(404, 'Not found');
}
