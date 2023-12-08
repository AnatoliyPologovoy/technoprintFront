import { useState } from 'react'
import { separateSize } from '../helpres/utils'
import { getKnifesAPI } from '../services/api'
import { Result } from './result'
import { Spinner } from './spinner'

export const Knifes = () => {

    const [size, setSize] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [number, setNumber] = useState('')
    const [results, setResults] = useState(null)
    const [notResult, setNotResult] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSizeChange = (e) => {
        const sizeValue = e.target.value
        const widthHeight = separateSize(sizeValue)
        setSize(sizeValue)
        setWidth(widthHeight.width ?? '')
        if (widthHeight.height) {
            setHeight(widthHeight.height)
        }
    }

    const onWidthChange = (e) => {
        setWidth(e.target.value)
    }

    const onHeightChange = (e) => {
        setHeight(e.target.value)
    }

    const onNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch()
        }
    }

    const onSearch = () => {
        setNotResult(null)
        setIsLoading(true)

        if (number) {
            getKnifesAPI.getByNumber(number)
                .then(knifes => {
                    setResults(knifes)
                })
                .catch(err => {
                    setResults(null)
                    if (err.response?.data) {
                        setNotResult(err.response.data)
                    }
                    else {
                        setNotResult('Somesing wrong')
                    }
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        else {
            const sizeQuery = {}
            if (width) sizeQuery.width = width
            if (height) sizeQuery.height = height
            getKnifesAPI.getBySize(sizeQuery)
                .then(knifes => {
                    console.log(knifes)
                    setResults(knifes)
                })
                .catch(err => {
                    setResults(null)
                    if (err.response?.data) {
                        setNotResult(err.response.data)
                    }
                    else {
                        setNotResult('Somesing wrong')
                    }
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

    return (
        <div className="main">
            <div className="left-column">
                <form action="" onKeyDown={onKeyPress}>
                    <div className="left-column__header">
                        <div className="header__size">
                            <p className="size-text">Размер этикетки (мм)</p>
                            <input type="text" className="size-sticker" onChange={onSizeChange} value={size} />
                        </div>
                        <div className="left-column__width-height">
                            <div className="header-width">
                                <label className="text-width" htmlFor="width">Ширина (машинное направление)</label>
                                <input id="width" type="number" className="machine-width" value={width} onChange={onWidthChange} />
                            </div>
                            <div className="header-height">
                                <label className="text-height" htmlFor="height">Длина</label>
                                <input id="height" type="number" className="machine-height" value={height} onChange={onHeightChange} />
                            </div>
                        </div>
                        <div className="wrapper-number-knife">
                            <label className="text-height" htmlFor="number">Номер ножа</label>
                            <input id="number" type="number" className="number-knife" onChange={onNumberChange} value={number} />
                        </div>
                    </div>
                    <button type="button" value="Найти" onClick={onSearch}>
                        Поиск
                    </button>
                </form>
                {isLoading && <Spinner />}
                <div className="all-result">
                    {notResult && <p>{notResult}</p>}
                    {results && results.map((knife, i) => <Result {...knife} key={i} />)}
                </div>
            </div>
            <div className="right-column">
            </div>
        </div>
    )
}