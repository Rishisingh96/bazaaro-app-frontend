import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import React, { useState } from "react";
import { colors } from "../../../data/Filter/color";
import { useSearchParams } from "react-router-dom";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState
  (false);
  const [expendBrand, setExpendBrand] = useState(false);

  const [searchParam, setSearchParams] = useSearchParams();

  const handleColorToggle = () =>{
    setExpendColor(!expendColor);
  }
  const handleExpendColor = () =>{
    setExpendColor(!expendColor);
  }

  const updateFilterParams = (e:any) =>{
    const {value, name} = e.target;
    if(value){
      searchParam.set(name, value);
    }else{
      searchParam.delete(name);
    }
    setSearchParams(searchParam);
  }

  const clearAllFilters = () =>{
    console.log("clear all filters", searchParam)
    searchParam.forEach((value:any, key:any) =>{
      searchParam.delete(key);
    });
    setSearchParams(searchParam);
  }
  
  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button
          size="small"
          className="text-teal-600 cursor-pointer font-semibold"
          onClick={clearAllFilters}
        >
          clear
        </Button>
      </div>
      <Divider />

      <div className="px-9 space-x-6">
         <section>
            <FormControl>
        <FormLabel 
         sx={{
          fontSize:"16px",
          fontWeight:"bold",
          color:teal[500],
          pb:"14px"
        }}
        className="text-2xl font-semibold"
        id="color"
        >Color</FormLabel>
       
        <RadioGroup
          aria-labelledby="color"
          defaultValue=""
          name="color"
          onChange={updateFilterParams}
        >
        {colors.slice(0, expendColor?colors.length:5).map((item) => (
          <FormControlLabel
            key={item.name}
            value={item.name}
            control={<Radio />}
            label={
              <div className="flex items-center gap-3">
                <p>{item.name}</p>
                <p
                  style={{ backgroundColor: item.hex }}
                  className={`h-5 w-5 rounded-full ${
                    item.name === "White" ? "border" : ""
                  }`}
                ></p>
              </div>
            }
          />
        ))}

        </RadioGroup>
      </FormControl>
      <div>
        
        <button onClick ={handleColorToggle}className="text-primary-color cursor-pointer hover:text-teal-900">
          {expendColor ? "hide":`${colors.length - 5} more` }
        </button>
      </div>
        </section>
        {/* Price */}
         <Divider />
        <section>
          <FormControl> 
        <FormLabel
         sx={{
          fontSize:"16px",
          fontWeight:"bold",
          color:teal[600],
          pb:"14px"
        }}
        className="text-2xl font-semibold " id="price">
          Price
          </FormLabel>
          
          <RadioGroup
          name="price"
          onChange={updateFilterParams}
          aria-labelledby="price"
          defaultValue=""
          >
            {price.map((item, index)=>(
              <FormControlLabel
              key={item.name}
              value={item.value}
              control={<Radio size="small"/>}
              label={item.name}
              />
            ))}
          </RadioGroup>
          </FormControl>
        </section>

        {/* Discount */}
        <Divider />
        <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              pb: "14px",
              color: teal[600],
            }}
            className="text-2xl font-semibold"
            id="brand"
          >
            Discount
          </FormLabel>

          <RadioGroup
            name="discount"
            onChange={updateFilterParams}
            aria-labelledby="brand"
            defaultValue=""
          >
            {discount.map((item, index) => {
              return (
                <FormControlLabel
                  key={item.name}
                  value={item.value}
                  control={<Radio size="small" />}
                  label={item.name}
                />
              );
            })}
           
          </RadioGroup>
        </FormControl>
      </section>

      </div>
    </div>
  );
};

export default FilterSection;
