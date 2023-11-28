import { useContext } from "react";
import React from "react";
import { ListingContext } from "../../Context/listing-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Modal.css";

function Modal2() {
  const profileData = JSON.parse(localStorage.getItem("profile"));
  const { seletedroomdetail, seletedroomemail, seletedroomphone, closeModal2 } =
    useContext(ListingContext);
  // console.log(seletedroomdetail);
  const countryCode = "91";
  const whatsappMessage = `Hello! I am ${profileData.user.firstname} ${profileData.user.lastname}, I found your listing from Roommate Dhoondho app and I am interested in your listing.`;
  const whatsappLink = `https://wa.me/${countryCode}${seletedroomphone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <div className="habits">
          <div className="habitstab-main">
            <div className="habits-buttons">
              <div className="activehabits">
                <p className="habits-text">Description</p>
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
                <i class="fab fa-whatsapp"></i> {seletedroomphone}
              </a>
            </p>
            <br />
            <p>
              <b>Email Id: </b>

              {seletedroomemail}
            </p>
            <br />
            <b>Details:</b>
            <p>{seletedroomdetail}</p>
          </div>
          <button
            onClick={closeModal2}
            className="mx-auto bg-[#06105A] px-[0.75rem] py-[0.1rem] text-white rounded-[4px] self-start disabled:hover:cursor-not-allowed"
          >
            close
          </button>
        </div>
      </div>
    </aside>
  );
}
export default Modal2;
