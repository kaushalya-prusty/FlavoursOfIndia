import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import { SWIGGY_API } from "../utilities/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { WithPromotedLable } from "./RestaurantCard";

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardPromoted = WithPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //promoted label

  //conditional rendering-rendering on the basics of condition
  //ternary operator
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>you seem to be offline! please check ur internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex m-4">
        <div className="px-2">
          <input
            type="text"
            className="border-2 mx-2 p-[6px] rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-2 bg-red-300 p-[7px] rounded-lg text-lg "
            onClick={() => {
              //filters the restaurant cards and updates thr UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="border-2 p-2 bg-red-300 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            {restaurant?.info?.promoted ? (
              <RestaurantCardPromoted restaurantData={restaurant} />
            ) : (
              <RestaurantCard restaurantData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
