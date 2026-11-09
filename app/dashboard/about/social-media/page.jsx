import AboutCrudPage from "../components/AboutCrudPage";

export default function SocialMediaPage() {
  return (
    <AboutCrudPage
      title="Social Media"
      description="Manage the social media profiles shown across the website footer and About content."
      endpoint="/about/social-media"
      searchPlaceholder="Search by title or link..."
      filter={{ key: "title", label: "Platforms" }}
      columns={[
        { key: "id", label: "ID" },
        { key: "title", label: "Title" },
        { key: "link", label: "Link" },
      ]}
      fields={[
        { key: "title", label: "Title", placeholder: "Instagram" },
        { key: "link", label: "Link", type: "url", placeholder: "https://..." },
      ]}
    />
  );
}
