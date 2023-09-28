export default function useDates({ difFecha }) {
  const años = Math.floor(difFecha / 365)
  const meses = Math.floor((difFecha % 365) / 30)
  const semanas = Math.floor(((difFecha % 365) % 30) / 7)
  const dias = Math.floor(((difFecha % 365) % 30) % 7)
  return {
    años,
    meses,
    semanas,
    dias,
  }
}
