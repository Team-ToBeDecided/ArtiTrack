# ArtiTrack: Web3 E-Commerce & Supply Chain Solution

## Overview

**ArtiTrack** is a comprehensive e-commerce platform designed to ensure fair remuneration for local artisans by tokenizing their products as NFTs. The application integrates Web3 technology to provide a transparent and tamper-proof supply chain, leveraging the Polygon blockchain. The platform includes a seamless Web3 transition by integrating **Arcana Wallet**, which allows users to create wallets using their email, simplifying onboarding for non-crypto users.

---

## Features

1. **NFT-Based Product Tracking**  
   Products are tokenized as NFTs, enabling unique identification and tamper-proof tracking.

2. **Fair Compensation**  
   Ensures artisans receive their rightful share of revenue for every product sold.

3. **Web3 Supply Chain**  
   Implements a blockchain-based solution for tracking the lifecycle of products.

4. **Low-Cost Transactions**  
   Utilizes the Polygon blockchain for minimal gas fees.

5. **Seamless Wallet Integration**  
   **Arcana Wallet** integration allows users to create and manage wallets with their email, enabling a user-friendly Web3 experience.

6. **Django-Powered Backend**  
   Provides robust API management and scalable backend operations.

7. **Modern Frontend**  
   Built using Vite React for a fast and responsive user interface.

---

## Tech Stack

### Backend
- **Framework**: Django
- **Database**: DbSqlite

### Frontend
- **Framework**: React.js (Vite for build tooling)
- **Styling**: TailwindCSS
- **State Management**: Context API
- **API Integration**: Axios

### Smart Contract
- **Language**: Solidity
- **Standard**: ERC-721 (NFTs)
- **Tools**: Hardhat for development and deployment

### Wallet Integration
- **Arcana Wallet**: Simplifies Web3 adoption by enabling email-based wallet creation.
---

## Smart Contract Details

The **`SupplyChain`** smart contract is the core of the Web3 integration. It manages:
- **Order Creation**: Mints an NFT for every order, holding payments in escrow.
- **Payment Distribution**: Ensures fair splits between artisans and delivery partners.
- **Order Tracking**: Provides transparency and accountability throughout the product's journey.

---

## Repository Link

You can access the source code and collaborate on the project through the [ArtiTrack GitHub Repository](https://github.com/Team-ToBeDecided/ArtiTrack).

---

## Getting Started

### Prerequisites
- **Python 3.8+**: Install Django dependencies.
- **Node.js**: Required for Vite React.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Team-ToBeDecided/ArtiTrack.git
   cd ArtiTrack
   ```

2. Set up the backend:
   ```bash
   cd project
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

3. Set up the frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```
---

## Workflow

1. **Artisan**:
   - Uploads product details, including metadata for NFT creation.
   - Automatically receives compensation after the product is sold and delivered.

2. **Buyer**:
   - Purchases products through the platform.
   - Receives the associated NFT for provenance and authenticity.

3. **Delivery Partner**:
   - Delivers products to buyers.
   - Automatically compensated via the escrow mechanism.

---

## Deployment

### Smart Contract
Deployed the contract to the Polygon blockchain using Hardhat.

---

## Future Plans

- Support for royalties on secondary NFT sales.
- Expansion to support multi-currency payments, including fiat and crypto.

---
