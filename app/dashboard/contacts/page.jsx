import AboutCrudPage from "../about/components/AboutCrudPage";

export default function DashboardContactsPage() {
  return (
    <AboutCrudPage
      title="Contact Messages"
      description="Review and manage messages submitted through the public contact form."
      endpoint="/contacts"
      entityLabel="Contact message"
      allowCreate={false}
      allowEdit={false}
      searchPlaceholder="Search by name, email, phone, or message..."
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phoneNumber", label: "Phone" },
        { key: "message", label: "Message" },
      ]}
      fields={[
        { key: "name", label: "Name", placeholder: "Contact name" },
        { key: "email", label: "Email", type: "email", placeholder: "name@example.com" },
        { key: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+20 ..." },
        { key: "message", label: "Message", type: "textarea", placeholder: "Write the contact message" },
      ]}
    />
  );
}
