import AboutCrudPage from "../about/components/AboutCrudPage";

export default function DashboardServiceRequestsPage() {
  return (
    <AboutCrudPage
      title="Service Requests"
      description="Review and manage consultation and service requests submitted from the public website."
      endpoint="/service-requests"
      entityLabel="Service request"
      allowCreate={false}
      allowEdit={false}
      searchPlaceholder="Search by name, company, email, phone, or message..."
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "companyName", label: "Company" },
        { key: "email", label: "Email" },
        { key: "phoneNumber", label: "Phone" },
        { key: "message", label: "Message" },
      ]}
      fields={[
        { key: "name", label: "Name", placeholder: "Contact name" },
        { key: "companyName", label: "Company Name", placeholder: "Company name" },
        { key: "email", label: "Email", type: "email", placeholder: "name@example.com" },
        { key: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+20 ..." },
        { key: "message", label: "Message", type: "textarea", placeholder: "Write the service request" },
      ]}
    />
  );
}
