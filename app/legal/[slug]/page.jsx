import { notFound } from "next/navigation";
import LegalPage from "../../components/LegalPage";
import cookiePolicy from "../../data/legal/cookie-policy.json";
import privacyPolicy from "../../data/legal/privacy-policy.json";
import termsOfService from "../../data/legal/terms-of-service.json";

const legalPages = {
  [privacyPolicy.slug]: privacyPolicy,
  [termsOfService.slug]: termsOfService,
  [cookiePolicy.slug]: cookiePolicy,
};

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = legalPages[slug];

  return content
    ? { title: `${content.title} | DevMaster`, description: content.intro }
    : { title: "DevMaster" };
}

export default async function LegalRoute({ params }) {
  const { slug } = await params;
  const content = legalPages[slug];

  if (!content) {
    notFound();
  }

  return <LegalPage content={content} />;
}
