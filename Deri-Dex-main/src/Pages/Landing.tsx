// import { useState } from 'react';
import { Box, Typography } from "@mui/material";
// import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import {
    TwitterIcon,
    TelegramIcon,
    EmailIcon,
    FacebookIcon,
    DiscordIcon,
} from "../Components/ImgSvg";
import Topbar from "../Components/Topbar";

const Landing = () => {
    // const { account } = useAuth();
    const CopyRight = (new Date()).getFullYear();

    return (
    <ParentBox>
        <Topbar mode="staking" />
        <HeaderBox>
            <Box>
                <Typography>CRYPTO CURRENCY</Typography>
                <Typography>EXCHANGE</Typography>
            </Box>
            <img src='img/background.png' alt='back' />
        </HeaderBox>
        <MainBox>
            <OneRow style={{flexWrap: 'wrap', marginBottom: 20, gap: 20}}>
                <Box>
                    <OneRow style={{justifyContent: 'flex-start'}}>
                        <img src="img/deri.png" alt='logo' />
                        <Typography style={{marginLeft: 20, fontSize: 24}}>DERIDEX</Typography>
                    </OneRow>
                    <Typography style={{maxWidth: 270, marginTop: 10}}>DeriDex provides exchange, staking, liquidity services on binance smart chain.</Typography>
                </Box>
                <Box>
                    <SearchBox>
                        <input type='email' placeholder='Enter your Email' style={{marginLeft: 10, color: 'white', marginBottom: 5, border: 'none', outline: 'none', background: 'transparent', width: '-webkit-fill-available'}} />
                    </SearchBox>
                    <BlueButton style={{maxWidth: 70}}>Subscribe</BlueButton>
                </Box>
            </OneRow>
            <OneRow style={{flexWrap: 'wrap', gap: 20}}>
                <Typography style={{fontSize: 18}}>©&nbsp;{CopyRight}&nbsp;DeriDex. All Rights Reserved.</Typography>
                <OneRow style={{maxWidth: 200}}>
                    <Box style={{cursor: 'pointer'}}>{TwitterIcon}</Box>
                    <Box style={{cursor: 'pointer', marginLeft: 10}}>{TelegramIcon}</Box>
                    <Box style={{cursor: 'pointer', marginLeft: 10}}>{EmailIcon}</Box>
                    <Box style={{cursor: 'pointer', marginLeft: 10}}>{FacebookIcon}</Box>
                    <Box style={{cursor: 'pointer', marginLeft: 10}}>{DiscordIcon}</Box>
                </OneRow>
            </OneRow>
        </MainBox>
    </ParentBox>
    )
}

const SearchBox = styled(Box)`
    border-radius: 7px;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(44, 45, 58);
    width: -webkit-fill-available;
    flex: 4;
    margin-right: 10px;
    border: 1px solid #222222;
`;
const OneRow = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MainBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: flex-end;
    padding: 30px;
    background: rgb(44, 45, 58);
    width: -webkit-fill-available;
    height: 100%;
`;
const BlueButton = styled(Box)`
    padding: 5px 20px;
    background: rgb(1, 119, 251);
    font-size: 14px;
    border-radius: 7px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    margin-top: 15px;
    flex: 1;
`;
const HeaderBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    padding-bottom: 0;
    flex-wrap: wrap;
    gap: 50px;
    >div {
        >p:nth-child(1) {
            font-size: 60px;
            font-weight: 600;
        }
        >p:nth-child(2) {
            font-size: 60px;
            font-weight: 800;
            color: rgb(1, 119, 251);
        }
    }
    >img {
        width: 600px;
    }
    @media (max-width: 800px) {
        padding: 30px;
        padding-bottom: 0px;
        >img {
            width: 500px;
        }
    }
    @media (max-width: 600px) {
        padding: 10px;
        padding-bottom: 0px;
        padding-top: 20px;
        >img {
            width: 400px;
        }
    }
    @media (max-width: 450px) {
        padding: 10px;
        padding-bottom: 0px;
        padding-top: 20px;
        >img {
            width: 350px;
        }
    }
    @media (max-width: 450px) {
        >div {
            >p:nth-child(1) {
                font-size: 26px;
            }
            >p:nth-child(2) {
                font-size: 35px;
            }
        }
    }
`;
const ParentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    align-items: center;
    justify-content: space-between;
    width: -webkit-fill-available;
    background: rgb(26, 27, 35);
    height: 100%;
`;

export default Landing;