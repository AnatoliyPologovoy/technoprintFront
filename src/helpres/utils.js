export const separateSize = (sizeSticker) => {
    sizeSticker = sizeSticker.toString().replace(/[,]/gi, '.');
    let widthHeight = sizeSticker.split(/[хx*×]/gi);
    console.log(widthHeight)

    widthHeight = widthHeight.map((value) => {
        let indexNotNumber = value.search(/[^0-9.]/gi);
        if (indexNotNumber >= 0) {
            return value.slice(0, indexNotNumber);
        }
        return value;
    })

    return {
        width: parseFloat(widthHeight[0]),
        height: parseFloat(widthHeight[1])
    }
}