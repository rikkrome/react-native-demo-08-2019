const lib = {};

lib.fetchGameModes = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('blackout');
    }, 3000)
  })
}

lib.fetchTitles = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('bo4');
    }, 2000)
  })
}

export default lib;