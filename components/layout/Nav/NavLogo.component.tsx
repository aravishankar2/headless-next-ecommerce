import Image from "next/image";

const NavLogo = () => (
  <div className="d-flex nav-logo-container pointer">
    <Image layout="fixed" width={37} height={42} src="logo_dpy9dj" />
    <div className="logo-text d-flex flex-column ml-2">
      <div className="sg">SURFACE GROUP</div>
      <div className="i">INTERNATIONAL</div>
    </div>
  </div>
);

export default NavLogo;
