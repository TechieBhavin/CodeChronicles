// Sidebar.jsx
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { sidebarData } from "../../sidebarData.js";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <aside className="w-72 h-screen border-r overflow-y-auto px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Catalog</h2>

      {sidebarData.map((section) => (
        <div key={section.title} className="mb-4">
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.title)}
            className="flex justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
          >
            {section.title}
            <span>{openSection === section.title ? "▾" : "▸"}</span>
          </button>

          {/* Section Items */}
          {openSection === section.title && (
            <ul className="mt-2 ml-3 space-y-2">
              {section.items.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-sm px-2 py-1 rounded 
                      ${
                        isActive
                          ? "text-blue-600 bg-blue-50 font-medium"
                          : "text-gray-600 hover:text-blue-600"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
