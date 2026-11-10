import { addPropertyControls, ControlType } from "framer"

export function Banner(props) {
    return (
        <div style={{ width: 400, height: 90, background: props.bg, position: "fixed", top: 0 }}>
            {props.text}
        </div>
    )
}

addPropertyControls(Banner, {
    text: { type: ControlType.String, title: "Text", defaultValue: "Hi" },
    bg: { type: ControlType.Color, title: "Background", defaultValue: "#fff" },
})
