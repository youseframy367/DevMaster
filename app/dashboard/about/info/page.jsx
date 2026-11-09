import AboutCrudPage from "../components/AboutCrudPage";

export default function AboutInfoPage() {
  return (
    <AboutCrudPage
      title="About Info"
      description="Manage the phone, email, and address information used on the public contact and About sections."
      endpoint="/about/info"
      searchPlaceholder="Search by phone, email, or address..."
      columns={[
        { key: "id", label: "ID" },
        { key: "phone", label: "Phone" },
        { key: "email", label: "Email" },
        { key: "address", label: "Address" },
      ]}
      fields={[
        { key: "phone", label: "Phone", type: "tel", placeholder: "+20 ..." },
        { key: "email", label: "Email", type: "email", placeholder: "hello@example.com" },
        { key: "address", label: "Address", placeholder: "Office address" },
      ]}
    />
  );
}
