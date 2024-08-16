import { Link } from "react-router-dom";

const Shop = ({ clothes, handleAddToCart }) => {
  return (
    <div className="shop">
      {clothes.map((clothe) => (
        <div
          key={clothe._id}
          className="w-[20rem] rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
        >
          <Link to={`/products/${clothe._id}`}>
            <img
              src={clothe.imageUrl}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2 flex items-center justify-center flex-col">
                <h2 className="text-3xl max-w-[90%] font-semibold tracking-wide">
                  {clothe.name.slice(0, 20) + "..."}
                </h2>
                <p className="dark:text-gray-800">
                  {clothe.description.slice(0, 60) + "..."}
                </p>
                <p className="dark:text-gray-800">${clothe.price}</p>
              </div>
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex items-center justify-center hover:bg-violet-500 w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Add to cart
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Shop;
