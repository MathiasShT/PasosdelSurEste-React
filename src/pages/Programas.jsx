import React from 'react'
import ProgramCard from '../ProgramCard'
import ProgramCardContainer from './ItemListContainer'

export default function Programas() {
  return (
    <div className="p-4 grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        <ProgramCardContainer/>
    </div>
  )
}
