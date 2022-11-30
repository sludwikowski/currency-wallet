export const validateForm = ({ date, currency, quantity, price }) => {
  const errors = []

  const currPattern = /^[A-Z]{3}$/
  if (!currPattern.test(currency)) {
    errors.push('Wprowadź poprawną wartość (kod walutowy)')
  }

  if (!(quantity > 0)) {
    errors.push('Podana wartość musi być większa od 0')
  }

  const datePattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
  if (!datePattern.test(date)) {
    errors.push('Popraw wprowadzoną datę')
  }

  if (!(price > 0)) {
    errors.push('Podana wartość musi być większa od 0')
  }

  return errors
}
