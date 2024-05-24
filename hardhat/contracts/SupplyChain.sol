// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

contract SupplyChain is ERC721URIStorage {
    using Math for uint256;

    struct Order {
        uint256 id;
        address merchant;
        address buyer;
        uint256 amount;
        bool isCompleted;
    }

    mapping(uint256 => Order) public orders;
    mapping(address => uint256) private balances;
    uint256 public nextOrderId = 1;

    constructor() ERC721("SupplyChainOrder", "SCO") {}

    function createOrder(
        address _merchant,
        uint256 _amount,
        string memory _tokenURI
    ) external payable returns (uint256) {
        require(msg.value == _amount, "Payment does not match order amount");
        uint256 orderId = nextOrderId++;
        orders[orderId] = Order(orderId, _merchant, msg.sender, _amount, false);
        _mint(_merchant, orderId);
        _setTokenURI(orderId, _tokenURI);
        balances[_merchant] += _amount;
        return orderId;
    }

    function transferNFT(uint256 _tokenId, address _to) external {
        // require(_exists(_tokenId), "Token does not exist");
        require(ownerOf(_tokenId) == msg.sender, "Caller is not the owner");
        _transfer(msg.sender, _to, _tokenId);
    }

    function deliverOrder(uint256 _orderId) external {
        // require(_exists(_orderId), "Order does not exist");
        require(
            ownerOf(_orderId) == msg.sender,
            "Only the current holder can deliver the order"
        );
        address buyer = orders[_orderId].buyer;
        _transfer(msg.sender, buyer, _orderId);
        markOrderAsCompleted(_orderId);
        releaseEscrow(_orderId, msg.sender); // Pass the delivery partner's address
    }

    function markOrderAsCompleted(uint256 _orderId) internal {
        require(!orders[_orderId].isCompleted, "Order is already completed");
        orders[_orderId].isCompleted = true;
    }

    function releaseEscrow(
        uint256 _orderId,
        address _deliveryPartner
    ) internal {
        Order storage order = orders[_orderId];
        uint256 totalAmount = order.amount;
        uint256 merchantShare = Math.mulDiv(totalAmount, 75, 100);
        (bool success, uint256 deliveryPartnerShare) = Math.trySub(
            totalAmount,
            merchantShare
        );

        require(success, "Subtraction overflow");
        payable(order.merchant).transfer(merchantShare);
        payable(_deliveryPartner).transfer(deliveryPartnerShare); // Use the passed delivery partner address

        balances[order.merchant] -= totalAmount;
    }

    function trackOrder(
        uint256 _orderId
    )
        public
        view
        returns (
            address merchant,
            uint256 amount,
            address buyer,
            bool isCompleted,
            address tokenOwner
        )
    {
        Order storage order = orders[_orderId];
        return (
            order.merchant,
            order.amount,
            order.buyer,
            order.isCompleted,
            ownerOf(_orderId) // Add this line
        );
    }

    // function migrateOrder(
    //     uint256 _orderId,
    //     address _merchant,
    //     address _buyer,
    //     uint256 _amount,
    //     bool _isCompleted
    // ) public {
    //     orders[_orderId] = Order(
    //         _orderId,
    //         _merchant,
    //         _buyer,
    //         _amount,
    //         _isCompleted
    //     );
    // }
}
