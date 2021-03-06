const getLoginState = ()=> {
  const local = localStorage.getItem('jujiu-admin-user')
  if(local){
    return true
  } else {
    return false
  }
} 

export default getLoginState