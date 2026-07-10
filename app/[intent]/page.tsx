import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackedInternalLink } from "@/components/tracked-internal-link";
import { getLongTailPage, longTailPages } from "@/data/long-tail-pages";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

type IntentPageProps = {
  params: Promise<{ intent: string }>;
};

export function generateStaticParams() {
  return longTailPages.map((page) => ({ intent: page.slug }));
}

export async function generateMetadata({ params }: IntentPageProps): Promise<Metadata> {
  const { intent } = await params;
  const page = getLongTailPage(intent);

  if (!page) {
    return {};
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${page.slug}`,
    ogType: "article",
  });
}

function buildJsonLd(page: NonNullable<ReturnType<typeof getLongTailPage>>) {
  const url = `${siteConfig.baseUrl}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.title,
        headline: page.h1,
        description: page.description,
        url,
        dateModified: siteConfig.lastUpdatedISO,
        isPartOf: {
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.baseUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.h1,
            item: url,
          },
        ],
      },
    ],
  };
}

export default async function LongTailIntentPage({ params }: IntentPageProps) {
  const { intent } = await params;
  const page = getLongTailPage(intent);

  if (!page) {
    notFound();
  }

  const relatedPages = longTailPages.filter((item) => item.slug !== page.slug).slice(0, 3);

  return (
    <>
      <section className="bg-[#fff8ef]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b3471b]/80">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-[#1f140c]">{page.h1}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#1f140c]/80">{page.description}</p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.4fr,0.8fr]">
            <article className="rounded-[32px] border border-[#1f140c]/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">Fast answer</p>
              <p className="mt-3 text-lg leading-8 text-[#1f140c]">{page.quickAnswer}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <TrackedInternalLink
                  href={page.primaryCta.href}
                  eventName="long_tail_cta_click"
                  page={page.slug}
                  location="fast_answer_primary"
                  label={page.primaryCta.label}
                  className="rounded-full bg-[#b3471b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b3471b]/25"
                >
                  {page.primaryCta.label}
                </TrackedInternalLink>
                <TrackedInternalLink
                  href={page.secondaryCta.href}
                  eventName="dead_click_rescue_click"
                  page={page.slug}
                  location="fast_answer_secondary"
                  label={page.secondaryCta.label}
                  className="rounded-full border border-[#1f140c]/15 px-5 py-3 text-sm font-semibold text-[#1f140c]"
                >
                  {page.secondaryCta.label}
                </TrackedInternalLink>
              </div>
            </article>

            <aside className="rounded-[32px] border border-[#1f140c]/10 bg-[#fff2e0] p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">Checklist</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#1f140c]/85">
                {page.checklist.map((item) => (
                  <li key={item} className="rounded-2xl border border-[#1f140c]/10 bg-white/80 p-3">
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mt-12 space-y-6">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-[#1f140c]">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-[#1f140c]/85">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">{page.h1.replace(/\.$/, "")} FAQ</h2>
            <div className="mt-5 grid gap-4">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl bg-[#fff8ef] p-4 text-sm leading-7 text-[#1f140c]/85">
                  <h3 className="text-base font-semibold text-[#1f140c]">{faq.question}</h3>
                  <p className="mt-2">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-[#b3471b]/25 bg-[#fff2e0] p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b3471b]/80">Return to game</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#1f140c]">Ready to test the answer in the iframe?</h2>
              <p className="mt-2 text-sm leading-6 text-[#1f140c]/80">
                Go back to the play panel after reading this answer. This recovery path is tracked separately from browsing links so the next CRO review can see whether long-tail visitors return to play.
              </p>
            </div>
            <TrackedInternalLink
              href="/#play"
              eventName="return_to_game_click"
              page={page.slug}
              location="long_tail_return_panel"
              label="Return to Cowboy Safari iframe"
              className="shrink-0 rounded-full bg-[#b3471b] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#b3471b]/25"
            >
              Return to game →
            </TrackedInternalLink>
          </div>

          <div className="mt-10 rounded-3xl border border-[#1f140c]/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1f140c]">More Cowboy Safari answer pages</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {relatedPages.map((related) => (
                <Link key={related.slug} href={`/${related.slug}`} className="rounded-2xl border border-[#1f140c]/10 bg-[#fff8ef] p-4 text-sm font-semibold text-[#1f140c]">
                  {related.h1.replace(/\.$/, "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <script id={`intent-${page.slug}-structured-data`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page)) }} />
    </>
  );
}
