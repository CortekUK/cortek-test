import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InsightCardProps {
  title: string;
  summary: string;
  thumbnail_url: string;
  slug: string;
  published_date: string;
  author: string;
}

const InsightCard = ({
  title,
  summary,
  thumbnail_url,
  slug,
  published_date,
  author,
}: InsightCardProps) => {
  const formattedDate = new Date(published_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link to={`/insights/${slug}`}>
      <Card className="h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden group">
        <div className="aspect-[3/2] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-electric-blue/10">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
          <CardDescription className="text-xs text-muted-foreground">
            {formattedDate} • {author}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <p className="text-sm text-muted-foreground line-clamp-4 mb-4 min-h-[6rem]">
            {summary}
          </p>
          <Button variant="ghost" className="p-0 h-auto font-semibold text-primary group-hover:text-electric-blue transition-colors mt-auto">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default InsightCard;
