import './Container.css'


function Container(props) {
    const classes = "card " + props.className

    return (
        <section className={classes}>
            {props.children}
        </section>

    )
}

export default Container;