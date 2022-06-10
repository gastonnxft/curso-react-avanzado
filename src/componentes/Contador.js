import React from 'react';
import Contador from './Contador.js'
import './Contador.css'


import { connect } from 'react-redux';
import { accionDecremento, accionDecrementoAsync, accionIncremento, accionIncrementoAsync } from '../state/actions.js';


  

class Contador extends React.Component {

    render() {
    
        let { contador, decrementar, incrementar, decrementarAsync, incrementarAsync } = this.props

        return (
            <div className="Contador">
                <div className="container mt-3">
                    <div className="jumbotron">
                        <h2>Contador SAGA</h2>
                        <br />
                        <h3>Contador: {contador}</h3>
                        <button className='btn btn-info mr-3' onClick={decrementar}>
                            DECREMENTAR_SYNC
                        </button>

                        <button className='btn btn-info mr-3' onClick={incrementar}>
                            INCREMENTAR_SYNC
                        </button>
                        <br />

                        <button className='btn btn-warning mt-3 mr-3' onClick={decrementarAsync}>
                            DECREMENTAR_ASYNC
                        </button>

                        <button className='btn btn-warning mt-3 mr-3' onClick={incrementarAsync}>
                            INCREMENTAR_ASYNC
                        </button>
                        <br />

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    contador : state.contador
})

const mapDispatchToProps = dispatch => ({
     
    decrementar : () => {
        console.log('/n-------PROP decrementar ---------')
        console.log('1 dispatch -> decrementar')
        dispatch(accionDecremento(1))
    },
    incrementar : () => {
        console.log('/n-------PROP incrementar ---------')
        console.log('1 dispatch -> incrementar')
        dispatch(accionIncremento(1))
    },
    decrementarAsync : () => {
        console.log('/n-------PROP decrementarAsync ---------')
        console.log('1 dispatch -> decrementarAsync')
        dispatch(accionDecrementoAsync(1))
    },
    incrementarAsync : () => {
        console.log('/n-------PROP incrementarAsync ---------')
        console.log('1 dispatch -> incrementarAsync')
        dispatch(accionIncrementoAsync(1))
    },
})

// export default Noticias
export default connect(mapStateToProps,mapDispatchToProps)(Contador)
