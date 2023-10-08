export default function Item({ item, token, addToBasket }) {
  return (
    <div className="item">
      <img className="item-image" src={`/Burger.jpg`} alt="food item" />
      <h3>{item.name}</h3>
      <h3 className="item-price">${item.price.toFixed(2)}</h3>
    </div>
  );
}
