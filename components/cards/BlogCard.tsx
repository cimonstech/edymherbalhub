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
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-2 gap-2">
          <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded flex-shrink-0">
            {category}
          </span>
          {featured && (
            <span className="px-2 py-1 text-xs font-medium bg-[#FFCD06]/20 text-[#0F6131] rounded border border-[#FFCD06]/30 flex-shrink-0">
              Featured
            </span>
          )}
        </div>
        <CardTitle className="text-lg sm:text-xl break-words">{title}</CardTitle>
        <CardDescription className="mt-2 text-xs sm:text-sm">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="flex items-center text-xs sm:text-sm text-muted-foreground flex-wrap">
          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{formattedDate}</span>
          <span className="mx-1 hidden sm:inline">•</span>
          <span className="truncate">{author}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button asChild variant="outline" className="w-full min-h-[44px] text-sm sm:text-base">
          <Link href={`/blog/${id}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

