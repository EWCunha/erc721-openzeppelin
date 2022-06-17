const { ethers } = require("hardhat")

async function main() {
  const SuperMarioWorld = await ethers.getContractFactory("SuperMarioWorldOZ")
  const superMarioWorld = await SuperMarioWorld.deploy("SuperMarioWorldOZ", "SPRMO")
  await superMarioWorld.deployed()
  console.log("Success! Contract was deployed to: ", superMarioWorld.address)

  await superMarioWorld.mint("https://ipfs.io/ipfs/QmTE7zVkgJhBoNt1YPDsrAMGjZwwy8gGLekZDP6U371Msc")

  console.log("NFT successfully minted")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
