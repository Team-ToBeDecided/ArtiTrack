// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SupplyChain is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Strings for uint256;

    // Struct to hold order details
    struct Order {
        uint256 id;
        address merchant;
        address buyer;
        uint256 amount;
        bool isCompleted;
    }

    // Order counter
    uint256 public orderCounter;

    // Mapping from order ID to Order details
    mapping(uint256 => Order) public orders;

    // Event when a new order is created
    event OrderCreated(uint256 orderId, address indexed merchant, address indexed buyer, uint256 amount);
    // Event when NFT is transferred to a delivery partner
    event NFTTransferred(uint256 orderId, address indexed from, address indexed to);
    // Event when an order is completed and escrow is released
    event OrderCompleted(uint256 orderId);

    constructor() ERC721("SupplyChainNFT", "SCNFT") {}

    // Create a new order
    function createOrder(address _merchant, address _buyer, uint256 _amount, string memory _tokenURI) public payable {
        require(msg.value == _amount, "Amount sent must be equal to order amount");

        orderCounter++;
        uint256 orderId = orderCounter;

        // Mint the NFT
        _mint(_merchant, orderId);
        _setTokenURI(orderId, _tokenURI);

        // Store order details
        orders[orderId] = Order({
            id: orderId,
            merchant: _merchant,
            buyer: _buyer,
            amount: _amount,
            isCompleted: false
        });

        emit OrderCreated(orderId, _merchant, _buyer, _amount);
    }

    // Transfer NFT to delivery partner
    function transferNFT(address _from, address _to, uint256 _orderId) public {
        require(_isApprovedOrOwner(_msgSender(), _orderId), "Caller is not owner nor approved");
        _transfer(_from, _to, _orderId);
        emit NFTTransferred(_orderId, _from, _to);
    }

    // Complete the order and release escrow
    function completeOrder(uint256 _orderId) public {
        Order storage order = orders[_orderId];
        require(_msgSender() == order.buyer, "Only buyer can complete the order");
        require(order.isCompleted == false, "Order is already completed");
        require(ownerOf(_orderId) == order.buyer, "NFT must be owned by buyer to complete order");

        order.isCompleted = true;

        // Release the escrow payment to the merchant
        payable(order.merchant).transfer(order.amount);

        emit OrderCompleted(_orderId);
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
