import moment from "moment";
import ErrorPage from "next/error";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import markdownStyles from "../../styles/markdown-styles.module.css";
import Post from "../../types/post";

export default function Project({ post }: { post: Post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={post.title}>
      {/* // Todo: add loader fallback */}
      <article className="mb-32">
        {/* // Todo: add meta tag */}
        <div className="flex justify-between items-center pb-6">
          <h1 className="text-4xl">{post.title}</h1>
          <h2>{moment(new Date(post.date)).format("MMM YYYY")}</h2>
        </div>
        {post.ogImage?.url && (
          <div className="h-[600px] relative">
            <Image
              src={post.ogImage.url}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
              blurDataURL={post.ogImage.url}
            />
          </div>
        )}
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </article>
    </Layout>
  );
}

interface Params {
  params: {
    slug: string;
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
};
