import React from 'react';
import PageContent from './PageContent';
import NavBar from './Navbar';

function CyberSecurity(){
    const AllData=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
            title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            title:"What Is Hacking? Types of Hacking & More"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
            title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"
        }
       
    ]
    return (
        // <div>
        // <NavBar/>
        // <hr></hr>
        <div class="page-container">
            <div class="card-container">
            {AllData.map((data,index)=>(
                <PageContent  Key={index} image ={data.image} title ={data.title}/>
            ))}
            </div>
        </div>
        // </div>
    );
};

export default CyberSecurity;