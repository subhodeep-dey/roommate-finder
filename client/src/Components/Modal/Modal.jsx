import { useContext } from "react";
import React from "react";
import { ListingContext } from "../../Context/listing-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css";

function Modal() {
  const profileData = JSON.parse(localStorage.getItem("profile"));
  const {
    seletedroommateemail,
    seletedroommatephone,
    seletedroommatedetail,
    closeModal,
  } = useContext(ListingContext);
  // console.log(seletedroommatedetail);
  const countryCode = "91";
  const whatsappMessage = `Hello! I am ${profileData.user.firstname} ${profileData.user.lastname}, I found your listing from Roommate Dhoondho app and I am interested in your listing.`;
  const whatsappLink = `https://wa.me/${countryCode}${seletedroommatephone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="habits">
          <div className="habitstab-main">
            <div className="habits-buttons">
              <div className="activehabits">
                <p className="habits-text"> Description</p>
              </div>
            </div>
            <div className="habitstab-hr">
              <hr />
            </div>
          </div>
          <div className="habitssection">
            <p>
              <b>Phone Number: </b>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fab fa-whatsapp" />
                <i class="fab fa-whatsapp"></i> {seletedroommatephone}
              </a>
            </p>
            <br />
            <p>
              <b>Email Id: </b>

              {seletedroommateemail}
            </p>
            <br />
            <b>Details:</b>
            <p>{seletedroommatedetail}</p>
          </div>
          <button
            onClick={closeModal}
            className="mx-auto bg-[#06105A] px-[0.75rem] py-[0.1rem] text-white rounded-[4px] self-start disabled:hover:cursor-not-allowed"
          >
            close
          </button>
        </div>
      </div>
    </aside>
  );
}
export default Modal;
