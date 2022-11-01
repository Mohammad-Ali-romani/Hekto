import './title-section.scss'

const TitleSection = (props) => {
  return (
    <h2 className="title-section">{props.children}</h2>
  )
}

export default TitleSection