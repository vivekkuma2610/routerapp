import React from 'react';
import PageContent from './PageContent';
import NavBar from './Navbar';

function Datascience(){
    const AllData=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
            title:"Top Product-Based Companies for Data Science Freshers"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-10-Data-Science-Tools.jpg",
            title:"Top 10 Data Science Tools in 2023"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
            title:"Best Data Science Books to Learn 2023"
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

export default Datascience;