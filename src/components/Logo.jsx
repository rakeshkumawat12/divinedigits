import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center w-fit gap-1 mt-2 ml-12">
      <img src={logo} alt="logo"  className="h-[4rem]"/>
      <div className="font-bold text-2xl">DD</div>
    </div>
  );
};

export default Logo;
