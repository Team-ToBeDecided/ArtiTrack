// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    enum State {
        Created,
        Paid,
        Shipped,
        Received
    }

    struct Order {
        address buyer;
        address seller;
        uint256 price;
        State state;
    }

    mapping(uint256 => Order) public orders;
    uint256 public orderCount;

    modifier onlyBuyer(uint256 orderId) {
        require(
            msg.sender == orders[orderId].buyer,
            "Only the buyer can call this function"
        );
        _;
    }

    modifier onlySeller(uint256 orderId) {
        require(
            msg.sender == orders[orderId].seller,
            "Only the seller can call this function"
        );
        _;
    }

    modifier inState(uint256 orderId, State targetState) {
        require(
            orders[orderId].state == targetState,
            "Invalid state transition"
        );
        _;
    }

    event OrderCreated(
        uint256 orderId,
        address buyer,
        address seller,
        uint256 price
    );
    event OrderPaid(uint256 orderId);
    event OrderShipped(uint256 orderId);
    event OrderReceived(uint256 orderId);

    function createOrder(address _seller) external payable {
        require(msg.sender != _seller, "Buyer and seller cannot be the same");
        require(msg.value > 0, "Price must be greater than zero");

        uint256 orderId = orderCount++;
        orders[orderId] = Order({
            buyer: msg.sender,
            seller: _seller,
            price: msg.value,
            state: State.Created
        });

        emit OrderCreated(orderId, msg.sender, _seller, msg.value);
    }

    function payOrder(
        uint256 orderId
    ) external payable onlyBuyer(orderId) inState(orderId, State.Created) {
        require(msg.value == orders[orderId].price, "Incorrect payment amount");

        orders[orderId].state = State.Paid;
        emit OrderPaid(orderId);
    }

    function shipOrder(
        uint256 orderId
    ) external onlySeller(orderId) inState(orderId, State.Paid) {
        orders[orderId].state = State.Shipped;
        emit OrderShipped(orderId);
    }

    function receiveOrder(
        uint256 orderId
    ) external onlyBuyer(orderId) inState(orderId, State.Shipped) {
        orders[orderId].state = State.Received;
        payable(orders[orderId].seller).transfer(orders[orderId].price);
        emit OrderReceived(orderId);
    }

    // Escrow functionality
    function releaseEscrow(
        uint256 orderId
    ) external onlySeller(orderId) inState(orderId, State.Received) {
        payable(orders[orderId].seller).transfer(orders[orderId].price);
        orders[orderId].state = State.Created;
    }

    function refundEscrow(
        uint256 orderId
    ) external onlySeller(orderId) inState(orderId, State.Received) {
        payable(orders[orderId].buyer).transfer(orders[orderId].price);
        orders[orderId].state = State.Created;
    }

    // Retrieve order details
    function getOrderDetails(
        uint256 orderId
    )
        external
        view
        returns (address buyer, address seller, uint256 price, State state)
    {
        Order storage order = orders[orderId];
        return (order.buyer, order.seller, order.price, order.state);
    }
}
