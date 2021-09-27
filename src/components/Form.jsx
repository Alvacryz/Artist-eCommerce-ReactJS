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
      console.log('El ID de la orden es: '+ newDoc.id);
      alert('Shit works');
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
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div>
        <h3>Completa tus Datos:</h3>
        <label htmlFor="name">Name:</label>
        <input name="name" className="w-full" id="name" required />
        <label htmlFor="phone">Tel:</label>
        <input name="phone" type="number" className="w-full" id="phone" />
        <label htmlFor="E-mail">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          id="email1"
          name="email1"
          className="w-full"
          required
        />
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
        {formData.email1 === formData.email2 ? (
          <button onClick={handleSubmit}>
            Terminar Compra
          </button>
        ) : (
          <div>
            Terminar Compra
          </div>
        )}
      </div>
    </form>
    </>
    )
}; export default Form;