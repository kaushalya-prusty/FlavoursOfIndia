import { RESTURANT_LOGO_CDN } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;
  return (
    <div className=" w-56 p-2 rounded-lg border-2 bg-gray-300 hover:border-gray-400 m-2">
      <img
        className="rounded-xl h-36 w-52"
        alt="Biriyani"
        src={RESTURANT_LOGO_CDN + cloudinaryImageId}
      ></img>

      <div className="cardBody">
        <h3 className="text-lg font-bold">{name}</h3>
        <div className="flex justify-between font-semibold">
          <span>{avgRating}</span>
          <span>{deliveryTime}</span>
        </div>
        <div>{cuisines.join(", ")}</div>
        <div>{costForTwo}For Two</div>
      </div>
    </div>
  );
};

// this is an higher order function. takes input-ResturantCard ==> resturantCardPromoted.
export const WithPromotedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <lable>Promoted</lable>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
