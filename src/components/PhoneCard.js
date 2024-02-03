import "./PhoneCard.css"
export const PhoneCard = ({phone}) => {
    const {name,price,id} = phone;
    const image = `../assets/images/${id}.png`
  return (

<div className="productCard">
    <img  src={image} alt={name} />
    <p className="name">{name}</p>
    <div className="action">
    <p >${price}</p>
    <button>Add to Cart</button>
    </div>
    
</div>  
    
    )
}
