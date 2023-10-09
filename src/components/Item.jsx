export default function Item({ item, token, addToBasket }) {
  return (
    <div className="grid-container">
      <img className="item-image" src={`/Burger.jpg`} alt="food item" />
      <div className="grid-item">
        <h3>{item.name}</h3>
      </div>
      <div className="grid-item">
        <h3>${item.price.toFixed(2)}</h3>
      </div>
    </div>
  );
}
