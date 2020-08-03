import styled from "styled-components";
import { Link } from "react-router-dom";
import { dark, darkRed, breakpointLg, breakpointMd, breakpointXl } from "./variables";

export const AppFooterContainer = styled.div``;

// Footer element
export const Footer = styled.footer`
  background-color: ${dark};
  padding: 60px 0;
  color: #fff;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: ${breakpointXl}) {
    width: 95%;
  }
`;

// Row
export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  grid-gap: 60px;

  /* Media query */
  @media screen and (max-width: ${breakpointLg}) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media screen and (max-width: ${breakpointMd}) {
    grid-template-columns: 1fr !important;
    text-align: center;
  }
`;

export const RowColumn = styled.div``;

export const RowColumnHead = styled.div`
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const RowColumnHeadList = styled.ul``;

export const RouteLink = styled(Link)`
  color: #fff;
  text-transform: capitalize;
  font-size: 11px;

  &:hover {
    border-bottom: 1px solid #fff;
  }
`;

export const RowColumnHeadListItem = styled.li`
  ${RouteLink}
`;

export const SubscribeForm = styled.form`
  border: 1px solid #fff;
  display: flex;
  margin: 20px 0;
  border: 1px solid #fff;
  justify-content: space-between;
  border-radius: 3px;
`;

export const SubscibeFormInput = styled.input`
  border: none;
  padding: 10px;
  background: transparent;
  color: #fff;
  outline: 0;
`;

export const SubscribeFormButton = styled.button`
  background: #fff;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  &:focus {
    outline: 0;
  }
`;

export const SocialMediaContainer = styled.ul`
  display: flex;
  margin-top: 15px;

  @media screen and (max-width: ${breakpointMd}) {
    justify-content: center !important;
  }
`;

export const SocialMediaListItem = styled.li`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  margin-right: 15px;
  line-height: 45px;

  a {
    font-size: 14px !important;

    svg {
      font-size: 15px;
      color: #000;
    }
  }
`;

export const BuiltByContainer = styled.div`
  font-size: 12px;
  margin-top: 14px;

  p {
    a {
      text-transform: uppercase;
      color: ${darkRed};
      margin-left: 5px;
    }
  }

  @media screen and (max-width: ${breakpointXl}) {
    margin-top: 20px;
    text-align: center;
  }
`;
