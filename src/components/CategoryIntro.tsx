import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CategoryIntroProps {
  imageUrl: string;
  imageAlt: string;
  content: string;
  heading?: string;
}

const CategoryIntro = ({
  imageUrl,
  imageAlt,
  content,
  heading = "About This Collection",
}: CategoryIntroProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract first sentence for mobile preview
  const introPreview = content.split(/[.!?]/)[0] + (content.match(/[.!?]/) ? "." : "");

  return (
    <section aria-labelledby="category-intro">
      <div className="mx-auto container px-6 py-8 sm:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-4 sm:gap-5">
            <h2
              id="category-intro"
              className="flex items-center gap-3 text-2xl font-semibold uppercase tracking-[0.14em] text-gray-900"
            >
              <span
                className="block h-1.5 w-8 rounded-full bg-textcolor"
                aria-hidden="true"
              />
              {heading}
            </h2>
            <div className="hidden w-full max-w-2xl aspect-4/3 overflow-hidden rounded-xl border border-gray-200 shadow-sm sm:block">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-800">
            <p className="hidden text-lg leading-relaxed lg:block font-switzer">
              {content}
            </p>

            <div className="lg:hidden">
              <p className="text-base leading-relaxed">
                {isExpanded ? content : introPreview}
              </p>
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-textcolor transition hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-textcolor"
              >
                {isExpanded ? "Read less" : "Read more"}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
              <p className="sr-only">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryIntro;

