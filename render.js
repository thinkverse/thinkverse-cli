module.exports.render = {
  text: (info) => {
    return console.log(info)
  },
  link: (info) => {
    return console.log(`${info[0]}: %o`, info[1]);
  }
}
