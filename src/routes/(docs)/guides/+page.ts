import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const guides = await response.json();
  if (response.ok) {
    console.log(guides);

    return { guides };
  }
  return error(404, 'Not found');
}
