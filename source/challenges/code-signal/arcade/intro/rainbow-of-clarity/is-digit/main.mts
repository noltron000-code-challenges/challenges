const isDigitWithRegex = (symbol: string) => symbol.match(/^\d$/) != null
const isDigitWithIsNaN = (symbol: string) => !isNaN(parseInt(symbol))

export default isDigitWithIsNaN
