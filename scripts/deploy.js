const hre = require("hardhat");

async function main() {
  const DotaRNG = await hre.ethers.getContractFactory("DotaRNG");
  const dotaRNG = await DotaRNG.deploy();
  await dotaRNG.deployed();

  console.log(`DotaRNG contract deployed to: ${dotaRNG.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});