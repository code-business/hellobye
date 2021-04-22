import { useState } from "react";

export default (props) => {
  const [hide, resetHide] = useState(""); //for hiding navbars button and logos when clck on search button
  const [disp, resetDisp] = useState("d-none"); //for show and hiding form
  const [searchInput, setsearchInput] = useState("");
  const showSearchbar = () => {
    resetHide("d-none");
    resetDisp("d-flex");
  };

  const HideSearchBar = () => {
    resetHide("");
    resetDisp("d-none");
  };

  const ValidateSearchInput = (e) => {
    setsearchInput(e.target.value);
    if (e.target.value === "") HideSearchBar();
  };
  return (
    <>
      <nav className='NAV_BAR'>
        <ul className='m-0 p-0 float-left' style={{ height: "3.5em" }}>
          <li className={`m-3 ${hide}`}>
            <a
              className='text-dark font-weight-bold text-decoration-none clearfix'
              href='#'>
              Hellobye
            </a>
          </li>
          <li className={`m-3 ${hide}`}>
            <a href='#' className='text-dark text-decoration-none'>
              Browse
            </a>
          </li>

          <li className={`${disp} p-0`} onClick={HideSearchBar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              class='bi bi-arrow-left'
              viewBox='0 0 16 16'>
              <path
                fill-rule='evenodd'
                d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
              />
            </svg>
          </li>

          <li>
            <div className={`${disp} justify-content-center p-0 m-0`}>
              <form className='mb-form mb-0 '>
                <input
                  type='search'
                  placeholder='Search'
                  className='p-0 m-0'
                  onChange={ValidateSearchInput}
                  onFocus={(e) =>
                    (e.target.style.borderBottom = "0.5px solid gray")
                  }
                  style={{ border: "none", outline: "none" }}
                  value={searchInput}
                />
              </form>
            </div>
          </li>

          <li className='search-icon-mobile' onClick={showSearchbar}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              className=''
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
          </li>
        </ul>

        <div className='d-flex justify-content-center'>
          <form className='pc-form'>
            <input
              type='search'
              placeholder='Search'
              onFocus={(e) => {
                e.target.style.outline = "none";
                e.target.style.border = "0.05em solid #19abff";
              }}
              onBlur={(e) => (e.target.style.border = "0.05em solid black")}
            />
            <div
              className='search-icon d-flex justify-content-center p-1 float-right clearfix'
              onClick={() => alert("this feature will add soon..")}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='currentColor'
                viewBox='0 0 16 16'>
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
            </div>
          </form>
        </div>
        <button className={`btn btn-sm btn-dark float-right mr-2 ${hide}`}>
          Sign Up{/* search bar for mobile */}
        </button>
      </nav>
    </>
  );
};
