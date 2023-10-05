export default function Item({ item }) {
  return (
    <div className="item">
      <img className="item-image" src={`../../public/`} alt="" />
      <h3>{item.name}</h3>
    </div>
  );
}
