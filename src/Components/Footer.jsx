import React from "react";

const Footer = () => {
  return (
    <footer className="fixed flex justify-center items-center bottom-0 footer footer-center bg-base-100 text-base-content h-5">
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
