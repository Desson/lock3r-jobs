const config = {
    address: "", //not ready
    abi: [
        "function ETH_ADDRESS (  ) external view returns ( address )",
        "function HegicPool (  ) external view returns ( address )",
        "function acceptGovernor (  ) external",
        "function acceptManager (  ) external",
        "function buyLots ( uint256 _eth, uint256 _wbtc ) external",
        "function claimRewards (  ) external",
        "function forceClaimRewards (  ) external",
        "function governor (  ) external view returns ( address )",
        "function lock3r (  ) external view returns ( address )",
        "function minETHRewards (  ) external view returns ( uint256 )",
        "function minWBTCRewards (  ) external view returns ( uint256 )",
        "function pendingGovernor (  ) external view returns ( address )",
        "function sendDust ( address _to, address _token, uint256 _amount ) external",
        "function setHegicPool ( address _hegicPool ) external",
        "function setLock3r ( address _keep3r ) external",
        "function setMinRewards ( uint256 _minETHRewards, uint256 _minWBTCRewards ) external",
        "function setPendingGovernor ( address _pendingGovernor ) external",
        "function setPendingManager ( address _pendingManager ) external",
        "function workable (  ) external view returns ( bool )",
    ],
};
module.exports = config;