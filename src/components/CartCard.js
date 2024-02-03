import "./CartCard.css";

export const CartCard = ({item}) => {

 const {id, name, price} = item;
 const image = `../assets/images/${id}.png`;

  return (
 
    <div className="cartCard">
      <img src={image} alt={name}/>
      <span className="productName">{name}</span>
      <span className="productPrice">${price}</span>
      <button >Remove</button>
    </div>
 )
}
