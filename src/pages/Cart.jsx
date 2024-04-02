import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";

import { getProductList, removeCart } from "../ApiRequest/api";
import CardGrid from "../components/CardGrid";
import utils from "../utilities/utilities";
import toast from "react-hot-toast";
import NoProduct from "../components/NoProduct";

const Cart = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const token = utils.getLocalStorage("token");

  useEffect(() => {
    (async () => {
      const { data, status } = await getProductList("/cart-list", token);
      if (data.msg === "success") {
        const newData = data.data.map((item) => item.product);
        setProduct(newData);
      }
      // checking unauthorized
      if (status === 401) {
        toast.error("Unauthorized");
        utils.Unauthorized();
        return;
      }
    })();
  }, [token]);

  // handle to remove cart
  const handleRemoveCart = async (id) => {
    setIsLoading(id);
    const token = utils.getLocalStorage("token");
    const { data, status } = await removeCart(id, token);

    // checking unauthorized
    if (status === 401) {
      toast.error("Unauthorized");
      utils.Unauthorized();
      return;
    }

    // for success case
    if (data.msg === "success") {
      const newProduct = product.filter((item) => item.id !== id);
      setProduct(newProduct);
      toast.success("remove successfully");
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
        title="Remove to cart"
        onHandleClick={handleRemoveCart}
        isLoading={isLoading}
      />
    );
  }

  return <div className="container">{content}</div>;
};

export default Cart;
