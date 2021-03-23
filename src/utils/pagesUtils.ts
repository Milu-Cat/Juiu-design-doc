import { RouterOptions } from '../router/index';

export const getRouterInfo = (type?: string) => {
  // type = type || '11'
  const pathname = window.location.pathname
  let res: string[] | string
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
      res = res.slice(0, res.length - 1)
      break;
    case 'array':
      const arrPush: string[] = []
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

export function findParentsById(arr: RouterOptions[], id:string, atrr:string) {
  var parentIds:string[] = [],index = 0,
  hasParentId = function loop(arr: RouterOptions[], index: number): boolean {
    return arr.some((item) => {
        if (item[atrr] && item[atrr] === id) {
          parentIds = parentIds.slice(0, index)
          return true
        } else if (Array.isArray(item.children)) {
          parentIds[index] = item[atrr]
          return loop(item.children, index + 1)
        } else {
          return false
        }
      })
    }(arr, index)
  return hasParentId ? parentIds : []
}