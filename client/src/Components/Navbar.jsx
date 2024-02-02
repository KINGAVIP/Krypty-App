const Navbar = () => {
  const scrollTo = (sectionID) => {
    const ele = document.getElementById(sectionID);
    if (ele) {
      window.scrollTo({
        top: ele.offsetTop - 170,
        behavior: "smooth",
      });
    }
  };
  const NavbarItem = (props) => {
    return (
      <li
        className=" px-4 text-gray-200 cursor-pointer transation duration-300 list-none hover:text-blue-500"
        onClick={() => scrollTo(props.item)}
      >
        {props.item}
      </li>
    );
  };
  return (
    <nav className="flex justify-between h-[4rem] items-center px-7 bg-gray-900 fixed w-[100vw] z-2 top-0">
      <h2 className="text-2xl font-semibold text-indigo-600 font-serif">
        CRYPTY
      </h2>
      <div className="flex">
        {["Home", "Services", "Transactions"].map((item, index) => (
          <NavbarItem key={index} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
