import React from 'react'
import styled from 'styled-components'
import FooteLinkIcon from '../../assets/images/footerLink_icon.png'
import FighterIcon from '../../assets/images/fighter-icon.png'
import BLogo from '../../assets/images/binance-logo.png'
import './Footer.css'
const Link02: React.FC = () => {
    return (
        <FLink02B>
        <StyledAbsoluteLinkB href="#" >Powered by Atom Foundation:</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="https://jointer.io" target="_blank">Jointer.io</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >BSCbonus.com</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >SmartSwap.exchange</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >ZERO/1</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >DegenSwap.io</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >ElementZero.network</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >Packey.insure</StyledAbsoluteLinkB> |
        <StyledAbsoluteLinkB href="#" >Mass.investments</StyledAbsoluteLinkB>

        </FLink02B>
    )
}

const Link01: React.FC = () => {
    return (
      <FLink01B>
        <StyledAbsoluteLinkA href="#" >List new token</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Upgrade to v2</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Voting</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Github</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Medium</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Telegram</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Twitter</StyledAbsoluteLinkA> |
        <StyledAbsoluteLinkA href="#" >Discord</StyledAbsoluteLinkA> |
        <StyledIcon01 href="#"></StyledIcon01>
      </FLink01B>
    )
}

const StyledIcon01 = styled.a`
    cursor:pointer; 
    text-decoration: none;
    width:25px;
    height:25px;
    margin:0 16px;
    display:inline-block;
    background:url(${FooteLinkIcon}) 50% 50% no-repeat;
`
const StyledAbsoluteLinkA = styled.a`
    cursor:pointer; 
    text-decoration: none;
    color:#fff;
    font:normal 10px/16px "Press Start 2P", arial;
    margin:0 16px;
    &:hover {
        color: #F3B92E;
    }
`
const StyledAbsoluteLinkB = styled.a`
    cursor:pointer; 
    text-decoration: none;
    color:#fff;
    font:normal 12px/16px "IBM Plex Mono", arial;
    margin:0 6px;
    &:hover {
        color: #F3B92E;
    }
`

const FooterFrame = styled.footer`

    background-color:#070707;
    width:100%;
    height:100px; 
    margin-top:40px;
    display:flex;
    align-items:center;
    padding:28px 20px;
    flex-wrap:wrap;
    position:relative;
    @media (min-width: 320px) and (max-width: 500px){
        flex-wrap: wrap;
        flex-direction: row;
    }
    @media (min-width: 501px) and (max-width: 767px){
        height:auto;
        padding:10px 10px 30px 10px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        height:auto;
        padding:10px 10px 30px 10px;
    } 
`

const JRLogo = styled.div`
    margin-right:auto;
    min-width:110px;

    @media (min-width: 320px) and (max-width: 500px){
        margin:0 auto 20px auto;
    }
`

const FooterCbox = styled.div`
    text-align:center;
    margin:0 auto;
`

const FLink01B = styled.div`
    font:normal 15px/16px arial;color:#424242;
    padding-bottom:8px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const FLink02B = styled.div`
    font:normal 15px/16px arial;color:#2a2a2a;
    padding-bottom:8px;
`

const BinanceLogo = styled.div`
    margin-left:auto;
    @media (min-width: 320px) and (max-width: 500px){
        margin:0 auto 20px auto;
    }
`

const BinanceLogoLink = styled.a`
    &:hover {
        opacity:0.7;
    }
`

const FooterBody = styled.div`
    display:block;
    margin: 8px;
    width:99%;
    position: fixed;
    left: 0;
    bottom: 0;
    

`
const Footer: React.FC = () => {
    
    return (
        <FooterBody>
            <FooterFrame>
                <JRLogo>
                  <img style={{ position: 'absolute', left:10, top:-23}} src={FighterIcon} alt="Fighter" />
                </JRLogo>
                <FooterCbox>
                    <Link01 />
                    <Link02 />
                </FooterCbox>
                <BinanceLogo>
                    <BinanceLogoLink href="https://www.binance.org/en" target="_blank"><img src={BLogo} /> </BinanceLogoLink>
                </BinanceLogo>
            </FooterFrame>
        </FooterBody>
    )}

export default Footer