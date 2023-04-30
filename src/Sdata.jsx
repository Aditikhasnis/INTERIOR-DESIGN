import newbie from "../src/Images/home.jpeg";
import customisable from "../src/Images/Customisable.jpg";
import budget from "../src/Images/BudgetFriendly.jpg";
import cleaning from "../src/Images/HouseCleaning.png";
import rooms from "../src/Images/rooms.png";
import paint from "../src/Images/PaintHome.jpeg";

const Sdata = [
    {
        imgsrc:newbie,width:200,height:200,
        title: "Newbie",
        text:"A pre-designed package selectedly crafted and hand picked by experts with more than 10 years of experience in Interior Designing.",
        link:"/Contact",
        price:"₹50,000",
    },
    {
        imgsrc:rooms,width:200,height:200,
        title:"Selected Rooms",
        text:"Design only selected rooms or revamp your favourite room.",
        link:"/Contact",
        price:"₹30,000",
    },
    {
        imgsrc:budget,width:200,height:200,
        title:"I dont want to spend much",
        text:"Budget-friendly and highly saving package with elegant and clean interiors.",
        link:"/Contact",
        price:"₹20,000",
    },
    {
        imgsrc:customisable,width:200,height:200,
        title:"My house, I will customize everything",
        text:"Customize each corner of your house to your liking, we'll only come with tools and paints. You guide us entirely.",
        link:"/Contact",
        price:"₹80,000",
    },
    {
        imgsrc:paint,width:200,height:200,
        title:"Just paint my house again please",
        text:"White wash and re painting services.",
        link:"/Contact",
        price:"₹50,000",
    },
    {
        imgsrc:cleaning,width:200,height:200,
        title:"Just clean my mess and go",
        text:"Whether its festival cleaning or guests coming home? We've got you covered.",
        link:"/Contact",
        price:"₹15,000",
    },
];

export default Sdata;