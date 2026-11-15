function SectionHeader({ eyebrow, title, children, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {children ? (
        <p className="max-w-2xl text-base leading-relaxed text-deep/85 sm:text-lg sm:leading-8">{children}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
