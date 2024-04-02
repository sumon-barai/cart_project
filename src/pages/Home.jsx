import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

import { addToCart, getProductList } from "../ApiRequest/api";
import CardGrid from "../components/CardGrid";
import utils from "../utilities/utilities";
import toast from "react-hot-toast";
import NoProduct from "../components/NoProduct";

const Home = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await getProductList("/product-list");
      if (data.msg === "success") {
        setProduct(data.data);
      }
    })();
  }, []);

  // handle to addToCart
  const handleAddToCart = async (id) => {
    setIsLoading(id);
    const token = utils.getLocalStorage("token");
    const { data, status } = await addToCart(id, token);

    // checking unauthorized
    if (status === 401) {
      toast.error("Unauthorized");
      utils.Unauthorized();
      return;
    }

    // for success case
    if (data.msg === "success") {
      toast.success("successfully added");
      setIsLoading(null);
    }
  };

  // what is render in UI
  let content;
  if (product === null) {
    content = <Spinner />;
  } else if (product.length === 0) {
    content = <NoProduct />;
  } else {
    content = (
      <CardGrid
        product={product}
        title="Add to cart"
        onHandleClick={handleAddToCart}
        isLoading={isLoading}
      />
    );
  }

  return <div className="container">{content}</div>;
};

export default Home;
