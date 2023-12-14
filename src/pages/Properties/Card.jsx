<<<<<<< HEAD
import house from "./images/images.png";


import React from "react";
import house from "./images/images.png";
import ellips from "./images/Ellipse 11.png";
import beds from "../../assets/icon/bed.svg"
import bath from "../../assets/icon/bath.svg"
import garage from "../../assets/icon/car.svg"
import ruler from "../../assets/icon/ruler.svg"
import size from '../../assets/icon/resize 1.svg'
import like from '../../assets/icon/3.svg'
const Card = ({ array }) => {
  return (
    <div className="flex justify-between flex-wrap gap-10 mt-3">
      {array.map((x) => {
        return ( 
          // card design 
          <div
            className=" border border-solid"
            style={{ width: "380px", height: "429px", position: "relative" }}
          >
            {/* card image  */}
            <img
              src={house}
              alt=""
              className="w-full"
              style={{ height: "220px" }}
            />
            {/* card featured and for sale */}
            <div className="flex justify-between w-full absolute top-5 px-5">
              <span
                className="flex items-center justify-center py-1.5 px-3"
                style={{
                  backgroundColor: " #0061DF",
                  color: "white",
                  fontSize: "10px",
                  borderRadius: "2px",
                }}
              >
                FEATURED
              </span>
              <span
                className="flex items-center justify-center py-1.5 px-3"
                style={{
                  backgroundColor: " #0061DF",
                  color: "white",
                  fontSize: "10px",
                  borderRadius: "2px",
                }}
              >
                FOR SALE
              </span>
            </div>
            {/* card image ellips */}
            <div className=" absolute " style={{ top: "201px", left: "320px" }}>
              <img
                src={ellips}
                className=""
                style={{ width: "38px", height: "38px" }}
                alt=""
              />
            </div>
            {/* card navbar */}
            <div>
              <p className="text-base font-semibold leading-6 ml-6 mt-6" style={{fontFamily:'Montserrat'}}>New Apartment Nice Wiew</p>
              <p className="text-sm  leading-5  ml-6 mt-1" style={{fontFamily:'Montserrat', color:'#696969'}}>Quincy St, Brooklyn, NY, USA</p>
              {/* card navbar in room */}
              <div  className="flex justify-around mt-4">
                <div className=" flex flex-col items-center text-center">
                <img src={beds} alt=""  style={{width:'19px', height:'13.6px'}}/>
                <p className="text-sm  leading-5 " style={{fontFamily:'Montserrat', color:'#696969'}}>{5} Beds</p>
                </div>
                <div className=" flex flex-col items-center text-center">
                <img src={bath} alt=""  style={{width:'19px', height:'13.6px'}}/>
                <p className="text-sm  leading-5 " style={{fontFamily:'Montserrat', color:'#696969'}}>{5} Baths</p>
                </div>
                <div className=" flex flex-col items-center text-center">
                <img src={garage} alt=""  style={{width:'19px', height:'13.6px'}}/>
                <p className="text-sm  leading-5 " style={{fontFamily:'Montserrat', color:'#696969'}}>{5} Garage</p>
                </div>
                <div className=" flex flex-col items-center text-center">
                <img src={ruler} alt=""  style={{width:'19px', height:'13.6px'}}/>
                <p className="text-sm  leading-5 " style={{fontFamily:'Montserrat', color:'#696969'}}>{5} Sq Ft</p>
                </div>
              </div>
            </div>
                 <div className="w-full border border-solid mt-4"></div>
            {/* card footer */}
            
               <div className="flex justify-between   height-full px-5 items-center">
                {/* card sena */}
                <div className="mt-1" > 
                  <del className="text-xs">$2800/mo</del>
                  <p className="text-base font-semibold">$7,500/mo</p>
                </div>
                {/* card like */}
                <div className="flex gap-4  mt-4">
                  <img src={size} alt=""  />
                  <img src={like} alt="" />
                </div>
               </div>
            
          </div>
        );
      })}

    </div>
  );
};

export default Card;
