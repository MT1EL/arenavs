import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  let navbarLinks = [
    { name: "Home", id: "#home" },
    { name: "About Us", id: "#AboutUs" },
    { name: "Design concept", id: "#DesignConcept" },
    { name: "Roadmap", id: "#Roadmap" },
    { name: "Tokenomics", id: "#Tokenomics" },
    { name: "Our team", id: "#Ourteam" },

    { name: "Partners", id: "#Partners" },
    {
      name: "Whitepaper",
      id: "https://drive.google.com/file/d/15y0zXMYYsKLTVZeGApapIDKnw4J4X_hV/view",
    },
    {
      name: "Arena Master Deck",
      id: "https://drive.google.com/file/d/1XVRxQTqd9h2_kf2dDj7KYOKoEx3CRpVe/view",
    },
  ];
  // const [darkMode, setDarkMode] = React.useState(false);
  const [mobileNav, setMobileNav] = React.useState(false);
  const [targeted, setTargeted] = React.useState("");

  function handleClick(props) {
    setTargeted(props);
    console.log(props);
  }
  console.log(mobileNav);
  return (
    <div>
      <div className="navbar">
        <div className="innerNav">
          <div className="bars" onClick={() => setMobileNav(!mobileNav)}></div>
          <a href="http://localhost:3000/">
            <img
              src="https://arenavs.com/logo.svg"
              alt="arenavs logo"
              className="logo"
              id="Home"
            />
          </a>
          <div className="links">
            {navbarLinks.map((item) => {
              return (
                <a
                  href={item.id}
                  className={item.name === targeted ? "lis clicked" : "lis"}
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          <div
            className={darkMode === true ? "darkMode dark" : "darkMode light"}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div
              className={
                darkMode === true
                  ? "toggleThing animateToggleRight"
                  : "toggleThing animateToggle"
              }
            ></div>
            {/* it's svg of sun icon in darkmode toggle butotn */}
            <div className="iconInToggle">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.57311 1.10525C7.35507 0.648235 6.70948 0.634629 6.47237 1.08205C6.25655 1.48932 6.54784 1.9807 7.00872 1.98683C7.4654 1.9929 7.76978 1.51746 7.57311 1.10525Z"
                  fill="white"
                ></path>
                <path
                  d="M4.10965 1.72266C3.69136 1.45025 3.15035 1.81123 3.24131 2.30205C3.30763 2.65988 3.68867 2.86387 4.02322 2.72065C4.44046 2.54203 4.48997 1.97035 4.10965 1.72266Z"
                  fill="white"
                ></path>
                <path
                  d="M2.2628 4.14141C1.8976 4.10051 1.70638 4.56287 1.99378 4.79187C2.14177 4.9098 2.35522 4.89558 2.48627 4.75908C2.69647 4.54013 2.56444 4.17519 2.2628 4.14141Z"
                  fill="white"
                ></path>
                <path
                  d="M0.552649 7.21338C0.324133 7.32238 0.317301 7.64518 0.541001 7.76375C0.744635 7.87169 0.990352 7.72604 0.993415 7.49559C0.996449 7.26726 0.758753 7.11507 0.552649 7.21338Z"
                  fill="white"
                ></path>
                <path
                  d="M1.72277 9.89029C1.45033 10.3086 1.81132 10.8496 2.30214 10.7586C2.65993 10.6923 2.8639 10.3113 2.72071 9.97676C2.54212 9.55953 1.97046 9.51 1.72277 9.89029Z"
                  fill="white"
                ></path>
                <path
                  d="M3.29382 12.6881C3.18495 13.1742 3.71684 13.5503 4.13885 13.2855C4.51276 13.0509 4.48149 12.4963 4.08357 12.3052C3.75845 12.1491 3.37264 12.3361 3.29382 12.6881Z"
                  fill="white"
                ></path>
                <path
                  d="M6.4267 13.8946C6.64472 14.3516 7.29037 14.3653 7.52749 13.9178C7.74336 13.5105 7.45197 13.019 6.99102 13.013C6.5344 13.007 6.23009 13.4824 6.4267 13.8946Z"
                  fill="white"
                ></path>
                <path
                  d="M9.89031 13.2773C10.3086 13.5497 10.8496 13.1887 10.7586 12.6979C10.6923 12.3401 10.3113 12.1361 9.97673 12.2793C9.5595 12.458 9.51 13.0296 9.89031 13.2773Z"
                  fill="white"
                ></path>
                <path
                  d="M11.6881 10.7062C12.1742 10.8151 12.5503 10.2832 12.2855 9.86115C12.0509 9.48724 11.4963 9.51851 11.3052 9.91643C11.1491 10.2415 11.3361 10.6274 11.6881 10.7062Z"
                  fill="white"
                ></path>
                <path
                  d="M13.4473 7.78659C13.6758 7.67756 13.6826 7.35473 13.4589 7.23619C13.2552 7.12828 13.0095 7.27397 13.0065 7.50444C13.0035 7.73276 13.2412 7.88492 13.4473 7.78659Z"
                  fill="white"
                ></path>
                <path
                  d="M11.9776 4.78498C12.2737 4.55761 12.0882 4.08441 11.7165 4.11883C11.4156 4.14667 11.2714 4.50227 11.4679 4.73177C11.5966 4.88216 11.8205 4.90554 11.9776 4.78498Z"
                  fill="white"
                ></path>
                <path
                  d="M10.7062 2.31203C10.815 1.82588 10.2831 1.44984 9.86112 1.71463C9.48723 1.94925 9.51856 2.50389 9.91649 2.69491C10.2416 2.85096 10.6273 2.66392 10.7062 2.31203Z"
                  fill="white"
                ></path>
                <path
                  d="M9.89604 10.2497C11.498 8.63726 11.498 6.0229 9.89604 4.41042C8.2941 2.79793 5.69684 2.79793 4.0949 4.41042C2.49296 6.0229 2.49296 8.63726 4.09491 10.2497C5.69685 11.8622 8.2941 11.8622 9.89604 10.2497Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            {/* it's svg of moon icon in darkmode toggle butotn */}
            <div className="iconInToggle">
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5.96522C14 9.85061 10.6076 13 6.4228 13C5.13828 13.0004 3.87475 12.6974 2.75114 12.1195C1.62753 11.5415 0.680783 10.7076 0 9.69627C1.20413 10.3974 2.59719 10.7683 4.01855 10.7662C8.20333 10.7662 11.5957 7.61644 11.5957 3.73105C11.598 2.41139 11.1985 1.11801 10.4434 0C11.5326 0.632508 12.4306 1.51192 13.0527 2.55548C13.6749 3.59905 14.0009 4.77243 14 5.96522V5.96522Z"
                  fill="white"
                ></path>
                <path
                  d="M4.5 2L4.79205 2.71167C4.94764 3.09115 5.18164 3.40314 5.46625 3.6106L6 4L5.46625 4.3894C5.18164 4.59686 4.94764 4.90885 4.79205 5.28833L4.5 6L4.20824 5.28833C4.05264 4.90885 3.81865 4.59686 3.53404 4.3894L3 4L3.53404 3.6106C3.81865 3.40314 4.05264 3.09115 4.20824 2.71167L4.5 2Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {mobileNav === true ? (
        <div className="navbar mobileNav">
          {/* <div className="navbarList"> */}
          <svg
            stroke="white"
            fill="white"
            stroke-width="0"
            viewBox="0 0 512 512"
            color="white"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
            className="exitIcon"
            onClick={() => setMobileNav(!mobileNav)}
          >
            <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
            <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
          </svg>
          {navbarLinks.map((item) => {
            return (
              <a
                href={item.id}
                className={item.name === targeted ? "lis clicked" : "lis"}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </a>
            );
          })}
          <img
            src="https://arenavs.com/nav-bottom.png"
            alt="some guy with sword"
            className="navFooterImage"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Navbar;
