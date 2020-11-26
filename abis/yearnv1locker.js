const config = {
    address: "", //not ready
    abi: [
        "function BASE (  ) external view returns ( uint256 )",
        "function LK3R (  ) external view returns ( address )",
        "function THRESHOLD (  ) external view returns ( uint256 )",
        "function shouldRebalance ( address _token ) external view returns ( bool )",
        "function tokens (  ) external view returns ( address[] )",
        "function work (  ) external",
        "function workable (  ) external view returns ( bool )",
    ],
};
module.exports = config;