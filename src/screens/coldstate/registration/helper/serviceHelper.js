const userDataBase = () => {
  //user collection
  const res = fetch(
    'https://faq-project-react-default-rtdb.firebaseio.com/userCollection.json',
  )
    .then((res) => res.json())
    .then((data) => {
      return data
    })
  return res
}

export const isEntryUnique = async (username) => {
  const data = await userDataBase()
  if (data) {
    let status = false
    Object.keys(data).forEach(function (key) {
      if (data[key].username === username) {
        status = false
      } else {
        status = true
      }
    })
    return status
  } else {
    return true
  }
}
