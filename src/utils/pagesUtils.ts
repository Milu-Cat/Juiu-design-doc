
export const getRouterInfo = (type?: string) => {
  // type = type || '11'
  const pathname = window.location.pathname
  let res:string[] | string
  if (pathname.length <= 1) {
    switch (type) {
      case 'string':
        res = 'home'
        break;
      case 'array':
        res = ['home']
        break;
      default:
        res = pathname
    }
    return res
  }

  const arr = pathname.slice(1).split('/')
  switch (type) {
    case 'string':
        res = ''
        arr.map(v => {
          res += v
          res += '-'
        })
        res = res.slice(0, res.length-1)
    break;
    case 'array':
      const arrPush:string[] = []
      arr.forEach(v => {
        arrPush.push(v)
      })
      res = arrPush
      break;
    default:
      res = pathname
  }
  return res
}