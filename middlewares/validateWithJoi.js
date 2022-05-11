import withJoi from "next-joi"
import reduceErrorMessage from "utils/reduceErrorMessage"

export default withJoi({
    onValidationError: (_, res, err) => {
        return res.status(400).json({ error: reduceErrorMessage(err) })
    },
})
