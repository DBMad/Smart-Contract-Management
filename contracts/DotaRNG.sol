pragma solidity ^0.8.0;

contract DotaRNG {
    mapping(address => string[]) private userItems;

    event ItemAcquired(address indexed user, string itemName);

    modifier correctPayment(uint256 price) {
        require(msg.value == price, "Incorrect ETH amount sent.");
        _;
    }

    function buyCommonItem() external payable correctPayment(1 ether) {
        string memory itemName = "Dead of Reckoning Chest";
        userItems[msg.sender].push(itemName);
        emit ItemAcquired(msg.sender, itemName);
    }

    function buyArcana() external payable correctPayment(2 ether) {
        string memory itemName = "Feast of Abscession";
        userItems[msg.sender].push(itemName);
        emit ItemAcquired(msg.sender, itemName);
    }

    function buyMythicalItem() external payable correctPayment(5 ether) {
        string memory itemName = "Dragonclaw Hook";
        userItems[msg.sender].push(itemName);
        emit ItemAcquired(msg.sender, itemName);
    }

    function buyLegendaryItem() external payable correctPayment(10 ether) {
        string memory itemName = "Legacy Ethereal Flames Wardog";
        userItems[msg.sender].push(itemName);
        emit ItemAcquired(msg.sender, itemName);
    }

    function getMyItems() external view returns (string[] memory) {
        return userItems[msg.sender];
    }
}