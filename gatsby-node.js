const { copyLibFiles } = require("@builder.io/partytown/utils")

exports.onPreBootstrap = async () => {
  const destPath = "./public/~partytown"

  console.log(`copying partytown to base path ${destPath}`)
  await copyLibFiles(destPath)
}
