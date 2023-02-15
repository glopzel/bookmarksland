const SectionStart = ({sectionHeading, desc}) => {
  return (
    <div>
        <h2 className="text-center">{sectionHeading}</h2>
        <p className="text-center section-intro">{desc}</p>
    </div>
  )
}

export default SectionStart