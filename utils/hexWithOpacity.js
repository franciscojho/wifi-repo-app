export default function hexWithOpacity(hex, opacity) {
    const opacityColor = Math.round(opacity * 255).toString(16)
    return `${hex}${opacityColor}`
}
