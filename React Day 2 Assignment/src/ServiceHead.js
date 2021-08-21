import Service from "./Service";

function ServiceHead(){

    const services=[
        {
            title : "HTML",
            desc : "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
            img :"https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            title : "CSS",
            desc : "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
            img :"https://cdn.pixabay.com/photo/2017/03/30/17/42/css-2189148__340.png",
        },
        {
            title:"JavaScript",
            desc:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
            img:"https://p.kindpng.com/picc/s/78-788026_illustration-for-creating-the-library-and-adding-dependencies.png",
        },
        {
            title:"React",
            desc:"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
            image:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            title:"Node.js",
            desc:"Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
            image:"https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }
        
        ];
            

    return(
        <div className="container">
            {
            services.map((service,index)=>(
            <Service title={service.title} desc={service.desc} img={service.img} />
            ))
            }
            
        </div>
    )
            
}


export default ServiceHead;