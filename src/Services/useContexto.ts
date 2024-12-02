import React, { useContext } from 'react'
import { ContextoProviderTo } from './Contexto'



const useContexto = () => {
  const { state, llenarDatos } = useContext(ContextoProviderTo)
  return { state, llenarDatos }

}

export default useContexto