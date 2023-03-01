import { useState } from 'react';
import { Box, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import Topbar from "../Components/Topbar";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getderiAmtInWallet, getbnbAmtInWallet, setderiAmtInWallet, setbnbAmtInWallet } from '../actions/ToggleMode';
import { swapEthtoDeri, swapDeritoEth, tokenApprove, getBNB, getBalance } from '../hooks/useTokenInfo';
import { SWAP_CONTRACT_ADDR, DERI_TOKEN_ADDR } from '../hooks/tokenAddress';

const Swap = () => {
    const { account } = useAuth();

    const [sellToken, setsellToken] = useState('BNB');
    const [buyToken, setbuyToken] = useState('DERI');
    const [sellAmount, setsellAmount] = useState('');
    const [buyAmount, setbuyAmount] = useState('');
    const [isbnbselltoken, setisbnbselltoken] = useState(true);
    const [btnCaption, setbtnCaption] = useState('Enter An Amount');

    const deriAmt = useAppSelector(getderiAmtInWallet);
    const bnbAmt = useAppSelector(getbnbAmtInWallet);

    const dispatch = useAppDispatch();

    const onClickChageToken = () => {
        var tmp = sellToken;
        setsellToken(buyToken);
        setbuyToken(tmp);
        setisbnbselltoken(!isbnbselltoken);
        setsellAmount('');
        setbuyAmount('');
    }

    const onClickMaxAmount = (tokentype: string) => {
        if (isbnbselltoken) {
            if (tokentype === 'sell')
                setsellAmount(bnbAmt);
            else
                setbuyAmount(deriAmt);
        } else {
            if (tokentype === 'buy')
                setbuyAmount(bnbAmt);
            else
                setsellAmount(deriAmt);
        }
        setbtnCaption('Swap');
    }

    const onChangeAmount = (value: string, amtType: string) => {
        if (amtType === 'sell') {
            setsellAmount(value);
            if (!value && !buyAmount)
                setbtnCaption('Enter An Amount');
            else
                setbtnCaption('Swap');
        } else if (amtType === 'buy') {
            setbuyAmount(value);
            if (!value && !sellAmount)
                setbtnCaption('Enter An Amount');
            else
                setbtnCaption('Swap');
        }
    }

    const onSwap = async () => {
        if (sellToken === 'BNB') {
            swapEthtoDeri(parseFloat(sellAmount), 0, account).then(async (res) => {
                console.log(res);

                const tokenBal = await getBalance(DERI_TOKEN_ADDR, account);
                console.log(parseInt(tokenBal) / Math.pow(10, 18));
                let deri = Math.floor(parseInt(tokenBal) / Math.pow(10, 18) * 10000) / 10000;
                dispatch(setderiAmtInWallet((deri).toString()));
                const bnbbal = await getBNB(account);
                console.log((parseInt(bnbbal) / Math.pow(10, 18)).toString());
                let bnb = Math.floor(parseInt(bnbbal) / Math.pow(10, 18) * 10000) / 10000;
                dispatch(setbnbAmtInWallet((bnb).toString()));
            });
        } else {
            tokenApprove(SWAP_CONTRACT_ADDR, DERI_TOKEN_ADDR, parseFloat(sellAmount), account).then((ret) => {
                swapDeritoEth(parseFloat(sellAmount), 0, account).then(async (res) => {
                    console.log(res);

                    const tokenBal = await getBalance(DERI_TOKEN_ADDR, account);
                    console.log(parseInt(tokenBal) / Math.pow(10, 18));
                    let deri = Math.floor(parseInt(tokenBal) / Math.pow(10, 18) * 10000) / 10000;
                    dispatch(setderiAmtInWallet((deri).toString()));
                    const bnbbal = await getBNB(account);
                    console.log((parseInt(bnbbal) / Math.pow(10, 18)).toString());
                    let bnb = Math.floor(parseInt(bnbbal) / Math.pow(10, 18) * 10000) / 10000;
                    dispatch(setbnbAmtInWallet((bnb).toString()));
                });
            });
        }
    }

    return (
    <ParentBox>
        <Topbar mode="staking" />
        <ProtocolBox style={{position: 'absolute', bottom: 30, right: 30, zIndex: 1}}>
            <img src='img/deri-protocol.png' alt='protocol' />
        </ProtocolBox>
        <MainBox>
            <SwapBox style={{zIndex: 2}}>
                <Typography style={{fontSize: 30, fontWeight: 700}}>Swap</Typography>
                <Typography style={{fontSize: 15, fontWeight: 600, color: '#999999', marginBottom: 30}}>Trade tokens in an instant</Typography>
                <Box style={{width: '100%', border: '1px solid #999999', marginBottom: 30}}></Box>
                <OneRow style={{paddingBottom: 0, paddingTop: 0}}>
                    <OneRow style={{justifyContent: 'flex-start'}}>
                        <img src={'img/' + sellToken + '.png'} style={{width: 32}} alt='sell token' />
                        <Box style={{marginLeft: 10, fontSize: 20, fontWeight: 600}}>{sellToken}</Box>
                    </OneRow>
                    <OneRow style={{justifyContent: 'flex-end'}}>
                        <Typography>Balance:</Typography>
                        <Typography style={{marginLeft: 10, fontSize: 16, fontWeight: 700}}>{isbnbselltoken ? bnbAmt : deriAmt}</Typography>
                    </OneRow>
                </OneRow>
                <RoundBox>
                    <input value={sellAmount} onChange={(event) => {onChangeAmount(event.target.value, 'sell')}} style={{fontSize: 16, fontWeight: 700, background: 'transparent', color: 'white', border: 'none', outline: 'none', padding: '5px 15px'}} placeholder='0.0'  />
                    <TransBtn onClick={() => onClickMaxAmount('sell')}>MAX</TransBtn>
                </RoundBox>
                <ChangeToken onClick={() => {onClickChageToken()}}>
                    <img src='img/downarrow.png' alt='down arrow' style={{width: 20, height: 20}} />
                </ChangeToken>
                <OneRow style={{paddingBottom: 0, paddingTop: 0}}>
                    <OneRow style={{justifyContent: 'flex-start'}}>
                        <img src={'img/' + buyToken + '.png'} style={{width: 32}} alt='buy token' />
                        <Box style={{marginLeft: 10, fontSize: 20, fontWeight: 600}}>{buyToken}</Box>
                    </OneRow>
                    <OneRow style={{justifyContent: 'flex-end'}}>
                        <Typography>Balance:</Typography>
                        <Typography style={{marginLeft: 10, fontSize: 16, fontWeight: 700}}>{!isbnbselltoken ? bnbAmt : deriAmt}</Typography>
                    </OneRow>
                </OneRow>
                <RoundBox>
                    <input value={buyAmount} onChange={(event) => {onChangeAmount(event.target.value, 'buy')}} style={{fontSize: 16, fontWeight: 700, background: 'transparent', color: 'white', border: 'none', outline: 'none', padding: '5px 15px'}} placeholder='0.0'  />
                    <TransBtn onClick={() => onClickMaxAmount('buy')}>MAX</TransBtn>
                </RoundBox>
                <BlueButton onClick = {() => onSwap()}>{btnCaption}</BlueButton>
            </SwapBox>
        </MainBox>
    </ParentBox>
    )
}

