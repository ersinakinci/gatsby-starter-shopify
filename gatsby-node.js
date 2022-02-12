const { copyLibFiles } = require("@builder.io/partytown/utils")

exports.onPreBootstrap = async ({ basePath }) => {
  console.log(`copying partytown to base path ${basePath} + /public/~partytown`)
  await copyLibFiles(`./public/~partytown`)
}
