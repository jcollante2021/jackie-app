import React from 'react'
import Card from '../card/Card'

export default function ListContainer({productos}) {
    return (
        <>
            {productos.map(productos => {
                return <Card productos={productos} key={productos.id}/>
            })
            }
        </>
    )
}
