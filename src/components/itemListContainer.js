import "./itemListContainer.css";

export const Body = (props)=>{

    return <div className = "body">
        <p>{props.greeting}, soy {props.nombre} y tengo {props.edad} años</p>

    </div>
}