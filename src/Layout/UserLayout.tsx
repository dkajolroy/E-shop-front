import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ChildrenElement } from "../utils/Interface";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UserLayout: React.FC<ChildrenElement> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
