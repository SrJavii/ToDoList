import { useState } from "react"

export default function Listado({item, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.titulo);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickActualizar(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="listadoActualizarForm" onSubmit={handleSubmit}>
                <input type="text" className="listadoInput" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClickActualizar}>Actualizar</button>
            </form>
        );
    }

    function ListadoElement(){
        return (
            <div className="listadoInfo">
                {item.titulo} 
                <button onClick={() => setIsEdit(true)}>Editar</button>
                <button onClick={(e) => onDelete(item.id)}>Eliminar</button>
            </div>
        )
    }

    return (
        <div className="listado">
            {isEdit ? <FormEdit/> : <ListadoElement/>}
        </div>

    )
}