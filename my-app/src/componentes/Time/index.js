import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {

        return(
            (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
                    
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='colabs'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria}
                nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} alt={colaborador.nome} key={colaborador.nome}
                />)}
            </div>
            
        </section>
        )
    
}

export default Time