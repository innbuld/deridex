import { Box, Typography, Button as MuiButton } from "@mui/material";

import { FC, useState } from "react";
import useAuth from "../hooks/useAuth";
import { shortAddr } from "../utils/calculation";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UAuth from '@uauth/js';

interface SidebarProps {
    mode?: string;
}


const Topbar: FC<SidebarProps> = (props: SidebarProps) => {
    const { account, logout, login, logon, loggout } = useAuth();
    function Log(){
        const uauth = new UAuth({
            clientID: "2930f030-eda8-40d8-a5b5-c2c93505e936",
            redirectUri: "https://derio.vercel.app",
            scope: "openid wallet email social:optional social:telegram:optional social:twitter:optional"
          })

          const logon = () =>{
            uauth.loginWithPopup().then((authorization)=>{console.log(authorization)})
          }

          const loggout = () =>{
            uauth.logout()
          }



    }
    const [open, setOpen] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false);

    const navigate = useNavigate();

    const copyAddress = () => {
        navigator.clipboard.writeText(account || "")
    }

    return <Box position="fixed" width="-webkit-fill-available" zIndex="20" style={{top: 0, left: 0}}>
        <Box
            display="flex"
            alignItems="center"
            py="5px"
            px={2}
            bgcolor="rgb(26, 27, 35)"
            width="-webkit-fill-available"
            justifyContent={'space-between'}
            zIndex="20"
        >
            <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 10}}>
                <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '-webkit-fill-available'}}>
                    <MobileMenu>
                        <img onClick={() => setMobileMenu(!mobileMenu)} src="img/button.png" alt="button" style={{background: 'rgb(59, 60, 78)', borderRadius: 7, width: 24, padding: 3, marginTop: 10, cursor: 'pointer'}} />
                        {mobileMenu && <MobileMenuBox>
                            <Logo style={{justifyContent: 'flex-end', width: '-webkit-fill-available'}}>
                                <MobileLogo>
                                    <Box style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Box onClick={() => {navigate('/')}} style={{width: '-webkit-fill-available', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                                            <Typography style={{color: 'blue', fontSize: 40, fontWeight: 500}}>Deri</Typography>
                                            <Typography style={{color: 'white', fontSize: 40, fontWeight: 500}}>Dex</Typography>
                                        </Box>
                                        <img src="img/exit.png" onClick={() => {setMobileMenu(false)}} alt="exit" />
                                    </Box>
                                    <Box style={{display: 'flex', width: '-webkit-fill-available', alignItems: 'center', justifyContent: 'space-between'}}>
                                        <Box style={{width: '100%', textAlign: 'center'}}>
                                            <Typography onClick={() => {navigate('/exchange');setMobileMenu(false);}} style={{width: '100%', color: 'white', fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Exchange</Typography>
                                            <Typography onClick={() => {navigate('/staking');setMobileMenu(false);}} style={{width: '100%', color: 'white', fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Staking</Typography>
                                            <Typography onClick={() => {navigate('/staking');setMobileMenu(false);}} style={{width: '100%', color: 'white', fontSize: 20, marginTop: 20, fontWeight: 600, cursor: 'pointer'}}>Liquidity</Typography>
                                        </Box>
                                    </Box>
                                </MobileLogo>
                            </Logo>
                        </MobileMenuBox>}
                    </MobileMenu>
                    <Logo onClick={() => {navigate('/')}}>
                        <Typography style={{color: 'blue', fontSize: 20, fontWeight: 500}}>Deri</Typography>
                        <Typography style={{color: 'white', fontSize: 20, fontWeight: 500}}>Dex</Typography>
                    </Logo>
                </Box>
                <DesktopMenu>
                    <Typography onClick={() => {navigate('/exchange')}} style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Exchange</Typography>
                    <Typography onClick={() => {navigate('/staking')}} style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Staking</Typography>
                    <Typography onClick={() => {navigate('/staking')}} style={{color: 'white', marginLeft: 30, fontSize: 14, fontWeight: 600, cursor: 'pointer'}}>Liquidity</Typography>
                </DesktopMenu>
            </Box>
            
            <ConnectWallet>
                <img onClick={() => {navigate('/')}} src="img/deri.png" style={{height: 35, marginRight: 20, cursor: 'pointer'}} alt="logo" />
                {props.mode === "staking" && !account &&
                    <BlueButton onClick={login} style={{fontSize: 13, fontWeight: 400}}>Connect Wallet</BlueButton>
                }
                {props.mode === "staking" && account &&
                    <Box display="flex" fontSize="15px" alignItems="center" style={{ cursor: 'pointer' }} position="relative" onClick={() => { setOpen(!open) }}>
                        <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '-webkit-fill-available'}}>
                            <WalletInfo style={{cursor: 'pointer'}}>
                                <DotComponent style={{marginLeft: 15}}></DotComponent>
                                <Typography style={{padding: '0 15px 0 5px'}}>BSC</Typography>
                                <WalletInfo style={{background: 'rgb(59, 60, 78)', padding: '5px 10px'}}>{shortAddr(account || "")}</WalletInfo>
                            </WalletInfo>
                        </Box>
                        <Box position="absolute" color="white" display={open ? "flex" : "none"} alignItems="flex-start" flexDirection="column" borderRadius="6px" p="1vw" pr="1.5vw" right="0%" width="95%" boxShadow="5px 4px 13px 7px #000000" top="calc(100% + 1vw)" bgcolor="rgb(44, 45, 58)" zIndex={10}>
                            <Box component={MuiButton} color="white" style={{ textTransform: 'none' }} onClick={copyAddress} startIcon={<ContentCopyIcon />}>Copy Address</Box>
                            <MuiButton
                                color="inherit"
                                style={{ textTransform: 'none' }}
                                startIcon={<OpenInNewIcon />}
                                href={`https://bscscan.com/address/${account}`}
                                target="_blank"
                            >
                                View on Explorer
                            </MuiButton>
                            <Box component={MuiButton} color="white" style={{ textTransform: 'none' }} startIcon={<LogoutIcon />} onClick={logout} >Disconnect</Box>
                        </Box>
                    </Box>
                }
            </ConnectWallet>

            <Logg>
                
                {props.mode === "staking" && !account &&
                    <BlueButton onClick={logon} style={{fontSize: 13, fontWeight: 400}}>Login With Unstoppable</BlueButton>
                }
                {props.mode === "staking" && account &&
                    <Box display="flex" fontSize="15px" alignItems="center" style={{ cursor: 'pointer' }} position="relative" onClick={() => { setOpen(!open) }}>
                        {/* <Box style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '-webkit-fill-available'}}>
                            <WalletInfo style={{cursor: 'pointer'}}>
                                <DotComponent style={{marginLeft: 15}}></DotComponent>
                                <Typography style={{padding: '0 15px 0 5px'}}>BSC</Typography>
                                <WalletInfo style={{background: 'rgb(59, 60, 78)', padding: '5px 10px'}}>{shortAddr(account || "")}</WalletInfo>
                            </WalletInfo>
                        </Box> */}
                        {/* <Box position="absolute" color="white" display={open ? "flex" : "none"} alignItems="flex-start" flexDirection="column" borderRadius="6px" p="1vw" pr="1.5vw" right="0%" width="95%" boxShadow="5px 4px 13px 7px #000000" top="calc(100% + 1vw)" bgcolor="rgb(44, 45, 58)" zIndex={10}>
                            <Box component={MuiButton} color="white" style={{ textTransform: 'none' }} onClick={copyAddress} startIcon={<ContentCopyIcon />}>Copy Address</Box>
                            <MuiButton
                                color="inherit"
                                style={{ textTransform: 'none' }}
                                startIcon={<OpenInNewIcon />}
                                href={`https://bscscan.com/address/${account}`}
                                target="_blank"
                            >
                                View on Explorer
                            </MuiButton>
                            <Box component={MuiButton} color="white" style={{ textTransform: 'none' }} startIcon={<LogoutIcon />} onClick={logout} >Disconnect</Box>
                        </Box> */}
                    </Box>
                }
            </Logg>
        </Box>
    </Box>
}

const BlueButton = styled(Box)`
    border-radius: 7px;
    background: rgb(1, 119, 251);
    width: -webkit-fill-available;
    text-align: center;
    padding: 5px 10px;
    :hover {
        color: rgb(1, 119, 251);
        background: white;
        cursor: pointer;
    }
`;







     

const DotComponent = styled(Box)`
    border-radius: 50%;
    background: rgb(83, 243, 195);
    width: 5px;
    height: 5px;
`;
const WalletInfo = styled(Box)`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: rgb(44, 45, 58);
    color: white;
`;
const MobileLogo = styled(Box)`
    position: relative;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    >img:last-child {
        position: absolute;
        top: 30px;
        left: calc(100% - 20px);
    }
`;
const MobileMenuBox = styled(Box)`
    background: #212121fa;
    padding: 20px;
    position: absolute;
    width: calc(70vw);
    height: 100vh;
    top: -15px;
    left: -40px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    >p:hover {
        color: yellow !important;
    }
`;
const Logo = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    >p {
        @media (max-width: 570px) {
            display: none;
        }
    }
`;
const ConnectWallet = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 480px;
    @media (max-width: 450px) {
        // display: none;
    }
`;


const Logg = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: 30px;
    @media (max-width: 450px) {
        // display: none;
    }
`;

const DesktopMenu = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    white-space: nowrap;
	@media (max-width: 888px) {
		display: none;
	}
    >p:hover {
        color: yellow !important;
    }
`

const MobileMenu = styled(Box)`
    padding-bottom: 4px;
    position: relative;
    margin-right: 30px;
	@media (min-width: 888px) {
		display: none;
	}
`

export default Topbar;