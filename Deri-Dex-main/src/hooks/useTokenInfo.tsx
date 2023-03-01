/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */

// import _ from "lodash";
import Web3 from "web3";

import ERC20ABI from "../contracts/ERC20ABI.json";
import Swap from "../contracts/Swap.json"
import {
    SWAP_CONTRACT_ADDR,
} from './tokenAddress';

declare let window: any;

export interface StakedInfo{
    duration: number
    amount: number
    stakedTime: number
    lastClaimed: number
    name: string
    NFTId: number
    StakeNFTId: number
}

export const setTokenProvider = async (tokenAddr: string) => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    const ERC20Contract = await new window.web3.eth.Contract(ERC20ABI, tokenAddr);
    return ERC20Contract
}

export const setNetworkProvider = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    const SwapContract = await new window.web3.eth.Contract(Swap, SWAP_CONTRACT_ADDR);
    return SwapContract
}

export const tokenApprove = async (spender: string, tokenAddr: string, amount: number, account: string) => {
    const tokenContract = await setTokenProvider(tokenAddr);
    const res = await tokenContract.methods.approve(spender, '0x' + (Math.round(amount * Math.pow(10, 18))).toString(16))
                .send({from: account});
    return res;
}

export const swapDeritoEth = async (derisent: number, _minEth: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.swapDeritoEth('0x' + (Math.round(derisent * Math.pow(10, 18))).toString(16), _minEth).send({from: account});
    return res;
}

export const swapEthtoDeri = async (ethsent: number, _minToken: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.swapEthtoDeri(_minToken).send({value: '0x' + (Math.round(ethsent * Math.pow(10, 18))).toString(16), from: account});
    return res;
}

export const addLiquidity = async (ethsent: number, derisent: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.AddLiquidity('0x' + (Math.round(ethsent)).toString(16), '0x' + (Math.round(derisent * Math.pow(10, 18))).toString(16)).send({from: account});
    return res;
}

export const removeLiquidity = async (derisent: number, account: string) => {
    const SwapContract = await setNetworkProvider();
    const res = await SwapContract.methods.removeLiquidity('0x' + (Math.round(derisent * Math.pow(10, 18))).toString(16)).send({from: account});
    return res;
}

export const getBalance = async (tokenAddr: string, walletAddr: string) => {
    const tokenContract = await setTokenProvider(tokenAddr);
    const bal = await tokenContract.methods.balanceOf(walletAddr).call();
    return bal;
}
export const getBNB = async(walletAddr: string) => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    const balance = await new window.web3.eth.getBalance(walletAddr);
    return balance;
}
