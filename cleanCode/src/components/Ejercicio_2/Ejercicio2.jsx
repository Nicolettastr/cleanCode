// Tenemos un cine-teatro con una única sala. Todas las filas y todas las butacas tienen buena visibilidad, siendo de mejor visibilidad cuanto más cerca del escenario. Tenemos 9 filas con 10 butacas por fila

// Para cada butaca se configuran los datos: número de fila, asiento, ocupado (booleano).

// Nuestro teatro no tiene pasillos al medio, y las butacas centrales son la 1 y la 2, estando a la izquierda los impares y a la derecha los pares.

// En nuestra aplicación de ejemplo podremos precargar la lista de butacas ocupadas.

// En caso de vender más entradas conjuntas debemos buscar la manera de que el sistema nos permita asignar las mejores butacas libres. Las mejores butacas serán aquellas que están juntas, lo más cerca del escenario/pantalla y lo más centradas posibles.

// crear 9 filas con 10 butacas
// configurar numero de fila, numero de asiento y si esta ocupado o no
// butacas centrales 1 y 2
// butacas izquierda impares
// butacas derechas pares
// precargar butacas ocupadas
// asignacion de mejores butacas libres
// mejores: juntas, centradas, cerca de pantalla

import React, { useEffect, useState } from 'react'
import Button from '../button/Button'

const Ejercicio2 = () => {

    const rows = 9
    const seats = 10
    const [quantity, setQuantity] = useState(0)
    const [cinema, setCinema] = useState([])
    const [bestSeats, setBeastSeats] = useState([])

    useEffect(() => {
        createCinema()
    }, [])

    const createCinema = () => {
        const createSeats = Array.from({length: rows}, (_, rowIndex) => 
            Array.from({length: seats}, (_, seatsIndex) => ({
                id: parseInt(Math.random() * Date.now()),
                row: rowIndex + 1,
                seat: seatsIndex + 1,
                occupied: false
            }))    
        )

        setCinema(createSeats)
    }


    const getOccupiedSeats = () => {
        const occupiedSeats = cinema.map((row) => row.map((seat) => {
            if(seat.occupied === true) {
                console.log('true')
            } else {
                console.log('No hay asientos ocupados')
            }
        }))
        return occupiedSeats
    }

    const getBestSeatsAvailable = (quantity) => {

        if(!quantity || quantity === undefined || quantity === null || isNaN(quantity)) {
            return alert('Quantity needs to be a number')
        }

        const bestSeats = cinema.reduce((result, seats) => {
            const adjacentSeats = seats.reduce((adjacent, seat) => {
                if(!seat.occupied) {
                    adjacent.push(seat);
                } else {
                    adjacent = [];
                }

                return adjacent;
            }, []);

            if(adjacentSeats.length >= quantity) {
                result.push(...adjacentSeats.slice(0, quantity));
            }
            
            return result
        }, [])

        bestSeats.length === quantity ? bestSeats : [];

        setBeastSeats(bestSeats)
    }

    console.log(bestSeats)

    const handleValue = (event) => {
        setQuantity(event.target.value)
    }

    const handleSeat = (id, quantity) => {
        console.log(id)
    }

    console.log(quantity)
    console.log(cinema)


  return (
    <>
        <input type="text" onChange={(event) => handleValue(event)} value={quantity}/>
        <button onClick={() => getBestSeatsAvailable(quantity)}>How many are seats do you want?</button>
        <button onClick={getOccupiedSeats}>b</button>
        <div>
            {cinema.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.filter((seat) => {
                        if(seat.butaca % 2 !== 0) {
                            <Button onClick={() => handleSeat(seat)} className={'seat'}/>
                        }
                    })}
                </div>
            ))}
        </div>
    </>
  )
}

export default Ejercicio2