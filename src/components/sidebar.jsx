import { useState } from "react";

export default () => {
  const [sidebarDiv, setSidebarDiv] = useState("sidebar-div");
  const [sidebarBg, setSidebarBg] = useState("sidebar-backgrond");

  const rotateArrow = (e) => {
    // logic for rotating errow
    if (e.target.localName === "svg") {
      e.target.style.transform === "rotate(180deg)"
        ? (e.target.style.transform = "rotate(0deg)")
        : e.target.style.transform === "rotate(0deg)"
        ? (e.target.style.transform = "rotate(180deg)")
        : (e.target.style.transform = "rotate(180deg)");
    } else if (e.target.localName === "path") {
      e.target.farthestViewportElement.style.transform === "rotate(180deg)"
        ? (e.target.farthestViewportElement.style.transform = "rotate(0deg)")
        : e.target.farthestViewportElement.style.transform === "rotate(0deg)"
        ? (e.target.farthestViewportElement.style.transform = "rotate(180deg)")
        : (e.target.farthestViewportElement.style.transform = "rotate(180deg)");
    } else {
      e.target.childNodes[0].style.transform === "rotate(180deg)"
        ? (e.target.childNodes[0].style.transform = "rotate(0deg)")
        : e.target.childNodes[0].style.transform === "rotate(0deg)"
        ? (e.target.childNodes[0].style.transform = "rotate(180deg)")
        : (e.target.childNodes[0].style.transform = "rotate(180deg)");
    }
  };

  //funtion for adding and removing scollbar in body
  const BodyScrollingToggle = () =>
    (document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden");

  const toggleSidebar = (e) => {
    rotateArrow(e);
    // alert("clicked");
    setSidebarDiv(
      sidebarDiv === "sidebar-div-toggled"
        ? "sidebar-div"
        : "sidebar-div-toggled"
    );
    setSidebarBg(
      sidebarBg === "sidebar-backgrond-toggled"
        ? "sidebar-backgrond"
        : "sidebar-backgrond-toggled"
    );
    BodyScrollingToggle();
  };

  return (
    <>
      <div className='d-flex position-absolute overflow-hidden '>
        {/* sidebar */}
        <div
          className={`vh-100 ${sidebarDiv} overflow-auto pb-3`}
          onMouseEnter={BodyScrollingToggle}
          onMouseLeave={BodyScrollingToggle}>
          <nav>
            <ul className='w-100 m-0 p-0'>
              <li className='w-100'>
                <a
                  className='text-decoration-none text-dark nav-link text-center'
                  href='#'>
                  Sports
                </a>
              </li>
              <li className='w-100'>
                <a
                  className='text-decoration-none text-dark nav-link text-center'
                  href='#'>
                  Music
                </a>
              </li>
              <li className='w-100'>
                <a
                  className='text-decoration-none text-dark nav-link text-center'
                  href='#'>
                  Games
                </a>
              </li>
              <li className='w-100'>
                <a
                  className='text-decoration-none text-dark nav-link text-center'
                  href='#'>
                  News
                </a>
              </li>
              <li className='w-100'>
                <a
                  className='text-decoration-none text-dark nav-link text-center'
                  href='#'>
                  Live
                </a>
              </li>
              <li className='w-100'>
                <a
                  className='text-decoration-none text-dark nav-link text-center'
                  href='#'>
                  Extra
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Arrow  -->*/}
        <div
          className='toggleSidebar-btn position-fixed'
          style={{ zIndex: "106" }}
          onBlur={toggleSidebar}
          onClick={toggleSidebar}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='23'
            height='23'
            fill='currentColor'
            className='bi bi-arrow-right-circle m-1'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
            />
          </svg>
        </div>
        {/* dark transparent backgrond */}
        <div className={`${sidebarBg}`}></div>
      </div>
    </>
  );
};
