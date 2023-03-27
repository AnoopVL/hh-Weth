const { getWeth } = require("../scripts/getWeth")
const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
  await getWeth()
  const { deployer } = await getNamedAccounts()
}
//lending pool address: 0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5
async function getLendingPool(account) {
  const lendingPoolAddressProvider = await ethers.getContractAt(
    "ILendingPoolAddressesProvider",
    "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    deployer
  )
}

main()
  .then(() => process.exit(0))
  .catch(() => {
    console.error(error)
    process.exit(1)
  })
