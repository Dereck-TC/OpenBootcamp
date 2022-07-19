const today = new Date()
console.log(today)
const datenc = new Date(2000,08,15)
console.log(datenc)
const mayor = today > datenc
console.log(mayor)
const fchNac = datenc.getDate()
console.log(fchNac)
const MonNac = datenc.getMonth() + 1
console.log(MonNac)
const YearNac = datenc.getFullYear()
console.log(YearNac)
