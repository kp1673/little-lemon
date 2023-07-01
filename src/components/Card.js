const Card = ({imageSrc, name, jobTitle, statement}) => {
  return (
            <div className="customer">
            <figure className="photo">
                <span className="fa fa-custom">&#xf005; &#xf005; &#xf005; &#xf005; &#xf005;</span>
                <img src={imageSrc} alt={name}/>
            </figure>
            <div className="person">
            <p style={{fontSize: "1.125rem", fontWeight: "700"}}>{name}</p>
            <p style={{fontSize: "1rem", fontWeight: "500", color: "var(--mainColor)"}}>{jobTitle}</p>
            </div>
            <blockquote className="review">
                {statement}
            </blockquote>
        </div>
  )
}

export default Card;
