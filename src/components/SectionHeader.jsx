function SectionHeader({ eyebrow, title, children, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto mb-12 flex max-w-3xl flex-col gap-5 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="editorial-title text-4xl sm:text-5xl">{title}</h2>
      {children ? (
        <p className="max-w-2xl text-[1.08rem] leading-8 text-stone-600 sm:text-xl sm:leading-9">{children}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
