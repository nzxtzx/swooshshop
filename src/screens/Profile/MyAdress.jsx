import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteAddress } from "../../redux/slices/auth.slice";

const MyAdress = () => {
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const isAddress = userData && userData.address && Object.keys(userData.address).length > 0;

  const newAdrresss = isAddress
    ? {
        postalCode: userData.address[0]?.postalCode || "",
        country: userData.address[0]?.country || "",
        city: userData.address[0]?.city || "",
        street: userData.address[0]?.street || "",
        houseNumber: userData.address[0]?.houseNumber || "",
      }
    : {};

    const handleDeleteAddress = () => {
      dispatch(fetchDeleteAddress({id: userData._id}))
    }

  return (
    <div className="profile-adress">
      <h1>My Adress</h1>
      <div className="profile-adress__container">
        <div className="profile-adress__header">
          {isAddress ? <span>{userData.fullName}</span> : <span>No address has been added</span>}
          <div className="profile-adress__mark">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
              <path
                opacity="0.9"
                d="M9.0188 19.4835C8.75303 19.4863 8.48936 19.436 8.24329 19.3356C7.99721 19.2351 7.77368 19.0865 7.5858 18.8985L3.3418 14.6555C2.35116 13.6644 1.63823 12.4304 1.27438 11.0772C0.910525 9.72393 0.908519 8.29884 1.26856 6.94457C1.6286 5.59029 2.33805 4.35434 3.3259 3.36044C4.31375 2.36654 5.54535 1.64955 6.8974 1.28125C8.24945 0.912951 9.67453 0.906255 11.03 1.26184C12.3854 1.61742 13.6237 2.3228 14.6209 3.30738C15.618 4.29195 16.339 5.52118 16.7118 6.87201C17.0845 8.22285 17.0959 9.64789 16.7448 11.0045M12.9988 19.9985L17.9988 14.9985M17.9988 14.9985V19.4985M17.9988 14.9985H13.4988M5.9988 8.99851C5.9988 9.79416 6.31487 10.5572 6.87748 11.1198C7.44009 11.6824 8.20315 11.9985 8.9988 11.9985C9.79445 11.9985 10.5575 11.6824 11.1201 11.1198C11.6827 10.5572 11.9988 9.79416 11.9988 8.99851C11.9988 8.20286 11.6827 7.4398 11.1201 6.87719C10.5575 6.31458 9.79445 5.99851 8.9988 5.99851C8.20315 5.99851 7.44009 6.31458 6.87748 6.87719C6.31487 7.4398 5.9988 8.20286 5.9988 8.99851Z"
                stroke="#FF6915"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Delivery address</span>
          </div>
        </div>
        <div className="profile-adress__content">
          {isAddress ? (
            <div className="address">
              <p className="address-value">{Object.values(newAdrresss).join(", ")}</p>
              <button className="address-buttons">
                <div className="address-buttons__edit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <path
                      d="M13.5 1.92852C13.7189 1.70965 13.9787 1.53603 14.2647 1.41758C14.5506 1.29913 14.8571 1.23816 15.1667 1.23816C15.4762 1.23816 15.7827 1.29913 16.0687 1.41758C16.3546 1.53603 16.6145 1.70965 16.8333 1.92852C17.0522 2.14738 17.2258 2.40722 17.3443 2.69319C17.4627 2.97916 17.5237 3.28565 17.5237 3.59518C17.5237 3.90471 17.4627 4.21121 17.3443 4.49717C17.2258 4.78314 17.0522 5.04298 16.8333 5.26185L5.58333 16.5118L1 17.7618L2.25 13.1785L13.5 1.92852Z"
                      stroke="#2C2F31"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Link to="/profile/address/add">
                    <span>Редактировать</span>
                  </Link>
                </div>

                <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="1.02344" y1="2.18557e-08" x2="1.02344" y2="20" stroke="#D7D7D7" stroke-dasharray="2 2" />
                </svg>

                <div className="address-buttons__remove">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path
                      d="M1.52344 4.49999H3.1901M3.1901 4.49999H16.5234M3.1901 4.49999V16.1667C3.1901 16.6087 3.3657 17.0326 3.67826 17.3452C3.99082 17.6577 4.41474 17.8333 4.85677 17.8333H13.1901C13.6321 17.8333 14.0561 17.6577 14.3686 17.3452C14.6812 17.0326 14.8568 16.6087 14.8568 16.1667V4.49999H3.1901ZM5.6901 4.49999V2.83332C5.6901 2.3913 5.8657 1.96737 6.17826 1.65481C6.49082 1.34225 6.91474 1.16666 7.35677 1.16666H10.6901C11.1321 1.16666 11.5561 1.34225 11.8686 1.65481C12.1812 1.96737 12.3568 2.3913 12.3568 2.83332V4.49999M7.35677 8.66666V13.6667M10.6901 8.66666V13.6667"
                      stroke="#2C2F31"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span onClick={handleDeleteAddress}>Удалить</span>
                </div>
              </button>
            </div>
          ) : (
            <Link to="/profile/address/add">
              <button className="profile-adress__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <circle cx="31" cy="31" r="31" fill="#F9F9F9" />
                  <path d="M31 24V38M24 31H38" stroke="#FF6915" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Add address</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAdress;
