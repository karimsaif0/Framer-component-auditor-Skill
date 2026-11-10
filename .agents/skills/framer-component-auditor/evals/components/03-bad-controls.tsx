import { addPropertyControls, ControlType } from "framer"

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */
export default function Card(props) {
    const { image, size, doc, accent } = props
    return (
        <div style={{ ...props.style, fontSize: size === "big" ? 24 : 12, color: accent }}>
            <img src={image.src} srcSet={image.srcSet} />
            <a href={doc}>Download</a>
        </div>
    )
}

addPropertyControls(Card, {
    image: { type: ControlType.Image, title: "Image" },
    size: {
        type: ControlType.Enum,
        options: ["small", "medium", "big"],
        optionTitles: ["Small", "Big"],
        defaultValue: "medium",
    },
    doc: { type: ControlType.File },
    accent: { type: ControlType.Color, optional: true },
    mode: { type: ControlType.SegmentedEnum, options: ["a", "b"] },
})
