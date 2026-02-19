function FoodCard({ name, image, price }) {
  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </div>
  );
}

export default FoodCard;