import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../service/getFirebase";


const Form = ({cart, total, clearCart}) =>{
    const [formData, setFormData] = useState("");

    const handleSubmit = async(e) => {
      e.preventDefault();

      const orderDetail = cart.map( (i) => `${i.item.name}: ${i.quantity}`);
      const date = new Date();
      const newOrder = {
        date: date,
        buyer: formData,
        item: orderDetail,
        total: total
      };

      const newOrderRef = collection(db, "orders");
      const newDoc = await addDoc(newOrderRef, newOrder);

      alert('Thank you for your purchase!');
      alert('Your order ID is: ' + newDoc.id + '. Make sure to write it down just in case!');
      clearCart();
    };

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
      console.log(formData);
    };

    return(
    <>
    <form
      className='cartDataForm'
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
        <h3>Completa tus Datos:</h3>
        <div className='formCartSection'>
          <div>
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="phone">Tel:</label>
            <input name="phone" type="number" id="phone" required/>
          </div>
          <div>
            <label htmlFor="E-mail">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              id="email1"
              name="email1"
              required
            />
          </div>
          <div>
            <label htmlFor="E-mail" required>
              Confirmar Email:
            </label>
            <input
              type="email"
              onChange={handleChange}
              id="email2"
              name="email2"
              required
            />
          </div>
        </div>
        
        { formData.name != null && formData.phone != null && formData.email1 != null && formData.email2 != null && formData.email1 === formData.email2 ? (
          <button className="formButtonPurchase" type="submit" onClick={handleSubmit}>
            Purchase
          </button>
        ) : (
          <button className="formButtonPurchase">
            Purchase
          </button>
        )}
      
    </form>
    </>
    )
}; export default Form;