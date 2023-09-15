import { useState } from "react";
import { Grid } from "@mui/material";
import Avatar from "../../Assets/IMG/Avatar.jpg";
import TotalSalesImage from "../../Assets/IMG/TodaySales/TotalSales.svg";
import NewCustomersImage from "../../Assets/IMG/TodaySales/NewCustomers.svg";
import ProductSoldImage from "../../Assets/IMG/TodaySales/ProductSold.svg";
import TotalOrderImage from "../../Assets/IMG/TodaySales/TotalOrder.svg";

import "./styles.scss";

export default function TodaySales() {
  const gridItemProps = {
    xs: 6,
    sm: 6,
    md: 6,
    lg: 4,
    xl: 3,
  };

  interface SalesCardType {
    title: string;
    image: string;
    amount: string;
    tag: string;
    theme: "red" | "yellow" | "green" | "purple";
  }
  const salesCards: SalesCardType[] = [
    {
      image: TotalSalesImage,
      title: "Total Sales",
      amount: "$1k",
      tag: "+8% from yesterday",
      theme: "red",
    },
    {
      title: "Total Orders",
      image: TotalOrderImage,
      amount: "300",
      tag: "+5% from yesterday",
      theme: "yellow",
    },
    {
      title: "Product Sold",
      image: ProductSoldImage,
      amount: "5",
      tag: "+1.2% from yesterday",
      theme: "green",
    },
    {
      title: "New Customers",
      image: NewCustomersImage,
      amount: "8",
      tag: "+0.5% from yesterday",
      theme: "purple",
    },
  ];
  return (
    <div className="today-sales-container flex-col align-center justify-between">
      <div className="flex-row width-100 align-center justify-between">
        <div className="flex-col">
          <span className="fw-600 px-23 text-dark">Today's Sales</span>
          <span className="text-gray px-14">Sales Summary</span>
        </div>
        <button className="export px-13 flex-row align-center text-center text-dark pointer">
          <i className="fal fa-external-link" /> &nbsp; Export
        </button>
      </div>
      <br />
      <Grid container spacing={0} justifyContent="space-between">
        {salesCards.map((card, index) => {
          return (
            <Grid item {...gridItemProps}>
              <div
                className={`card card-${card.theme} flex-col justify-between`}
              >
                <img src={card.image} alt="" />
                <span className="text-dark fw-600 px-20">{card.amount}</span>
                <span className="text-dark-secondary px-16 fw-500">
                  {card.title}
                </span>
                <span className="text-blue-default px-12">{card.tag}</span>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
