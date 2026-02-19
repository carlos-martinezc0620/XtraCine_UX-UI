function OtherCard({ title, description, image }) {
  return (
    <div className="other-card">
      <img src={image} alt={title} />
      <div className="other-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default OtherCard
