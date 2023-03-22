const Footer = () => {
  return (
    <div className="grow flex items-end">
      <div className="flex justify-between items-center w-full bg-black text-white p-3 h-[48px]">
        <span>
        © 2023 Selim. All Rights Reserved.
        </span>
        <span>
          <a target='_blank' href="https://github.com/selim-haspolat">
          <i className="fa-brands fa-github fa-2x hover:text-indigo-600 mr-3 transition-colors"></i>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/selimhaspolat/">
          <i className="fa-brands fa-linkedin fa-2x hover:text-blue-600 transition-colors"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
