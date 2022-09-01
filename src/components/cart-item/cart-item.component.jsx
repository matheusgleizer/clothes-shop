import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <span className="name">{quantity}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
      <CartItemName>{name}</CartItemName>
    </CartItemContainer>
  );
};

export default CartItem;
