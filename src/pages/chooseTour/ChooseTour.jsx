import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./chooseTour.css";

import quba from "../../assets/quba.png";
import goygol from "../../assets/goygol.jpg";
import baku from "../../assets/flameTowers.jpg";
import qobustan from "../../assets/qobustan.jpg";

const TourCard = ({ image, title, days, price, tag, onClick }) => (
  <div className="tour-card-item" onClick={onClick}>
    {" "}
    <div className="card-image-container">
      {" "}
      <img src={image} alt={title} className="card-image" />{" "}
      <button className="bookmark-button" aria-label="Kaydet">
        {" "}
        <svg
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20.5739C19 20.8988 18.6657 21.1197 18.3741 20.9754L12 17.8931L5.62594 20.9754C5.33433 21.1197 5 20.8988 5 20.5739V4Z" />{" "}
        </svg>{" "}
      </button>{" "}
      <div className="rating-pill">
        {" "}
        <span className="rating-star">★</span> 4.8{" "}
      </div>{" "}
    </div>{" "}
    <div className="card-content">
      {" "}
      <h4 className="card-title">{title}</h4>{" "}
      <p className="card-details">
        {days} | starting from {price}
      </p>{" "}
      <div className={`tag-button ${tag.toLowerCase().replace(" ", "-")}`}>
        {" "}
        {tag}{" "}
      </div>{" "}
      <button className="view-details-button"> View details </button>{" "}
    </div>{" "}
  </div>
);

const ChooseTour = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carouselRef = useRef(null);

  const navigate = useNavigate();

  const CARDS_PER_PAGE = 4;

  const toursData = [
    {
      id: 1,
      image: quba,
      title: "Quba Mountain",
      days: "2 days / 1 night",
      price: "180 azn",
      tag: "Mountain Tour",
    },
    {
      id: 2,
      image: goygol,
      title: "Lake Goygol",
      days: "2 days / 1 night",
      price: "99 azn",
      tag: "Lake Tour",
    },
    {
      id: 3,
      image: baku,
      title: "Baku, Azerbaijan",
      days: "1-5 days",
      price: "50 azn",
      tag: "City Tour",
    },
    {
      id: 4,
      image: qobustan,
      title: "Qobustan",
      days: "8 hours",
      price: "79 azn",
      tag: "Historical",
    },

    {
      id: 5,
      image: quba,
      title: "Quba Valley Tour",
      days: "2 days / 1 night",
      price: "180 azn",
      tag: "Mountain Tour",
    },
    {
      id: 6,
      image: goygol,
      title: "Absheron Drylands",
      days: "2 days",
      price: "36 azn",
      tag: "Dry Tour",
    },
    {
      id: 7,
      image: baku,
      title: "Old City & Flame Towers",
      days: "1-5 days",
      price: "50 azn",
      tag: "City Tour",
    },
    {
      id: 8,
      image: qobustan,
      title: "Qobustan & Mud Volcanoes",
      days: "8 hours",
      price: "79 azn",
      tag: "Historical",
    },

    {
      id: 9,
      image: quba,
      title: "Shahdag Ski Resort",
      days: "3 days / 2 night",
      price: "250 azn",
      tag: "Mountain Tour",
    },
    {
      id: 10,
      image: goygol,
      title: "Goygol National Park",
      days: "1 day",
      price: "65 azn",
      tag: "Lake Tour",
    },
    {
      id: 11,
      image: baku,
      title: "Baku Night Life",
      days: "2 days",
      price: "80 azn",
      tag: "City Tour",
    },
    {
      id: 12,
      image: qobustan,
      title: "Atəşgah & Yanar Dağ",
      days: "4 hours",
      price: "40 azn",
      tag: "Historical",
    },
  ];

  const totalPages = Math.ceil(toursData.length / CARDS_PER_PAGE);

  const scrollToPage = useCallback((page) => {
    if (carouselRef.current) {
      const cardContainer = carouselRef.current;
      const firstCard = cardContainer.querySelector(".tour-card-item");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const style = window.getComputedStyle(cardContainer);
      const gap = parseInt(style.gap) || 20;

      const targetIndex = (page - 1) * CARDS_PER_PAGE;

      const scrollDistance = targetIndex * (cardWidth + gap);

      cardContainer.scrollTo({
        left: scrollDistance,
        behavior: "smooth",
      });
      setCurrentPage(page);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage % totalPages) + 1;
        scrollToPage(nextPage);
        return nextPage;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [scrollToPage, totalPages]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardContainer = carouselRef.current;
      const firstCard = cardContainer.querySelector(".tour-card-item");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const style = window.getComputedStyle(cardContainer);
      const gap = parseInt(style.gap) || 20;

      const cardPosition = Math.round(scrollLeft / (cardWidth + gap));
      const activePage = Math.min(
        Math.floor(cardPosition / CARDS_PER_PAGE) + 1,
        totalPages
      );

      if (activePage !== currentPage) {
        setCurrentPage(activePage);
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/aboutTour`);
  };

  return (
    <div className="page-container">
      <header className="tour-header">
        {" "}
        <div className="back-button" onClick={() => navigate(-1)}>
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M15 18L9 12L15 6"
              stroke="#007bff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
          <span className="back-text">Back</span>{" "}
        </div>{" "}
        <h1 className="header-title">Choose your tour</h1>{" "}
        <div className="header-placeholder"></div>{" "}
      </header>{" "}
      <div className="controls-bar">
        {" "}
        <div className="dropdown">
          {" "}
          <label htmlFor="sort-price" className="dropdown-label">
            Sort by price
          </label>{" "}
          <select id="sort-price" className="dropdown-select">
            {" "}
            <option value="asc">↑</option> <option value="desc">↓</option>{" "}
          </select>{" "}
        </div>{" "}
        <button className="filters-button">
          {" "}
          Filters{" "}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M4 8H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />{" "}
            <path
              d="M4 16H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />{" "}
            <circle cx="8" cy="8" r="2" fill="currentColor" />{" "}
            <circle cx="16" cy="16" r="2" fill="currentColor" />{" "}
          </svg>{" "}
        </button>{" "}
      </div>{" "}
      <main
        className="tours-carousel"
        ref={carouselRef}
        onScroll={handleScroll}
      >
        {" "}
        {toursData.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            title={tour.title}
            days={tour.days}
            price={tour.price}
            tag={tour.tag}
            onClick={() => handleCardClick(tour.id)}
          />
        ))}{" "}
      </main>{" "}
      <div className="pagination">
        {" "}
        {Array.from({ length: 3 }, (_, i) => i + 1).map((page) => (
          <span
            key={page}
            className={`page-number ${currentPage === page ? "active" : ""}`}
            onClick={() => scrollToPage(page)}
          >
            {page}
          </span>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default ChooseTour;
