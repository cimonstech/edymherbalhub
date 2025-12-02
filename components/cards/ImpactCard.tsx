import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ImpactCardProps {
  title: string;
  value: string;
  description: string;
  breakdown?: string[];
}

export function ImpactCard({ title, value, description, breakdown }: ImpactCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-[#0F6131]">{value}</CardTitle>
        <CardDescription className="text-base font-medium">{title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {breakdown && breakdown.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Breakdown:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {breakdown.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

