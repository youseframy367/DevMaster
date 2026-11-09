"use client";

import AboutCrudPage from "../about/components/AboutCrudPage";

const fallbackImage = "/icon/logoWhite.svg";

function CommentImage({ value, name, large = false }) {
  return value ? (
    <img
      src={value}
      alt={name || "Comment author"}
      onError={(event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallbackImage;
      }}
      className={`${large ? "h-20 w-20" : "h-12 w-12"} rounded-full border border-white/10 bg-black/30 object-cover`}
    />
  ) : (
    <img
      src={fallbackImage}
      alt="Default author avatar"
      className={`${large ? "h-20 w-20" : "h-12 w-12"} rounded-full border border-white/10 bg-black/30 object-contain p-2`}
    />
  );
}

export default function DashboardCommentsPage() {
  return (
    <AboutCrudPage
      title="Comments"
      description="Manage the testimonials and comments displayed in the public About section."
      endpoint="/comments"
      entityLabel="Comment"
      addLabel="Add Comment"
      searchPlaceholder="Search by name, job, or comment..."
      columns={[
        { key: "id", label: "ID" },
        {
          key: "image",
          label: "Image",
          render: (value, row) => <CommentImage value={value} name={row.name} />,
          renderView: (value, row) => <CommentImage value={value} name={row.name} large />,
        },
        { key: "name", label: "Name" },
        { key: "job", label: "Job" },
        { key: "description", label: "Description" },
      ]}
      fields={[
        { key: "image", label: "Image URL", type: "url", required: false, placeholder: "https://example.com/avatar.jpg" },
        { key: "name", label: "Name", placeholder: "Client name" },
        { key: "job", label: "Job", placeholder: "Job title" },
        { key: "description", label: "Description", type: "textarea", placeholder: "Write the comment" },
      ]}
    />
  );
}
