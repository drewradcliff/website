import Image from "next/image";
import Layout from "../components/Layout";

interface Props {
  image: string;
}

export default function About({ image }: Props) {
  return (
    <Layout title="about">
      <h1 className="text-3xl">About</h1>
      <div className="rounded-full overflow-hidden h-64 w-64 relative my-10">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <p className="py-2">
        I work in Indianapolis as a React Developer. I studied engineering at
        Purdue University.
      </p>
      <p className="py-2 mb-8">
        Currently empoloyed at Blind Robot. In my day-to-day work I use frontend
        tools such as React, GraphQL, and MongoDB.
      </p>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/sirAMPR");
  const user = await res.json();

  return {
    props: { image: user.avatar_url },
  };
};
