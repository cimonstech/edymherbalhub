import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BusinessUnitCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
  impact?: string;
}

export function BusinessUnitCard({ id, title, description, image, features, impact }: BusinessUnitCardProps) {
  return (
    <Card className="h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F6131]/60 via-transparent to-transparent"></div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {features && features.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Key Features:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {impact && (
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm">
              <span className="font-medium">Impact: </span>
              <span className="text-muted-foreground">{impact}</span>
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/business-units/${id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

