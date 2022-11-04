function reducer(state = [], anyParameterName) {
    if (anyParameterName.type === "addTodo") {
      for (let i of state) {
        if (i.title === anyParameterName.title) {
  
          alert("already exists")
          return state
        }
      }
      return [...state, { id: state.length + 1, title: anyParameterName.title, completed: false }]
    }
    if (anyParameterName.type === "removeTodo") {
      const newData = state.filter(item => item.id !== anyParameterName.id)
      return newData
    }
    if (anyParameterName.type === "complete") {
      return state.map(item => (item.id === anyParameterName.id ? { ...item, completed: true } : item))
      // const newData = []
      // for (let i of state) {
      //   if (i.id === anyParameterName.id) {
      //     newData.push({ ...i, completed: true })
      //   } else {
      //     newData.push(i)
      //   }
      // }
      // return newData
    }
  
    return state
  }
  
  export default reducer
  