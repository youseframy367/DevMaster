import AboutCrudPage from "../about/components/AboutCrudPage";

export default function DashboardJobsPage() {
  return (
    <AboutCrudPage
      title="Jobs"
      description="Create and manage the job opportunities displayed on the public website."
      endpoint="/jobs"
      entityLabel="Job"
      addLabel="Add Job"
      searchPlaceholder="Search by name, location, type, or duties..."
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "site", label: "Location" },
        { key: "time", label: "Type" },
        { key: "count", label: "Vacancies" },
        { key: "detales", label: "Details" },
        { key: "JobDuties", label: "Duties" },
      ]}
      fields={[
        { key: "name", label: "Job Name", placeholder: "Frontend Developer" },
        { key: "site", label: "Location", placeholder: "Remote / Cairo" },
        { key: "time", label: "Job Type", placeholder: "Full-time" },
        { key: "count", label: "Vacancies", type: "number", placeholder: "1" },
        { key: "detales", label: "Details", type: "textarea", placeholder: "Add one detail per line or use the format required by the Backend DTO" },
        { key: "JobDuties", label: "Job Duties", type: "textarea", placeholder: "Add job duties" },
      ]}
    />
  );
}
