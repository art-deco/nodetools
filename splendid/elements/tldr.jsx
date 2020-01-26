export default function Tldr({ children }) {
  let [c] = children
  c = `*TLDR;* ${c}`
  return (<span
    className="p-1 mb-3"
    style="display: inline-block; background:#779fc4;color: white"
    dangerouslySetInnerHTML={{ __html: c }}/>)
}