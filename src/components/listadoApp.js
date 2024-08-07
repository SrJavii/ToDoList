import { useState } from "react";
import Listado from "./listado";

import "./listadoApp.css";

export default function ListadoApp(){

    const [titulo, setTitulo] = useState("Hola");
    const [listado, setListado] = useState([]);

    function handleChange(e){
        const value=e.target.value;

        setTitulo(value);
    }

    function handleSubmit(e){
        e.preventDefault();

        const nuevoListado = {
            id : crypto.randomUUID(),
            titulo : titulo,
            completado : false
        };

        setListado(listado => [...listado, nuevoListado]);

        setTitulo("");
    }

    function handleUpdate(id, value){
        const temp =[...listado];
        const item = temp.find(item => item.id == id);
        item.titulo = value;
        setListado(temp);
    }

    function handleDelete(id){
        const temp = listado.filter(item => item.id != id)

        setListado(temp);
    }

    return (
        <div className="listContainer">
            <form className="listForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="listInput" value={titulo} />
                <input type="submit" onClick={handleSubmit} value="Crear Listado" className="listButton"/>
            </form>

            <div className="listsContainer">
                {listado.map((item) => (
                    <Listado key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </div>
        </div>
    );
}
