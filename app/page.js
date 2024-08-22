import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}