import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 footer footer-center bg-base-100 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Deepak
          Singh
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
