import AboutCrudPage from "../components/AboutCrudPage";

export default function ExperiencePage() {
  return (
    <AboutCrudPage
      title="Experience"
      description="Manage the experience milestones displayed on the public About page."
      endpoint="/about/experience"
      searchPlaceholder="Search by year or description..."
      filter={{ key: "year", label: "Years" }}
      columns={[
        { key: "id", label: "ID" },
        { key: "year", label: "Year" },
        { key: "description", label: "Description" },
      ]}
      fields={[
        { key: "year", label: "Year", placeholder: "2025" },
        { key: "description", label: "Description", placeholder: "Describe this experience milestone" },
      ]}
    />
  );
}
