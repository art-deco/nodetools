export default function Plate ({ children, alt, src, href, title, imageAlign = 'center', captionAlign = 'left', style, webp, sizes }) {
  const img = <splendid-img { ...{ webp, sizes }} src={src} img-fluid figure-img rounded alt={alt} />
  const imgWrapper = href ? <a href={href} title={title}>{img}</a> : img
  const c = children[0].trim()
  const cl = `text-${imageAlign}`
  return (<figure className={`figure ${cl}`} style={style}>
    {imgWrapper}
    {c && <figcaption style={`text-align:${captionAlign}`} className="FigureCaption figure-caption" dangerouslySetInnerHTML={{ __html: c }} />}
  </figure>)
}