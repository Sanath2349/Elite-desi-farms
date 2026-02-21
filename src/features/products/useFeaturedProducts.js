import { useSelector } from "react-redux";

export const useFeaturedProducts = () => {
  return useSelector((state) =>
    state.products.items.filter((item) => item.featured),
  );
};
