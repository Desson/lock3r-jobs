const config = {
  address: "0x2400cd0f6e2829FCE228e6F659500cA6ade87fCC",
  abi: [
    "function workBatch (uint[] memory orderList) external",
    "function workSolo (uint order) external",
    "function getExecutableOrdersList() external view returns (uint[] memory)",
    "function workable (  ) external view returns ( bool )",
  ],
};
module.exports = config;
