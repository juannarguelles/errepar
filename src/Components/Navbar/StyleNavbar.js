import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {BiMenuAltRight} from 'react-icons/bi';
import {BiUser} from 'react-icons/bi';
import {BsSearch} from 'react-icons/bs';

export const Nav = styled.nav`
    background: rgb(135,194,185);
    background: linear-gradient(90deg, rgba(135,194,185,1) 0%, rgba(45,201,186,1) 74%, rgba(76,86,177,1) 100%);
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 20px;

    &.active {
        color: #4c56b1;
    }
`

export const Bars = styled(BiMenuAltRight)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const User = styled(BiUser)`
    color: #fff;
    font-size: 30px;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none
    }
`

export const NavBtnLink = styled (Link)`
    border-radius: 4px;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #187777;
    }
`

export const SearchInput = styled.input`
    color: black;
    font-size: 16px;
    border: none;
    outline: none;
    margin-left: 15px;
`
export const Search = styled(BsSearch)`
    color: #3bc8ba;
    font-size: 30px;
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;

export const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1140px;

`