import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch();

  const toggleIsCartOpen = () =>
    dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer>
      <ShoppingIcon onClick={toggleIsCartOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
