import type { ComponentType } from "react"
import { useState } from "react"

/**
 * @framerDisableUnlink
 */
export function withHoverScale(Component): ComponentType {
    return (props) => {
        const [hover, setHover] = useState(false)
        return (
            <Component
                {...props}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{ ...props.style, transform: hover ? "scale(1.05)" : "scale(1)" }}
            />
        )
    }
}
