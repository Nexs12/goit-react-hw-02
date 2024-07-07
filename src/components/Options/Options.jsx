import css from "./Options.module.css"

const Options = () => {
    return (
        <ul className={css.buttons}>
            <li><button>Good</button></li>
            <li><button>Neutral</button></li>
            <li><button>Bad</button></li>
            <li><button>Reset</button></li>
        </ul>
    )

}

export default Options;