import React, { useContext } from "react";

import "./Cards.css";
import { ListingContext } from "../../Context/listing-context";

const RoomCards = ({ item }) => {
  const { id2, wantedblock, rank2, remaining, prefbed, year2, gender2 } = item;
  const { addToCart2 } = useContext(ListingContext);
  return (
    <>
      <span className="cards">
        <div className="main-card">
          <div className="card-details">
            <div className="card-img"></div>
            <div className="card-info">
              <div className="card-informatios">
                <div className="card-name">{wantedblock}</div>
                <div className="card-add" onClick={() => addToCart2(id2)}>
                  <img
                    src="./image/add-icon.png"
                    alt=""
                    style={{ height: "24px", width: "24px" }}
                  />
                </div>
              </div>
              <div className="card-preference">
                <div className="card-rank">
                  <div className="card-preference-title">Rank</div>
                  <div className="card-preference-content">{rank2}</div>
                </div>
                <div className="card-block">
                  <div className="card-preference-title">Preferred Bed</div>
                  <div className="card-preference-content">{prefbed}</div>
                </div>
                <div className="card-bed">
                  <div className="card-preference-title">Remaining</div>
                  <div className="card-preference-content">{remaining}</div>
                </div>
              </div>
              <div className="card-downers2">
                <div className="card-year">
                  <div className="card-preference-title">Year</div>
                  <div className="card-preference-Year">{year2}</div>
                </div>
                <div className="card-gender">
                  <div className="card-preference-title">Gender</div>
                  <div className="card-preference-Gender">{gender2}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-hr">
            <hr />
          </div>
          <div className="card-habits-section">
            <div className="card-habit"></div>
          </div>
        </div>
      </span>
    </>
  );
};
export default RoomCards;
