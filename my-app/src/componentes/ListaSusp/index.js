import './ListaSusp.css'

const ListaSusp = (props) => {
    return(
        <div className='Listasus'>
            <label>
                {props.label}
            </label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required}
                value={props.valor}
            >
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>

    );
}

export default ListaSusp