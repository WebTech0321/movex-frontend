export const numberWithCommas = (x: number) : string => {
    
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export const parseCommas = (x: string) : number => {
    return parseFloat(x.replace(/,/g, ''));
}