import React from 'react';
import PageContent from './PageContent';
import NavBar from './Navbar';

function Career(){
    const AllData=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp",
            title:"Top 13 Product Based Companies for AI Freshers"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp",
            title:"Best 11 Product-Based Companies for Product Managers in India"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp",
            title:"Best Product-Based Companies for Game Developers in 2023"
        }
       
    ]
    return (
      
        <div class="page-container">
            <div class="card-container">
            {AllData.map((data,index)=>(
                <PageContent  Key={index} image ={data.image} title ={data.title}/>
            ))}
            </div>
        </div>
    );
};

export default Career;