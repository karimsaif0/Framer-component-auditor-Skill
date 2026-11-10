import { useEffect, useState } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Counter(props) {
    const { start, style } = props
    const isStatic = useIsStaticRenderer()
    const [n, setN] = useState(start)
    const options = { step: 1 }

    useEffect(() => {
        if (isStatic) return
        const id = setInterval(() => setN((v) => v + options.step), 1000)
        return () => clearInterval(id)
    }, [isStatic, options])

    return <div style={{ ...style, whiteSpace: "nowrap" }}>{n}</div>
}

Counter.defaultProps = { start: 0 }

addPropertyControls(Counter, {
    start: { type: ControlType.Number, title: "Start", defaultValue: 0, description: "First number shown." },
})
