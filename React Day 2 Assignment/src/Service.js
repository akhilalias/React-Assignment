function Service(props)
{
    return(
        <div className="card">
        <div className="simage">
            <img className="waimg" src={props.img} alt="react"/>
        </div>

        <div className="stitle">
            <h1>{props.title}</h1>
        </div> 

        <div className="sdesc">
            <p>{props.desc}</p>
        </div>

        <div className="sbtn-main">
            <button className="sbtn">Read More</button>
        </div>
         
        </div>
    )
}

export default Service;