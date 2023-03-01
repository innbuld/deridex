import { useState } from 'react';
import { Box, Typography } from "@mui/material";
// import useAuth from "../hooks/useAuth";
import styled from "styled-components";
import {
    RightarrowIcon,
    DownarrowIcon,
    SearchIcon,
} from "../Components/ImgSvg";
import LPToken from '../Components/LPToken';
import Topbar from "../Components/Topbar";

const Staking = () => {
    const [active, setActive] = useState(true);
    const [liquidityOnly, setLiquidityOnly] = useState(true);

    // const { account } = useAuth();

    return (
    <ParentBox>
        <Topbar mode="staking" />
        <HeaderBox>
            <Box>
                <Typography>Provide Liquidity, Earn DERI</Typography>
                <Typography>$105,786,890.44</Typography>
                <Box style={{cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: 10}}>
                    <Typography>Total Value Locked(TVL)</Typography>
                    <Typography style={{marginLeft: 15, marginRight: 15, color: '#AAA9AA'}}>Tutorial</Typography>
                    <Box style={{paddingBottom: 5}}>{RightarrowIcon}</Box>
                </Box>
                <SearchContent style={{padding: 0, marginTop: 20}}>
                    <SearchBox>
                        <Box>{SearchIcon}</Box>
                        <input placeholder='Search by token symbol or pool address' style={{marginLeft: 10, color: 'white', marginBottom: 5, border: 'none', outline: 'none', background: 'transparent', width: '-webkit-fill-available'}} />
                    </SearchBox>
                    <SearchButton>Search</SearchButton>
                </SearchContent>
            </Box>
            <img src='img/background.png' alt='back' />
        </HeaderBox>
        <RoundBox style={{marginBottom: 20}}>
            <Box style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <ControlBox>
                    <OneRow style={{borderRadius: 12, background: 'rgb(59, 60, 78)', marginBottom: 20}}>
                        <ActiveButton active={active} onClick={() => setActive(true)}>Active</ActiveButton>
                        <ActiveButton active={!active} onClick={() => setActive(false)}>Ended</ActiveButton>
                    </OneRow>
                    <OneRow style={{flexWrap: 'wrap', gap: 20, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50}}>
                        <OneRow style={{width: '-webkit-fill-available', flex: 1, marginBottom: 20}}>
                            <Typography style={{marginRight: 20, whiteSpace: 'nowrap', width: '-webkit-fill-available'}}>My Liquidity Only</Typography>
                            <SwitchBox onClick={() => setLiquidityOnly(!liquidityOnly)}>
                                <SwitchButton liquidityOnly={liquidityOnly}></SwitchButton>
                            </SwitchBox>
                        </OneRow>
                        <OneRow onClick={() => {}} style={{display: 'flex', marginBottom: 20, justifyContent: 'space-around', border: '1px solid rgb(59, 60, 78)', flex: 1, borderRadius: 14, padding: '5px 20px', cursor: 'pointer', width: '-webkit-fill-available'}}>
                            <Typography style={{width: '-webkit-fill-available', whiteSpace: 'nowrap'}}>Available Balance</Typography>
                            <Box style={{marginBottom: 5, marginLeft: 30}}>{DownarrowIcon}</Box>
                        </OneRow>
                    </OneRow>
                </ControlBox>
                <OneRow style={{flexWrap: 'wrap', gap: 20, marginTop: 40, justifyContent: 'center', width: '-webkit-fill-available', height: '100%'}}>
                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '-webkit-fill-available', maxWidth: '300px', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='usdt' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - USDT LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>600.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDT APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 30, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeUSDT</BlueButton>
                        </OneRow>
                    </RoundBox>

                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '-webkit-fill-available', maxWidth: '300px', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='usdc' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>DERI - USDC LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>200.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDC APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 30, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeDeri</BlueButton>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeUSDC</BlueButton>
                        </OneRow>
                    </RoundBox>

                    {/* <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '-webkit-fill-available', maxWidth: '300px', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='busd' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - BUSD LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box style={{textAlign: 'center', width: '-webkit-fill-available'}}>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>320.73%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 30, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeUSDC</BlueButton>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                        </OneRow>
                    </RoundBox> */}

                    {/* <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '-webkit-fill-available', maxWidth: '300px', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='usdt' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - USDT LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>600.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>35.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>USDT APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$635,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 30, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeBUSD</BlueButton>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeUSDT</BlueButton>
                        </OneRow>
                    </RoundBox> */}

                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '-webkit-fill-available', maxWidth: '300px', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='sury' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - SURGE LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>100.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>20.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>SURGE APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$35,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 30, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeDeri</BlueButton>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeSURGE</BlueButton>
                        </OneRow>
                    </RoundBox>

                    <RoundBox style={{background: 'rgb(59, 60, 78)', flex: 1, width: '-webkit-fill-available', maxWidth: '300px', minWidth: '300px'}}>
                        <OneRow style={{justifyContent: 'flex-start'}}>
                            <LPToken token1='deri' token2='ethr' />
                            <Typography style={{marginLeft: 20, fontWeight: 600}}>Deri - WETH LP</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20, padding: '0 20px'}}>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>150.00%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>DERI APR</Typography>
                            </Box>
                            <Typography style={{fontSize: 40, fontWeight: 700}}>/</Typography>
                            <Box>
                                <Typography style={{fontSize: 24, fontWeight: 700}}>15.07%</Typography>
                                <Typography style={{fontSize: 14, fontWeight: 700}}>WETH APR</Typography>
                            </Box>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 20}}>
                            <Typography>Reward Token</Typography>
                            <img src="img/deri.png" style={{width: 25, height: 25}} alt='deri' />
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Value Locked</Typography>
                            <Typography>$135,577.11</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Share</Typography>
                            <Typography>$0 (0%)</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>Available Balance</Typography>
                            <Typography>$0</Typography>
                        </OneRow>
                        <OneRow style={{justifyContent: 'space-between', marginTop: 15}}>
                            <Typography>My Reward</Typography>
                            <OneRow>
                                <Typography>$0</Typography>
                                <img src='img/gift.png' alt='gift' style={{width: 15, height: 15, marginBottom: 3, marginLeft: 5}} />
                            </OneRow>
                        </OneRow>
                        <OneRow style={{marginTop: 30, justifyContent: 'space-between', flexWrap: 'wrap', gap: 10}}>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeDeri</BlueButton>
                            <BlueButton style={{width: '-webkit-fill-available', textAlign: 'center', flex: 1}}>StakeWETH</BlueButton>
                        </OneRow>
                    </RoundBox>
                </OneRow>
            </Box>
        </RoundBox>
    </ParentBox>
    )
}

