import React, { useEffect, useState } from 'react'
import HeroSection from '../../component/Home/HeroSection'
import Category from '../../component/Home/Category'
import FreshProduct from '../../component/Home/FreshProduct'
import Services from '../../component/Home/Services'
import Blog from '../../component/Home/Blog'
import Newsletter from '../../component/Home/Newsletter'
import NewProduct from '../../component/Home/NewProduct'
import DiscoverItem from '../../component/Home/DiscoverItem'
import fruiticon from "../../assets/img/fruiticon.png"
import bakeryicons from "../../assets/img/bakeryicons.png"
import vagitableicons from "../../assets/img/Vagitableicons.png"
import dairyicon from "../../assets/img/dairyicon.png"
import spicesicon from "../../assets/img/spicesicon.png"

function Homepage() {
      const category = [
        {
            name:"Fruits",
            icon:fruiticon
        },
           {
            name:"Bakerys",
            icon:bakeryicons
        },
           {
            name:"Vagitables",
            icon:vagitableicons
        },
           {
            name:"Dairy & Milk",
            icon:dairyicon
        },
           {
            name:"Snacks & Spices",
            icon:spicesicon
        },

    ];
    const [selectedCategory ,setselectedCategory] = useState(null);

  return (
    <div>
      <div>
        <HeroSection/>
        <Category category={category}  setselectedCategory={setselectedCategory}/>
        <NewProduct selectedCategory={selectedCategory}/>
        <FreshProduct />
        <Services/>
        <Blog/>
        <DiscoverItem/>
        <Newsletter/>
      </div>
    </div>
  )
}

export default Homepage