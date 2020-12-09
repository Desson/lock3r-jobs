const config = {
  address: "0x75249e3B2df1E4244a29f8E0f8e493E5450C7F15",
  abi: [
    "function workBatch (uint[] memory orderList) external",
    "function workSolo (uint order) external",
    "function getExecutableOrdersList() external view returns (uint[] memory)",
    "function workable (  ) external view returns ( bool )",
  ],
};
module.exports = config;
