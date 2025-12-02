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
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {subtitle && (
              <p className="text-sm text-muted-foreground mb-1">{subtitle}</p>
            )}
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {featured && (
            <span className="px-2 py-1 text-xs font-medium bg-[#FFCD06]/20 text-[#0F6131] rounded border border-[#FFCD06]/30">
              Featured
            </span>
          )}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center">
            <span className="text-sm font-medium">Status: </span>
            <span className="ml-2 px-2 py-1 text-xs font-medium bg-[#8EBA3E]/20 text-[#0F6131] rounded border border-[#8EBA3E]/30">
              {status}
            </span>
          </div>
          {impact && (
            <div className="pt-2 border-t">
              <p className="text-sm font-medium mb-2">Impact:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(impact).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-muted-foreground capitalize">{key}: </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/projects/${id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

