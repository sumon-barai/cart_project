import CardItem from "./CardItem";

const CardGrid = ({ product, title, onHandleClick, isLoading }) => {
  return (
    <div className="row">
      {product.map((item) => (
        <CardItem
          key={item.id}
          item={item}
          title={title}
          onHandleClick={onHandleClick}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default CardGrid;
