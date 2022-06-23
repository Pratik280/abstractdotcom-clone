import React from "react";

const footerContents = [
  {
    title: "Abstract",
    listItems: ["Start Trial", "Pricing", "Download"],
  },
  {
    title: "Resources",
    listItems: ["Blog", "Help Center", "Release Notes", "Status"],
  },
  {
    title: "Community",
    listItems: ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"],
  },
  {
    title: "Company",
    listItems: ["About Us", "Careers", "Legal"],
  },
  {
    title: "Contact Us",
    listItems: ["info@abstract.com"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="custom-container">
        {footerContents.map((footerContent, index) => {
          return (
            <div key={index} className="py-4">
              <h3 className="text-2xl font-bold">{footerContent.title}</h3>
              <ul>
                {footerContent.listItems.map((listItem, index) => {
                  return (
                    <li className="">
                      <a className="hover:underline" href="#">
                        {listItem}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
