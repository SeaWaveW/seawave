// 两个数组的交集
const intersection = ( arr1 = [], arr2 = [] ) => {
    let arrOne = [...new Set(arr1)]
    let arrTwo = [...new Set(arr2)]
    let results = arrOne.filter(item => arrTwo.includes(item))
    return results
}

export default intersection