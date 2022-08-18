import "./product-card.styles.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart(product);
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
