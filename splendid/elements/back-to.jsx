export default function BackTo({ splendid, name }) {
  if (!name) return splendid.removeLine()
  splendid.export()
  return (<div opacity="0" position-absolute top="1rem" right="1rem">
    <a btn btn-danger href="#">Go Back</a></div>)
}