export default function reduceErrorMessage(err) {
    return err.details.reduce((acc, curr) => {
        const message = curr.message.replace(/"/g, "")
        if (acc) acc += `; ${message}`
        else acc += message
        return acc
    }, "")
}
