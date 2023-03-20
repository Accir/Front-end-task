import React from "react";
import PropTypes from "prop-types";

export default function Footer({ items, ...props }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-custom-light m-5">
      <div className="flex justify-between">
        {items.map((item, key) => {
          return (
            <div key={key} className="text-sm cursor-pointer">
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="text-xs text-center pt-5">©{currentYear} All Rights Reserved.</div>
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};
