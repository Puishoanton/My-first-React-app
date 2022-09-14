export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = totlaPages => {
  let res = []
  for (let i = 0; i < totlaPages; i++) {
    res.push(i + 1)
  }
  return res
}
