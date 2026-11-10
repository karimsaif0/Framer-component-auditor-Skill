import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function Embed(props) {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        const s = document.createElement("script")
        s.src = props.scriptUrl
        document.head.appendChild(s)
        const mo = new MutationObserver(() => {})
        mo.observe(document.documentElement, { childList: true, subtree: true })
    }, [props.scriptUrl])

    return <div style={props.style} dangerouslySetInnerHTML={{ __html: props.html }} />
}

Embed.defaultProps = { html: "<p>Hello</p>", scriptUrl: "" }

addPropertyControls(Embed, {
    html: { type: ControlType.String, title: "HTML", displayTextArea: true },
    scriptUrl: { type: ControlType.String, title: "Script URL" },
})
