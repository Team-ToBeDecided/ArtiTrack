import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../utils/constants";
import { ethers } from 'ethers';
import { ArcanaProvider } from "../main";
import { AuthProvider } from "@arcana/auth"
import { ProvideAuth } from "@arcana/auth-react";
import { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext(null);

export function TransactionsProvider({ children }) {

    let provider, signer;

    async function initializeProviderAndSigner() {
        try {
            // Ensure Arcana provider is initialized
            await ArcanaProvider.init();
            console.log('Arcana Provider initialized');

            // Use Web3Provider instead of BrowserProvider
            provider = new ethers.providers.Web3Provider(ArcanaProvider.provider);
            signer = await provider.getSigner();

            console.log('Provider:', provider);
            console.log('Signer:', signer);
        } catch (error) {
            console.error('Error during provider and signer initialization:', error);
        }
    }

    useEffect(() => {
        initializeProviderAndSigner();
        console.log('Provider and Signer initialized');
    }, []);

    const contractAddress = CONTRACT_ADDRESS;
    const abi = CONTRACT_ABI;
    const tokenURI = 'https://gateway.pinata.cloud/ipfs/QmPsK8LekiJ4CXna9fYxqzBVuQra56EJMMyR3YwNVrMABG';

    async function createOrder(merchant, amount) {
        try {
            // Ensure signer is available
            if (!signer) {
                console.error('Signer is not initialized');
                return;
            }

            // Create a contract instance
            const contract = new ethers.Contract(contractAddress, abi, signer);
            console.log('Contract instance created:', contract);

            // Define transaction overrides
            const overrides = {
                value: ethers.utils.parseEther(amount),
            };

            // Call the createOrder function
            const tx = await contract.createOrder(buyerAddress, overrides.value, tokenURI, overrides);

            // Wait for the transaction to be mined
            const receipt = await tx.wait();

            console.log('Transaction successful:', receipt);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }

    async function trackOrder(orderId) {
    try {
        // Ensure signer is available
        if (!signer) {
            console.error('Signer is not initialized');
            return;
        }

        // Create a contract instance
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log('Contract instance created:', contract);

        // Call the trackOrder function
        const result = await contract.trackOrder(orderId);

        console.log('Order tracked:', result);
        return result;
    } catch (error) {
        console.error('Error tracking order:', error);
    }
}


    return (
        <TransactionContext.Provider value={{ createOrder, trackOrder }}>
            {children}
        </TransactionContext.Provider>
    );
}