import "./card.css"



export function Card({data}) {
  return (<div className="cardContainer">
        <div className="cardInfo">
          <div>
            <h2 >{data.name}</h2> 
            <p >
            {data.id} <br></br>
            {data.email}
            </p>
            
            </div>  
        </div>
    </div>
  );
}
