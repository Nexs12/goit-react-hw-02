import css from "./Feedback.module.css";

const Feedback = () => {
    return (
        <ul className={css.feedbackList}>
            <li>Good: </li>
            <li>Neutral:</li>
            <li>Bad:</li>
            <li>Total:</li>
            <li>positive:</li>
        </ul>
    )

}

export default Feedback;