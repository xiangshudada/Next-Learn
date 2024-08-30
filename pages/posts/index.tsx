import Link from "next/link";

export default function Home(props: any) {
  let { posts } = props;
  return (
    <main>
      <h1>POST LIST</h1>
      <ul className="text-current">
        {posts.map((i: any) => (
          <li style={{ margin: 24 }}>
            <Link href={`/posts/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  let data = await fetch("https://dummyjson.com/posts").then((res) =>
    res.json()
  );
  return {
    props: {
      posts: data.posts || [],
    },
  };
}
