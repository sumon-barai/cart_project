const CardItem = ({ item, title, onHandleClick, isLoading }) => {
  const { image, price, id, short_des } = item;

  return (
    <div className="col-md-4 col-lg-3">
      <div className="card m-1">
        <img src={image} className="card-img-top" alt="product image" />
        <div className="card-body">
          <h5 className="card-title">Price : &#2547; {price}</h5>
          <p className="card-text">{short_des}</p>
          <button
            disabled={isLoading === id}
            className={`btn btn-success `}
            onClick={() => onHandleClick(id)}
          >
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
