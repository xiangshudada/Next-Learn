import type { ReactElement } from "react";
export default function Home(props: any) {
  let { detail } = props;
  return (
    <main>
      <h1>{detail?.title}</h1>
      <p>{detail?.body}</p>
    </main>
  );
}

export async function getStaticPaths() {
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths: [{ params: { postid: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  let { params } = context;
  let { postid } = params;

  let data = await fetch(`https://dummyjson.com/posts/${postid}`).then((res) =>
    res.json()
  );
  return {
    props: {
      detail: data,
    },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>;
};
