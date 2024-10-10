export const cart = [];

export function addToCart(productId) {
  let repeatedItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      repeatedItem = cartItem;
    }
  });

  if (repeatedItem) {
    repeatedItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}
