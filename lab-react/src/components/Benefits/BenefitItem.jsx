import './BenefitItem.css'


function BenefitItem(props) {
    const {icon, headline, text} = props.benefit
    return (

        <div className="benefit-item">
                <img src={icon} alt="icon"></img>
                <h2>{headline}</h2>
                <p>{text}</p>
            </div> 
    )
}

export default BenefitItem;
