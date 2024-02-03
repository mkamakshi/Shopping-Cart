import { useTitle } from '../hooks/useTitle';
import {CartCard} from "../components/CartCard";

export const Cart = ({title}) => {
  const cartArray = [{id:1001, name:'Sony Wh-Ch510 Bluetooth Wireless', price:149},
                     {id:1002, name:'boAt Rockerz 450', price:49}];  
  useTitle(title);


  return (
    <main  className="min-h-screen, max-w-screen-xl,m-auto,p-10">
    <div className='mx-0 my-30'>
    <h1 className='text-2xl font-bold text-center'>Cart Items : 2</h1>
    </div>
    { cartArray.map((item) => (
               <CartCard key={item.id} item={item} />
          )) }
    </main>
  )
}
