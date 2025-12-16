import React from 'react';
import './cart.css';
import { 
  FaSearch, FaFilter, FaMapMarkerAlt, FaHiking, FaCampground, FaHistory, 
  FaUtensils, FaEdit, FaTimes, FaSortAmountDown, FaTree, FaBicycle, FaWalking 
} from 'react-icons/fa';

import mapPlaceholder from '../../assets/map.png';
import mountainBg from '../../assets/khinaliq.png';

const selectedRoutes = [
  { id: 1, icon: <FaCampground />, title: 'Mountain Camp', location: 'Quba Park', duration: '2h' },
  { id: 2, icon: <FaCampground />, title: 'Mountain Camp', location: 'Quba Park', duration: '1h 50m' },
  { id: 3, icon: <FaHistory />, title: 'Historic Downtown', location: 'Quba Park', duration: '2h 30m' },
  { id: 4, icon: <FaUtensils />, title: 'Lakeside Picnic', location: 'Quba Park', duration: '2h 40m' },
];

const categories = [
  { name: 'Historical', icon: <FaHistory /> },
  { name: 'Nature', icon: <FaTree /> },
  { name: 'Adventure', icon: <FaHiking /> },
  { name: 'Food', icon: <FaUtensils /> },
  { name: 'Historical', icon: <FaHistory /> },
  { name: 'Historical', icon: <FaHistory /> },
  { name: 'Historical', icon: <FaHistory /> },
  { name: 'Historical', icon: <FaHistory /> },
];

const recommendedRoutes = [
  { id: 1, title: 'Hiking', img: mountainBg, icon: <FaHiking /> },
  { id: 2, title: 'Nature Routes', img: mountainBg, icon: <FaTree /> },
  { id: 3, title: 'Walking Tours', img: mountainBg, icon: <FaWalking /> },
  { id: 4, title: 'Cycling Routes', img: mountainBg, icon: <FaBicycle /> },
];

const Cart = () => {
  return (
    <div className="customize-tour-container">
      
      <header className="tour-header">
        <h1>Build Your Own Route</h1>
        <div className="filters-bar">
          <div className="sort-by">
            <select>
              <option>Sort by price</option>
              <option>Sort by duration</option>
              <option>Sort by popularity</option>
            </select>
            <FaSortAmountDown className="select-icon" />
          </div>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search by name or type" />
          </div>
          <button className="filter-btn">
            <FaFilter />
            Filters
          </button>
        </div>
      </header>

      <nav className="category-filters">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`category-tag ${category.name === 'Nature' ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </nav>

      <main className="tour-main-content">
        
        <section className="route-selection">
          <h2>Route Selections</h2>
          <ul className="route-list">
            {selectedRoutes.map(route => (
              <li key={route.id} className="route-item">
                <div className="route-icon">{route.icon}</div>
                <div className="route-details">
                  <h3>{route.title}</h3>
                  <p><FaMapMarkerAlt /> {route.location}</p>
                </div>
                <div className="route-duration">{route.duration}</div>
                <div className="route-actions">
                  <button className="icon-btn edit-btn"><FaEdit /></button>
                  <button className="icon-btn remove-btn"><FaTimes /></button>
                </div>
              </li>
            ))}
          </ul>

          <div className="route-summary">
            <span className="total-duration">Duration: <strong>8 h</strong></span>
            <span className="total-cost">Cost: <strong>$120</strong></span>
          </div>
          
          <div className="page-actions">
            <button className="btn btn-secondary">Back to Tour Details</button>
            <button className="btn btn-primary">Continue to Payment</button>
          </div>
        </section>

        <aside className="map-display">
          <img src={mapPlaceholder} alt="Route Map" className="map-image" />
          <div className="map-actions">
            <button className="btn btn-secondary">Clear Route</button>
            <button className="btn btn-primary">Add a Route</button>
          </div>
        </aside>
      </main>

      <footer className="recommended-section">
        <h2>Recommended routes for you</h2>
        <div className="recommended-list">
          {recommendedRoutes.map(route => (
            <div 
              key={route.id} 
              className="recommended-card" 
              style={{ backgroundImage: `url(${route.img})` }}
            >
              <div className="card-content">
                <span className="card-icon">{route.icon}</span>
                <h3>{route.title}</h3>
                <button className="btn btn-add">Add a Route</button>
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Cart;