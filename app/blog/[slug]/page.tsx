import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/shared/Section";
import { blogPosts } from "@/data/blog";
import { Calendar, User } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.id === slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <PageHeader
        title={post.title}
        subtitle={post.category}
        description={post.excerpt}
      />
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </div>
          </div>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                This is a placeholder for the full blog post content. In a production environment,
                you would fetch the full content from a CMS or markdown file based on the post ID.
              </p>
              <p>
                The blog post with ID &quot;{post.id}&quot; would contain the full article content here,
                including detailed information about {post.title.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

