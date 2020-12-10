const {Job} = require("../Job");
const ethers = require("ethers");

const contract = require("../../contracts/locker/LK3RsExecutingOnUnitrade.js");

class LK3RsExecutingOnUnitrade extends Job {
    constructor(account, provider) {
        super("LK3RsExecutingOnUnitrade",
            new ethers.Contract(contract.address, contract.abi, account),
            provider
        );
    }

    async callWork(gas){
        this.orderList = await this.contract.getExecutableOrdersList();
        this.log.info(`Executing orders ${this.orderList.toString()}`);
        if(this.orderList.length > 1)
            return await this.contract.workBatch(this.orderList, {
                gasPrice: gas * 1e9,
                gasLimit:1000000
            });
        else
            return await this.contract.workSolo(this.orderList[0], {
                gasPrice: gas * 1e9,
                gasLimit:1000000
            });
    }
}

exports.LK3RsExecutingOnUnitrade = LK3RsExecutingOnUnitrade;
