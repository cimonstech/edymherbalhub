import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  status: string;
  location: string;
  impact?: {
    jobs?: string;
    farmers?: string;
    revenue?: string;
    [key: string]: string | undefined;
  };
  featured?: boolean;
}

export function ProjectCard({ id, title, subtitle, description, status, location, impact, featured }: ProjectCardProps) {
  return (
    <Card className={`group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? "border-[#0F6131]" : ""}`}>
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            {subtitle && (
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">{subtitle}</p>
            )}
            <CardTitle className="text-lg sm:text-xl break-words">{title}</CardTitle>
          </div>
          {featured && (
            <span className="px-2 py-1 text-xs font-medium bg-[#FFCD06]/20 text-[#0F6131] rounded border border-[#FFCD06]/30 flex-shrink-0">
              Featured
            </span>
          )}
        </div>
        <CardDescription className="mt-2 text-xs sm:text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-xs sm:text-sm font-medium">Status: </span>
            <span className="px-2 py-1 text-xs font-medium bg-[#8EBA3E]/20 text-[#0F6131] rounded border border-[#8EBA3E]/30">
              {status}
            </span>
          </div>
          {impact && (
            <div className="pt-2 border-t">
              <p className="text-xs sm:text-sm font-medium mb-2">Impact:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {Object.entries(impact).map(([key, value]) => (
                  <div key={key} className="break-words">
                    <span className="text-muted-foreground capitalize">{key}: </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 sm:p-6 pt-0">
        <Button asChild variant="outline" className="w-full min-h-[44px] text-sm sm:text-base">
          <Link href={`/projects/${id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

