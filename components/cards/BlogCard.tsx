import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  featured?: boolean;
}

export function BlogCard({ id, title, excerpt, date, author, category, featured }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? "border-primary" : ""}`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
            {category}
          </span>
          {featured && (
            <span className="px-2 py-1 text-xs font-medium bg-[#FFCD06]/20 text-[#0F6131] rounded border border-[#FFCD06]/30">
              Featured
            </span>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="mt-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          {formattedDate} • {author}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/blog/${id}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

