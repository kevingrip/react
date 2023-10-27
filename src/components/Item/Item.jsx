import { useNavigate } from "react-router-dom"

const Item = ({ id, name, imagen, price, description }) => {

    const navigate = useNavigate()

    return (
        
        <div className="card mb-4" style={{ width: '18rem' }}>
            <div>
                <img className="card-img-top"  src={imagen} alt="Card image cap"/>
            </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h2>${price}</h2>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary" onClick={()=>navigate(`/item/${id}`)}>Ver detalle</a>
                </div>
        </div>


        // <div>
        //     <h2>{name}</h2>
        //     <img src={imagen} style={{ width: 100 }} />
        //     <h2>${price}</h2>
        //     <p>{description}</p>
        //     <button>Agregar al carrito</button>
        // </div>
    )
}

export default Item