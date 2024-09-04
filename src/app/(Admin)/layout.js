import React from "react";
import AdminHeader from "./(dashboard)/dashboard/Components/AdminHeader/AdminHeader";
import AdminFooter from "./(dashboard)/dashboard/Components/AdminFooter/AdminFooter";

export default function AdminRootLayout({ children }) {
  return (
    <div className="main">
      <AdminHeader />
      <div className="admin-inner">
        {children}
        <AdminFooter />
      </div>
    </div>
  );
}
