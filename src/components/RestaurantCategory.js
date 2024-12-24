import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-10/12 mx-auto my-4 bg-gray-100 shadow-lg rounded-lg p-4">
      {/*accordioan header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title}({data.itemCards.length})
        </span>
        <span>{">"}</span>
      </div>

      {showItems && <RestaurantCategoryList items={data.itemCards} />}
      {/*accordioan body */}
    </div>
  );
};
export default RestaurantCategory;
