import s from './spinner.module.css'

export const Spinner = () => {
    return (
        <div className={s.spinnerBox}>
            <div className={s.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}