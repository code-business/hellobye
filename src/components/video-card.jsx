import { useState } from "react";

const PopupDiv = (props) => {
  return (
    <>
      <div
        className={`options position-absolute ${props.popupVar}`}
        style={{ width: "inherit" }}>
        <nav
          className='w-75 position-absolute  bg-dark'
          style={{
            top: "-15em",
            left: "4em",
            borderRadius: "0.25em",
          }}>
          <ul
            className='m-0 p-0'
            style={{
              listStyleType: "none",
              color: "white",
            }}>
            {Object.keys(props.data).map((key) => (
              <li>
                <a
                  className='text-decoration-none text-light nav-link text-center'
                  href={props.data[key]}>
                  {key}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      ;
    </>
  );
};

export default (props) => {
  const [HoverButtons, setHoverButtons] = useState("d-none");
  const [toggleMsg_Watch_later, Reset_toggleMsg_Watch_later] = useState(
    "d-none"
  );
  const [toggleMsg_addTo_queue, Reset_toggleMsg_addTo_queue] = useState(
    "d-none"
  );
  const [RightEm, setRightEm] = useState("0.5em"); //for alignement of "add to queue" button on hover
  const [popup, resetPopup] = useState("d-none"); // for 3 dots clicking

  const toggleMSG_WL = () => {
    Reset_toggleMsg_Watch_later(
      toggleMsg_Watch_later === "d-none" ? "" : "d-none"
    );
    setRightEm(RightEm === "0.5em" ? "-4.4em" : "0.5em");
  };

  const toggleMSG_ATQ = () =>
    Reset_toggleMsg_addTo_queue(
      toggleMsg_addTo_queue === "d-none" ? "" : "d-none"
    );

  const togglePopup = (e) => {
    e.preventDefault();
    resetPopup(popup === "d-none" ? "" : "d-none");
  };

  //props
  // props.watchLink
  // props.channelLink
  // props.thumbNailLink
  // props.channelImgLink
  return (
    <>
      <a
        href={props.watchLink}
        className='text-decoration-none text-dark'
        onMouseEnter={() => setHoverButtons("")}
        onMouseLeave={() => setHoverButtons("d-none")}>
        {/* video watch link */}
        <div className='video-card p-2'>
          <a href={props.watchLink} className='text-decoration-none text-dark'>
            <img src={props.thumbNailLink} alt='thumbnail' />
            <span className='video-duration text-light position-relative'>
              50.00
            </span>
          </a>

          {/* channel link */}
          <div className='channel-logo m-0 p-0'>
            <a
              href={props.channelLink}
              className='text-decoration-none text-dark'>
              <img src={props.channelImgLink} alt='channel-logo' />
            </a>
          </div>
          {/* video watch link */}
          <a
            href={props.watchLink}
            className='text-decoration-none text-dark video-title w-100 p-0 m-0 position-relative'>
            <span className=''>title of this video</span>
          </a>
          {/* channel link */}
          <a
            href={props.channelLink}
            className='text-decoration-none text-dark'>
            <span className='channel-name d-block text-secondary position-relative'>
              channel name
            </span>
          </a>
          {/* video play link */}
          <a
            href={props.watchLink}
            className='text-decoration-none text-dark views text-secondary position-relative'>
            <span className=''>
              views <b>.</b> time ago
            </span>
          </a>

          {/* 3 dots link */}
          <a
            tabIndex={12}
            onBlur={togglePopup}
            onClick={togglePopup}
            className={`text-decoration-none text-dark dots ${HoverButtons} float-right position-relative`}>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-three-dots-vertical'
                viewBox='0 0 16 16'>
                <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
              </svg>
            </div>
          </a>
          {/* watch later link */}
          <a
            href='watch-later'
            className={`text-decoration-none text-light watch-later-logo ${HoverButtons} position-relative float-right pt-0 pb-0 row overflow-auto`}
            onMouseEnter={toggleMSG_WL}
            onMouseLeave={toggleMSG_WL}>
            <div
              className={`msg  text-light pl-1 pr-1 ${toggleMsg_Watch_later} m-0 float-left`}>
              watch later
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='15'
                fill='currentColor'
                class='bi bi-clock-fill'
                viewBox='0 0 16 16'>
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z' />
              </svg>
            </div>
          </a>
          {/* add to playlist link */}
          <a
            href='add-to-play-list'
            className={`text-decoration-none text-light add-to-list-logo ${HoverButtons} position-relative float-right pt-0 pb-0 row`}
            style={{ right: RightEm }}
            onMouseEnter={toggleMSG_ATQ}
            onMouseLeave={toggleMSG_ATQ}>
            <span
              className={`msg  text-light pl-1 pr-1 ${toggleMsg_addTo_queue} m-0 float-left`}>
              add to play list
            </span>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='15'
                fill='currentColor'
                class='bi bi-list-check'
                viewBox='0 0 16 16'>
                <path
                  fill-rule='evenodd'
                  d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z'
                />
              </svg>
            </div>
          </a>

          <PopupDiv
            popupVar={popup}
            data={{
              "Add to list": "add_to_list",
              Share: "share",
              "Watch later": "watch_later",
              "Add to favorites": "add_to_favorites",
            }}
          />
        </div>
      </a>
    </>
  );
};
