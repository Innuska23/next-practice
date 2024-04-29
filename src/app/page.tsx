import { useState } from "react";
import { getAllArticles } from "./(server)/api";
import { ROUTING } from "./routing";
import { AppLink } from "./shared/component/app-link";
import { ArticlePreview } from "./ArticlePrewiew";

const ARTICLES_PER_PAGE = 10;

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {

  const allArticles = await getAllArticles();

  const page = Number.parseInt(searchParams['page']) || 1;

  const articles = allArticles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);

  const nextPageUrl = { search: new URLSearchParams({ page: (page + 1).toString() }).toString() }

  return (
    <>
      <h1>Test, page {page}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.name}>
            <ArticlePreview name={article.name} text={article.header} />
          </li>
        ))}
      </ul>
      <AppLink href={nextPageUrl}>Next</AppLink>
    </>
  );
}



