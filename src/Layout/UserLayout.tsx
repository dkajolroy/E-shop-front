import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ChildrenElement } from "../utils/Interface";

const UserLayout: React.FC<ChildrenElement> = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ minHeight: "60vh" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
