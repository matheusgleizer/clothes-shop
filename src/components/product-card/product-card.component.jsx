import "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles.jsx";

import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addToCartHandler = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductCardFooter>
        <ProductCardName>{name}</ProductCardName>
        <ProductCardPrice>{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addToCartHandler}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
