import React from 'react';
import PageContent from './PageContent';
import NavBar from './Navbar';

function Fsd(){
    const AllData=[
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
            title:"Top Differences: Full Stack Developer vs Software Engineer 2023"
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
            title:"7 Best Full-Stack Development Online Courses [2023] "
        },
        {
            image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
            title:"Long Would It Take to Be a Full Stack Developer?"
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
export default Fsd;