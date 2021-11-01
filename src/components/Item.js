const Item = (props) => {
  return (
    <div className="item">
      <h2>{props.title}</h2>
      <span>{props.subtitle}</span>
      <img src={props.picture} alt="" />
      <p>{props.description}</p>
    </div>
  );
};
export default Item;
