import React from "react";
import { footer } from "../../data";

const Footer = () => {
  const { info, contact } = footer;

  return (
    <footer className="footer">
      <ul className="footer__list text">
        <li>
          <a className="footer--link" href="#top">
            <span>{`Lucas Migliori ® ${new Date().getFullYear()}`}</span>
          </a>
        </li>
        <li>
          <p>{`${info.zipCode}, ${info.neighbourhood}`}</p>
        </li>
        <li>
          <p>{`${info.city}, ${info.country}`}</p>
        </li>
      </ul>
      <ul className="footer__list">
        {contact.map((link) => (
          <li key={link.id}>
            <a
              className="social__link"
              href={`${
                link.name !== "email" ? link.url : `mailto:${link.url}`
              }`}
            >
              {link.icon}
              <p className="text">{link.address}</p>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
