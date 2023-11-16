import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
   const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useCart()

    const handleAddToCart = () => {
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
      
            axiosSecure.post('/carts',cartItem)
     
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} added on the cart.`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch(); // refetch cart to update the number of items in the cart
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }}
     
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                  onClick={handleAddToCart} 
                     className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;