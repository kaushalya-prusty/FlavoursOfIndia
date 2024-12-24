import { RESTURANT_LOGO_CDN } from "../utilities/constants";

const RestaurantCategoryList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <span>{item.card.info.name}</span>
              <span>-₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="mx-16 bg-black text-white">Add+</button>
            </div>
            <img
              src={RESTURANT_LOGO_CDN + item.card.info.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantCategoryList;
