import { useEffect, useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// Module-level timer: starts the moment the file loads.
let ticks = 0
setInterval(() => { ticks++ }, 16)

export default function Ticker(props) {
    const [n, setN] = useState(0)

    useEffect(() => {
        // typeof window guard only; no useIsStaticRenderer
        if (typeof window !== "undefined") {
            const loop = () => {
                setN(ticks)
                requestAnimationFrame(loop)
            }
            requestAnimationFrame(loop)
            window.addEventListener("resize", () => setN(ticks))
        }
    }, [])

    return <div style={{ width: 300, height: 100 }}>{n}</div>
}

addPropertyControls(Ticker, {
    unusedControl: { type: ControlType.String, title: "Text" },
})
