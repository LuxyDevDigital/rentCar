import React from "react";
import LinkItem from "./LinkItem";

const FooterSection = ({ title, links }) => {
  return (
    <div className="f_section">
      <h3 className="f_s_title">{title}</h3>
      <div className="f_s_linkList">
        {links.map((link, index) => (
          <LinkItem key={index} path={link.path}>{link.label}</LinkItem>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
