import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import { RESTAURANT_LIST } from "../utilities/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { WithPromotedLable } from "./RestaurantCard";

const Body = () => {
  // Local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);
  const RestaurantCardPromoted = WithPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(RESTAURANT_LIST); for actual api not for mock data
    // const json = await data.json();

    setListOfRestaurants(RESTAURANT_LIST);
    setFilteredResturant(RESTAURANT_LIST); //not able to fetch, data is coming from line no 8.
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
              const filteredResturant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredResturant);
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
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            {restaurant.info.promoted ? (
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
