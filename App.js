import React from "react";
import ReactDOM from "react-dom/client";
import { Restaurants } from "./Data";

const Header = () => {
  return (
    <div className="header">
      <div className="imageLogo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsZu12QaP4S0nTshfsQbyJtdtpPbPnHh5vtg&s"></img>
      </div>
      <div className="items">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurantcard = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, cuisines, avgRatingString } =
    resData.info;
  return (
    <div className="resCard">
      <div className="resImg">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div className="resdata">
        <h3>{name}</h3>
        <p>{avgRatingString}</p>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <div className="restaurants">
        {Restaurants.map((res) => {
          // console.log(res.info.id);
          // const { id, name, cloudinaryImageId, cuisines, avgRatingString } =
          //   res.info;
          // console.log(id, name, cloudinaryImageId, cuisines, avgRatingString);
          return <Restaurantcard key={res.info.id} resData={res} />;
        })}
      </div>
      {/* <Restaurantcard resData={Restaurants[5]} /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
