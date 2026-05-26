import { cn } from "@/lib/utils";

interface RichTextContentProps {
  content: string;
  className?: string;
}

const RichTextContent = ({ content, className }: RichTextContentProps) => {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        // Headings - white with extra spacing
        "prose-headings:font-sora prose-headings:font-bold prose-headings:text-white",
        "prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8",
        "prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6",
        "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4",
        // Paragraphs - light grey with good line height
        "prose-p:text-white/90 prose-p:leading-relaxed prose-p:mb-6",
        // Links - purple accent
        "prose-a:text-[hsl(var(--electric-blue))] prose-a:no-underline prose-a:font-medium hover:prose-a:text-[hsl(var(--primary))] prose-a:transition-colors",
        // Strong text
        "prose-strong:text-white prose-strong:font-semibold",
        // Lists
        "prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:text-white/90",
        "prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-white/90",
        "prose-li:mb-3 prose-li:text-white/90",
        // Blockquotes - purple accent border
        "prose-blockquote:border-l-4 prose-blockquote:border-[hsl(var(--primary))] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:text-white/80 prose-blockquote:bg-white/[0.03] prose-blockquote:py-4 prose-blockquote:rounded-r-lg",
        // Code
        "prose-code:bg-white/10 prose-code:text-[hsl(var(--electric-blue))] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono",
        "prose-pre:bg-white/[0.05] prose-pre:border prose-pre:border-white/10 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:text-white/90",
        // Images - full width with rounded corners
        "prose-img:rounded-xl prose-img:shadow-2xl prose-img:w-full prose-img:my-8",
        // Horizontal rules
        "prose-hr:border-white/10 prose-hr:my-12",
        className
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextContent;
