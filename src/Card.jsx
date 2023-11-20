

const Card = ({tansen}) => {
  return (
<>

<div className="  card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={tansen.thumbnail} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{tansen.title}</h2>
    <p>{tansen.description}</p>
    <p>Price: {tansen.price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Card