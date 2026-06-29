import { getLocale, getTranslations } from "next-intl/server";
import React from "react";
import { Freebie, LocalizedString } from "../types";

const Card = async ({
  imgSrc,
  title,
  description,
  href,
  tags,
  author,
}: Freebie) => {
  const t = await getTranslations("freebies.card");

  const locale = (await getLocale()) as keyof LocalizedString;

  return (
    <div className="group relative flex flex-col bg-card overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
        <img
          src={imgSrc}
          alt={title[locale]}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col flex-grow p-5 space-y-4">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-accent/10 text-xs font-medium text-accent rounded-full"
              >
                {t(`tags.${tag}`)}
              </span>
            ))}
          </div>
        )}

        <div className="space-y-1.5">
          <h3 className="font-semibold text-lg leading-tight tracking-tight text-card-foreground group-hover:text-primary transition-colors">
            {title[locale]}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description[locale]}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          {author && (
            <span className="text-xs font-medium text-muted-foreground">
              {t("by")} {author?.name}
            </span>
          )}

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 text-sm font-medium transition-colors"
          >
            {t("view")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1.5 size-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
