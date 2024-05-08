import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../../layout/Nav/Nav";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { QuestionSection } from "../../sections/QuestionSection";
import { Footer } from "../../layout/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addUserOrder } from "../../redux/actions/userOrder/userOrderActions";
import "react-toastify/dist/ReactToastify.css";

export function SendOrderForm() {
  const getState = useSelector((state) => state.userOrderReducer.userOrder);
  const [order, setOrder] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setOrder(getState);
    // eslint-disable-next-line
  }, []);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    const updatedOrder = {
      ...order,
      [name]: type === "checkbox" ? checked : value
    };

    setOrder(updatedOrder);
  };

  const handleAcceptAddress = () => {
    dispatch(addUserOrder(order));
    navigate(-1);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Nav />
      <div className="desktop:w-700p mx-auto">
        <div className="pt-20p">
          <Button className="flex gap-x-10p" onClick={goBack}>
            <img src="/assets/icons/arrow_back.svg" alt="arrow back" />
            <p className="text-18p font-inter">Natrag</p>
          </Button>
        </div>
        <div className="pt-20p px-15p">
          <h1 className="text-23p font-bold leading-27p">Podatci za dostavu</h1>
        </div>
        <div className="flex flex-col gap-y-16p pt-20p ">
          <Input
            type="text"
            label="Ime"
            name="name"
            value={order.name}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Prezime"
            name="surname"
            value={order.surname}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Grad"
            name="city"
            value={order.city}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            label="Poštanski broj"
            name="zip"
            value={order.zip}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            label="Adresa i kućni broj"
            name="address"
            value={order.address}
            onChange={handleInputChange}
          />
          <Input
            type="tel"
            label="Broj mobilnog telefona"
            name="phone"
            value={order.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full pt-12p">
          <Input
            type="checkbox"
            className="w-30p h-30p"
            name="save_address"
            checked={order.save_address || false}
            onChange={handleInputChange}
          />
          <p className="font-inter pt-2p">Spremi adresu za buduće narudžbe</p>
        </div>
        <div className="flex justify-center mx-auto py-20p">
          <Button
            name="Potvrdi podatke"
            className="button w-354p h-44p rounded-8p text-16p leading-24p font-semibold font-inter"
            onClick={handleAcceptAddress}
          />
        </div>
      </div>
      <QuestionSection />
      <Footer />
    </div>
  );
}
