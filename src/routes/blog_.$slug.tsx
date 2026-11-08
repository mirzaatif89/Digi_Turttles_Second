import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PostCard } from "@/components/site/cards";
import { Reveal } from "@/components/site/motion";
import { PageHeader } from "@/components/site/PageHeader";
import { BLOG_POSTS, formatDate, getPost } from "@/data/blog";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Digi Turtles Blog` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Article unavailable | Digi Turtles" }, { name: "robots", content: "noindex" }],
  }),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <PageHeader crumb="Blog" eyebrow={post.category} title={post.title} description={post.excerpt} />
      <article className="section-ice py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-turquoise" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-turquoise" />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-turquoise" />{post.readTime}</span>
          </div>
          <Reveal>
            <img src={post.image} alt={post.title} width={900} height={675} className="mt-8 w-full rounded-3xl shadow-soft" />
          </Reveal>
          <div className="mt-12 space-y-8">
            {post.body.map((b, i) => (
              <Reveal key={i}>
                {b.heading && <h2 className="mb-3 text-2xl font-bold">{b.heading}</h2>}
                <p className="text-lg leading-relaxed text-foreground/80">{b.text}</p>
              </Reveal>
            ))}
          </div>
          <Button asChild variant="outlineCyan" className="mt-12 h-11 px-6">
            <Link to="/blog">
              <ArrowLeft /> Back to Blog
            </Link>
          </Button>
        </div>
        <div className="mx-auto mt-20 max-w-7xl px-6">
          <h2 className="text-2xl font-bold">Keep Reading</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
