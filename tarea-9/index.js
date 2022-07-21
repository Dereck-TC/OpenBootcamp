const logger = require("./logger")
const miError = (()=>{
    throw new Error("An error ocurred")
})

try {
    logger.info("Todo correcto")
} catch (error) {
    logger.error(miError())
}
