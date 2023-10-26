import { HomeComponentProps } from "@/types/HomeComponentTypes";
import Link from "next/link";
import React from "react";

function Home({ id, title, img, roomCount, meterage, price, code, desc }:HomeComponentProps): ReturnType<React.FC> {
  return (
    <>
      <div className="card">
        <img src={img} alt="House" className="card__img" />
        <h5 className="card__title">آپارتمان خانوادگی مدرن</h5>
        <svg className="card__like">
          <use xlinkHref="/img/sprite.svg#icon-heart-full"></use>
        </svg>
        <div className="card__details">
          <svg className="card__icon">
            <use xlinkHref="/img/sprite.svg#icon-map-pin"></use>
          </svg>
          <p className="card__text">{title}</p>

          <svg className="card__icon">
            <use xlinkHref="/img/sprite.svg#icon-profile-male"></use>
          </svg>
          <p className="card__text">{roomCount} اتاق</p>

          <svg className="card__icon">
            <use xlinkHref="/img/sprite.svg#icon-expand"></use>
          </svg>
          <p className="card__text">{meterage} متر مربع</p>

          <svg className="card__icon">
            <use xlinkHref="/img/sprite.svg#icon-key"></use>
          </svg>
          <p className="card__text">{price.toLocaleString()} میلیون تومان</p>
        </div>

        <Link href={`/homes/${id}`} className="btn btn-brown btn-card">
          مشاهده ملک
        </Link>
      </div>
    </>
  );
}

export default Home;
