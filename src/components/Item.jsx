export default function Item({ item }) {
  return (
    <>
      <div className="grid-container">
        <img className="item-image" src={`../../public/`} alt="" />
        <div class="grid-item"><h3>{item.name}</h3></div>
        <div class="grid-item"><h3>{item.price}</h3></div>
      </div>
    </>
  );
}
