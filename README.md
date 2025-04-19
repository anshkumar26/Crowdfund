# 🚀 BlockFundr – Blockchain-Based Crowdfunding Platform

BlockFundr is a decentralized crowdfunding platform built on blockchain technology, aiming to bring **transparency, trust, and security** to fundraising. It allows project creators to raise funds while giving backers confidence through smart contracts.

---

## 📌 Features

- 🔒 **Smart Contract Powered:** Ensures funds are held securely and only released based on campaign rules.
- 🌐 **Decentralized:** No central authority; transactions are verifiable and transparent.
- 👤 **User Roles:** 
  - **Campaign Creator:** Launch and manage fundraising campaigns.
  - **Backer:** Fund campaigns and track progress.
- 📈 **Campaign Dashboard:** View total raised, contributors, goal progress, and milestones.
- 💼 **Wallet Integration:** Seamless connection to MetaMask or Web3 wallets.
- 🔔 **Real-Time Updates:** Track live contributions and campaign status.
- 📜 **Activity Logs:** Transparent list of all transactions per campaign.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Blockchain:** Solidity (Smart Contracts)
- **Web3 Integration:** Ethers.js / Web3.js
- **Development Environment:** Hardhat / Remix
- **Wallet:** MetaMask

---

## ⚙️ How It Works

1. **Connect Wallet:** Users connect their MetaMask wallet to the platform.
2. **Create Campaign:** Project owners define a title, description, funding goal, and duration.
3. **Fund Campaigns:** Supporters can send ETH to back the project.
4. **Withdrawals:** Funds are released to creators only after campaign success (as defined in smart contract logic).
5. **Refunds:** If the funding goal isn't reached, contributors can withdraw their funds.

---

## 🚧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/blockfundr.git
cd blockfundr

# Install dependencies
npm install

# Start frontend
npm start
