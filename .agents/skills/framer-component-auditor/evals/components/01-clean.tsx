import { useEffect, useRef, useState } from "react"
import { addPropertyControls, ControlType, useIsStaticRenderer } from "framer"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 120
 * @framerIntrinsicHeight 120
 */
export default function PulseDot(props) {
    const { color, speed, label, style } = props
    const isStatic = useIsStaticRenderer()
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    const [on, setOn] = useState(true)

    useEffect(() => {
        if (isStatic || !ref.current) return
        const observer = new IntersectionObserver(([entry]) =>
            setVisible(entry.isIntersecting)
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [isStatic])

    useEffect(() => {
        if (isStatic || !visible) return
        const id = window.setInterval(() => setOn((v) => !v), 1000 / speed)
        return () => window.clearInterval(id)
    }, [isStatic, visible, speed])

    return (
        <div
            ref={ref}
            role="img"
            aria-label={label}
            style={{
                ...style,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "40%",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    background: color,
                    opacity: on ? 1 : 0.3,
                }}
            />
        </div>
    )
}

PulseDot.defaultProps = { color: "#0099ff", speed: 1, label: "Status indicator" }

addPropertyControls(PulseDot, {
    color: { type: ControlType.Color, title: "Color", defaultValue: "#0099ff" },
    speed: {
        type: ControlType.Number,
        title: "Speed",
        defaultValue: 1,
        min: 0.25,
        max: 4,
        step: 0.25,
        description: "Blinks per second.",
    },
    label: {
        type: ControlType.String,
        title: "Label",
        defaultValue: "Status indicator",
        description: "Read by screen readers.",
    },
})
