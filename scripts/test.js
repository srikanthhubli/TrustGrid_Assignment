const hre = require("hardhat")

const ACCOUNT_ADDR = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be" 

async function main() {

    const account = await hre.ethers.getContractAt("Account", ACCOUNT_ADDR)
    // const code = await hre.ethers.provider.getCode(ACCOUNT_ADDR);
    // console.log(code);  
    const count = await account.count(); 
    console.log("Current count:", count);

    // const code =  await hre.ethers.provider.getCode(EP_ADDR)
    // const ep  =  await hre.ethers.deployContract("EntryPoint")

    // await ep.waitForDeployment()

}

main().catch((error) => {
    console.error(error)
    process.exitCode =  1
})