const ProtocolBox = styled(Box)`
    >img {
        @media (max-width: 500px) {
            width: 300px;
        }
    }
`;
const ChangeToken = styled(Box)`
    border-radius: 50%;
    background: #444444;
    width: 30px;
    height: 30px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background: #22aa99;
    }
`;
const BlueButton = styled(Box)`
    border-radius: 12px;
    background: rgb(1, 119, 251);
    width: -webkit-fill-available;
    text-align: center;
    padding: 10px 15px;
    font-size: 20px;
    font-weight: 500;
    :hover {
        color: rgb(1, 119, 251);
        background: white;
        cursor: pointer;
    }
    margin-top: 70px;
`;
const TransBtn = styled(Box)`
    border-radius: 40px;
    border: 2px solid #22aa99;
    color: #22aa99;
    padding: 0px 10px;
    cursor: pointer;
`;
const RoundBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 12px;
    background: #444444;
`;
const OneRow = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
`;
const SwapBox = styled(Box)`
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(44, 45, 58);
    padding: 20px;
`;
const MainBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(26,27,35);
    // margin-top: 100px;
    // margin-bottom: 100px;
    height: 100%;
    position: relative;
`;
const ParentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
    height: 100%;
    background: rgb(26, 27, 35);
`;

export default Swap;