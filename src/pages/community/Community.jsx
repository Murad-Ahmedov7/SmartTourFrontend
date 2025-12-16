import React from 'react';
import './community.css';
 
import avatar from '../../assets/sevda.jpg'; 
import shekiPostImage from '../../assets/shaki.jpg';  
 

const CommunityPost = ({ avatar, user, time, image, likes, comments }) => (
    <div className="community-post-card">
        <div className="community-post-header">
            <img src={avatar} alt={user} className="community-avatar" />
            <div className="community-post-info">
                <span className="community-username">{user}</span>
                <span className="community-post-time">{time}</span>
            </div> 
            <button className="community-more-options-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/><path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" fill="currentColor"/><path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" fill="currentColor"/></svg>
            </button>
        </div>
        
        <div className="community-post-body">
            <img src={image} alt="Şəki postu" className="community-post-image" />
        </div>
        
        <div className="community-post-footer">
            <span className="community-likes">❤️ {likes}</span>
            <span className="community-comments">💬 {comments}</span>
        </div>
    </div>
);

 

const Community = () => {
     
    const postData = {
        avatar: avatar,
        user: "Sevda M. shared post about Shaki",
        time: "5 mins",
        image: shekiPostImage,
        likes: 300,
        comments: 42
    };
 
    const trendingTags = [
        '#Adventure', '#BeachLife', '#NatureLovers', '#Şəki',
        '#HiddenGems', '#LuxuryTravel', '#Hiking', '#Naftalan',
        '#HiddenGems', '#Backpacking', '#Hiking', '#Xinaliq'
    ];


    return (
        <div className="community-page-container"> 
            
            <h1 className="community-main-title">Community</h1>

            <div className="community-layout">
                 
                <div className="community-feed-panel">
                     
                    <div className="community-search-filter-bar">
                        <div className="community-filter-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M4 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="2" fill="currentColor"/><circle cx="16" cy="16" r="2" fill="currentColor"/></svg>
                            Filters
                        </div>
                        <input type="text" placeholder="Search by trending" className="community-search-input" />
                    </div>
                     
                    <div className="community-posts-list">
                        <CommunityPost {...postData} /> 
                        <CommunityPost {...postData} />
                    </div>
                </div>
                 
                <aside className="community-sidebar">
                     
                    <div className="community-trending-section">
                        <h2>Trending movements and techniques</h2>
                        <div className="community-tags-grid">
                            {trendingTags.map((tag, index) => (
                                <span key={index} className="community-hashtag-pill">{tag}</span>
                            ))}
                        </div>
                    </div>
                     
                    <div className="community-rate-tour-section">
                        <h2>Rate your tour</h2>
                        <textarea placeholder="Share your travel story..." className="community-rate-textarea" />
                        
                        <div className="community-attachment-share-group">
                            <div className="community-attachments">
                                <button className="community-attach-btn">
                                    <span className="icon">📷</span> Add photo
                                </button>
                                <button className="community-attach-btn">
                                    <span className="icon">📹</span> Add video
                                </button>
                            </div>
                            <button className="community-share-button">Share</button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Community;