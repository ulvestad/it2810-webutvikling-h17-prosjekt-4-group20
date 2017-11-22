export const flatten = (list: Array<Array<any>>):Array<any> => {
    return [].concat.apply([], list);
};

export const unique = (list: Array<any>): Array<any> => {
    return Array.from(new Set(list));
}

export const dateToYear = (date: String): String => {
    return date ? date.split('-')[0] : '';
}

export const sortOnProp = (prop: string, list: Array<object>) => {
    return list.sort((a, b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0) );
}