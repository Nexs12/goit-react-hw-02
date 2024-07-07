import css from "./Feedback.module.css";

const Feedback = () => {
    return (
       <div>
            <p>No feedback yet</p>
            <ul className={css.feedbackList}>
                <li>Good: </li>
                <li>Neutral:</li>
                <li>Bad:</li>
                <li>Total:</li>
                <li>positive:</li>
            </ul>
       </div>
    )

}

export default Feedback;