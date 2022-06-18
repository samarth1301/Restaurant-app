import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FoodTab from "../../Components/FoodTab";
import Navbar from "../../Components/Navbar/Navbar";
import RestaurantGallery from "../../Components/RestaurantGallery/RestaurantGallery";
import { allRestaurants } from "../../Redux/Features/Restaurant/Selector/Selector";
import TabComponent from "./TabComponents";

const Restaurant = () => {
  const [type, setType] = useState('order');
  const restaurants = useSelector(allRestaurants);
  const [restaurant, setrestaurant] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    setrestaurant(restaurants.filter(e => e._id === id)[0]);
  }, [restaurants])

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full mx-auto lg:px-20">
        <RestaurantGallery requiredRestaurant={restaurant}/>
        <div className="sticky top-0 z-10">
          <FoodTab type={type} setType={setType} />
        </div>
        <TabComponent type={type} />
      </div>
    </>
  );
};

export default Restaurant;