const SwitchButton = styled(Box)<any>`
    border-radius: 50%;
    background: white;
    width: 25px;
    height: 25px;
    position: relative;
    top: 0;
    left: ${({liquidityOnly}) => liquidityOnly ? 0 : 25}px;
    transition: all .3s;
    cursor: pointer;
`;
const SwitchBox = styled(Box)`
    border-radius: 40px;
    background: rgb(59, 60, 78);
    padding: 3px;
    height: 25px;
    width: 66px;
    cursor: pointer;
`;
const ActiveButton = styled(Box)<any>`
    border-radius: 12px;
    padding: 10px 40px;
    cursor: pointer;
    background: ${({ active }) => active ? "white" : "transparent"};
    color: ${({active}) => active ? 'rgb(1, 119, 251)' : 'white'};
    transition: all .2s;
`;
const ControlBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    @media (max-width: 770px) {
        justify-content: center;
    }
`;
const OneRow = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: space-between;
`;
const RoundBox = styled(Box)`
    border-radius: 12px;
    padding: 20px;
    background: rgb(44, 45, 58);
    // width: -webkit-fill-available;
    @media (max-width: 600px) {
        margin-bottom: 20px;
    }
`;
const SearchButton = styled(Box)`
    padding: 10px 40px;
    background: rgb(1, 119, 251);
    border-radius: 12px;
    width: 100%;
    text-align: center;
    flex: 1;
    :hover {
        color: rgb(1, 119, 251);
        background: white;
        cursor: pointer;
    }
`;
const BlueButton = styled(Box)`
    padding: 10px 40px;
    background: rgb(1, 119, 251);
    border-radius: 12px;
    width: 100%;
    text-align: center;
    flex: 1;
    :hover {
        color: rgb(1, 119, 251);
        background: white;
        cursor: pointer;
    }
    @media (max-width: 600px) {
        margin-bottom: 20px;
    }
`;
const SearchBox = styled(Box)`
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid rgb(44, 45, 58);
    width: -webkit-fill-available;
    flex: 4;
    margin-right: 10px;
`;
const SearchContent = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    flex-wrap: wrap;
    gap: 10px;
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
            font-size: 34px;
            font-weight: 600;
        }
        >p:nth-child(2) {
            font-size: 44px;
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
    overflow: auto;
`;

export default Staking;