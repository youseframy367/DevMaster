"use client";

import AboutCrudPage from "../about/components/AboutCrudPage";

export default function DashboardArticlesPage() {
  return (
    <AboutCrudPage
      title="Articles"
      description="Create, update, and organize the articles displayed on the public website."
      endpoint="/articles"
      entityLabel="Article"
      searchPlaceholder="Search by title or description..."
      dateFilter
      sortBy="date"
      columns={[
        { key: "id", label: "ID" },
        {
          key: "image",
          label: "Image",
          render: (value, row) => value ? <img src={value} alt={row.title || "Article"} className="h-12 w-20 rounded-lg border border-white/10 object-cover" /> : <span className="text-gray-500">No image</span>,
        },
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
        { key: "date", label: "Date" },
      ]}
      fields={[
        { key: "image", label: "Image URL", type: "url", placeholder: "https://example.com/article-image.jpg" },
        { key: "title", label: "Title", placeholder: "Article title" },
        { key: "description", label: "Description", type: "textarea", placeholder: "Write the article description" },
        { key: "date", label: "Date", type: "date" },
      ]}
    />
  );
}
