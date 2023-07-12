import Image from "next/legacy/image";
import Layout from "../components/Layout";

interface Props {
  image: string;
}

export default function About({ image }: Props) {
  return (
    <Layout title="About">
      <h1 className="text-3xl">About</h1>
      <div className="relative my-10 h-64 w-64 overflow-hidden rounded-full">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
        />
      </div>
      <p className="py-2">
        I am a Frontend Software Engineer living in Indianapolis. I studied
        engineering at Purdue University and Kenzie Academy.
      </p>
      <p className="mb-8 py-2">
        In my day-to-day work I use tools such as Next.js, GraphQL, and MongoDB.
      </p>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/users/drewradcliff");
  const user = await res.json();

  return {
    props: { image: user.avatar_url },
  };
};
