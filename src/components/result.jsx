export const Result = (knife) => {
    const matWidth = knife.streamsMargin ?
        knife.height * knife.streams + (knife.streamsMargin * (knife.streams - 1)) + 20
        : knife.height + 20

    const streamWidth = knife.height + (knife.streamsMargin ?? 4)
    const formWidth = matWidth.toFixed(1) - 2
    const quantity = knife.fragments * (knife.streams ?? 1)
    const streamsMargin = knife.streamsMargin ?? ''
    const imageSrc = 'data:image/png;base64, ' + knife.base64

    return (
        <div className="result-wrapper">
            <div className="result-size">
                <span className="result-width">{knife.width}</span>
                Х
                <span className="result-height">{knife.height}</span>
            </div>
            <div className="result">
                <div className="left">
                    <p>Ширина материала</p>
                    <p>Ширина ручья</p>
                    <p>Количество ручьев</p>
                    <p>Ширина формы</p>
                    <p>Вал</p>
                    <p>Количество фрагментов:</p>
                    <p>Расстояние между этикетками</p>
                    <p>Расстояние между ручьями</p>
                    <p>Номер ножа</p>
                </div>
                <div className="right">
                    <p className="material-width">{matWidth}</p>
                    <p className="stream-width">{streamWidth}</p>
                    <p className="quantity-stream">{knife.streams ?? 1}</p>
                    <p className="form-width">{formWidth}</p>
                    <p className="offer-rapport">{knife.rapport}</p>
                    <p className="quantity">{quantity}</p>
                    <p className="step-margin">{knife.fragmentsMargin}</p>
                    <p className="stream-margin">{streamsMargin}</p>
                    <p className="number">{knife.number}</p>
                    {/* <button className="copy">Копировать</button> */}
                </div>
                <div className="img-result">
                    <img src={imageSrc} alt="#" className="img-knife" width="200" height="200" />
                </div>
            </div>
        </div>
    )
}