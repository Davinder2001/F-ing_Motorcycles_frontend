import React from "react";
import AdminHeader from "./(dashboard)/dashboard/Components/AdminHeader/AdminHeader";
import AdminFooter from "./(dashboard)/dashboard/Components/AdminFooter/AdminFooter";
import { EXPORT_ALL_APIS } from '../../../utils/apis/apis';
let api=EXPORT_ALL_APIS()
const getHeaderLogo = api.loadHeaderImage();


export default function AdminRootLayout({ children }) {
  return (
    <div className="main">
      <AdminHeader getHeaderLogo={getHeaderLogo} />
      <div className="admin-inner">
        {children}
        <AdminFooter />
      </div>
    </div>
  );
}
