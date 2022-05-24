import path from "path"
import DatauriParser from "datauri/parser"

const parser = new DatauriParser()

export default function formatBufferTo64(img) {
    return parser.format(path.extname(img.originalname).toString(), img.buffer)
}
