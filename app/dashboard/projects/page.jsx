"use client";

import AboutCrudPage from "../about/components/AboutCrudPage";

const fallbackImage = "/icon/logoWhite.svg";

function ProjectImage({ value, title, large = false }) {
  const className = `${large ? "h-28 w-full rounded-xl" : "h-12 w-20 rounded-lg"} border border-white/10 bg-black/30 object-cover`;

  return value ? (
    <img
      src={value}
      alt={title || "Project"}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
        event.currentTarget.className = `${className} object-contain p-3`;
      }}
      className={className}
    />
  ) : (
    <img src={fallbackImage} alt="Default project" className={`${className} object-contain p-3`} />
  );
}

export default function DashboardProjectsPage() {
  return (
    <AboutCrudPage
      title="Projects"
      description="Manage the projects and products displayed on the public website."
      endpoint="/products"
      entityLabel="Project"
      addLabel="Add Project"
      searchPlaceholder="Search by title or description..."
      columns={[
        { key: "id", label: "ID" },
        {
          key: "image",
          label: "Image",
          render: (value, row) => <ProjectImage value={value} title={row.title} />,
          renderView: (value, row) => <ProjectImage value={value} title={row.title} large />,
        },
        { key: "title", label: "Title" },
        { key: "description", label: "Description" },
      ]}
      fields={[
        { key: "title", label: "Title", placeholder: "Project title" },
        { key: "image", label: "Image URL", type: "url", placeholder: "https://example.com/project-image.jpg" },
        { key: "description", label: "Description", type: "textarea", placeholder: "Write the project description" },
      ]}
    />
  );
}
