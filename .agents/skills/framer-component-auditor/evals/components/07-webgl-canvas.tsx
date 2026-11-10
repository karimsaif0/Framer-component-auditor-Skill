import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Particles(props) {
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = ref.current!
        const gl = canvas.getContext("webgl")!
        canvas.width = canvas.clientWidth * window.devicePixelRatio
        canvas.height = canvas.clientHeight * window.devicePixelRatio
        const data = new Float32Array(props.count * 2)
        const draw = () => {
            for (let i = 0; i < data.length; i++) data[i] = Math.random()
            gl.clear(gl.COLOR_BUFFER_BIT)
            requestAnimationFrame(draw)
        }
        draw()
    }, [props.count])

    return <canvas ref={ref} style={{ ...props.style, width: "100%", height: "100%" }} />
}

Particles.defaultProps = { count: 1000 }

addPropertyControls(Particles, {
    count: { type: ControlType.Number, title: "Count", defaultValue: 1000, min: 1, max: 5000000 },
})
