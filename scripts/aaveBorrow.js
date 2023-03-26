const { getWeth } = require("../scripts/getWeth")

async function main() {
  await getWeth()
}

main()
  .then(() => process.exit(0))
  .catch(() => {
    console.error(error)
    process.exit(1)
  })
