const logger = require("./logger")
const miError = (()=>{
    throw new Error("An error ocurred")
})

try {
    miError()
} catch (error) {
    logger.error(error.toString())
}
