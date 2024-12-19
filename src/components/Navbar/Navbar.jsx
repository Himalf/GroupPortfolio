import React from "react";

const Navbar = () => {
  const navItems = [
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <main className=" w-full h-16 py-2 flex items-center justify-between px-8 bg-white">
      <h1 className="flex flex-col justify-center cursor-pointer">
        <span className="text-3xl text-blue-600 font-extrabold">
          fuse<span className="font-light"> | machines</span>
        </span>
      </h1>
      <div className="flex items-center gap-8">
        {navItems.map((val, i) => (
          <a href={val.path} className="cursor-pointer text-lg font-semibold">
            {val.name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Navbar;
