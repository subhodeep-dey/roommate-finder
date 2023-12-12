import React, { useContext } from "react";

import "./Cards.css";
import { ListingContext } from "../../Context/listing-context";

const Cards = ({ item }) => {
  const { id, name, rank, block, bed, year, gender } = item;
  const { addToCart } = useContext(ListingContext);
  return (
    <>
      <span className="cards">
        <div className="main-card">
          <div className="card-details">
            <div className="card-img"></div>
            <div className="card-info">
              <div className="card-informatios">
                <div className="card-name">{name}</div>
                <div className="card-add" onClick={() => addToCart(id)}>
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
                  <div className="card-preference-content">{rank}</div>
                </div>
                <div className="card-block">
                  <div className="card-preference-title">Preferred Block</div>
                  <div className="card-preference-content">{block}</div>
                </div>
                <div className="card-bed">
                  <div className="card-preference-title">Preferred Bed Type</div>
                  <div className="card-preference-content">{bed}</div>
                </div>
              </div>
              <div className="card-downers">
                <div className="card-year">
                  <div className="card-preference-title">Year</div>
                  <div className="card-preference-Year">{year}</div>
                </div>
                <div className="card-gender">
                  <div className="card-preference-title">Gender</div>
                  <div className="card-preference-Gender">{gender}</div>
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
export default Cards;
