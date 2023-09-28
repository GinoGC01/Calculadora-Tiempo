import { useRef, useState } from 'react'
import useDates from './hooks/useDates'
import './App.css'

function App() {
  const [fechaInicial, setFechaInicial] = useState('')
  const [fechaFinal, setFechaFinal] = useState('')
  const inicialDate = useRef()
  const lastDate = useRef()

  const difFecha = fechaFinal - fechaInicial

  const { años, meses, semanas, dias } = useDates({ difFecha })

  const totalAños = Math.floor(difFecha / 365)
  const totalMeses = Math.floor(difFecha / 30)
  const totalSemanas = Math.floor(difFecha / 7)

  function handleDate(e) {
    e.preventDefault()
    const valueInitialDate = new Date(inicialDate.current.value)
    const valueLastDate = new Date(lastDate.current.value)

    if (isNaN(valueInitialDate) || isNaN(valueLastDate)) {
      alert('introduzca las fechas, por favor')
    } else {
      const fechaInicial = valueInitialDate / (1000 * 60 * 60 * 24)
      const fechaFinal = valueLastDate / (1000 * 60 * 60 * 24)
      setFechaFinal(fechaFinal)
      setFechaInicial(fechaInicial)
    }
  }

  return (
    <main>
      <h1>Calculadora de años, meses, semanas y días</h1>
      <form>
        <div className="initial-date__container">
          <label htmlFor="initialDate">Fecha inicial</label>
          <input type="date" name="initialDate" ref={inicialDate} />
        </div>
        <div className="last-date__container">
          <label htmlFor="lastlDate">Fecha final</label>
          <input type="date" name="lastlDate" ref={lastDate} />
        </div>
        <button onClick={handleDate}>Calcular</button>
      </form>
      {(años > 0 || meses > 0 || semanas > 0 || dias > 0) && (
        <div className="tiempo-desglozado">
          <h3>Tiempo desglozado</h3>
          <span>
            {años < 0 ? 0 : años} años {meses} meses {semanas} semanas{' '}
            {dias - 2 < 0 ? 0 : dias - 1} dias
          </span>
        </div>
      )}
      {(totalAños > 0 || totalMeses > 0 || totalSemanas > 0 || dias > 0) && (
        <div className="tiempo-unidad">
          <strong>Días en unidad</strong>
          <ul>
            <li>{totalAños} años</li>
            <li>{totalMeses} meses</li>
            <li>{totalSemanas} semanas </li>
            <li>{difFecha} días </li>
          </ul>
        </div>
      )}
    </main>
  )
}

export default App
