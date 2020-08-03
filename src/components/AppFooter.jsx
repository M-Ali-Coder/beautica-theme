import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  AppFooterContainer,
  Footer,
  RowContainer,
  RowColumnHead,
  RowColumnHeadList,
  RowColumn,
  Container,
  RouteLink,
  RowColumnHeadListItem,
  SocialMediaContainer,
  SocialMediaListItem,
  SubscribeForm,
  SubscibeFormInput,
  SubscribeFormButton,
  BuiltByContainer,
} from "../styles/app-footer.styles";

const AppFooter = () => {
  return (
    <AppFooterContainer>
      <Footer>
        <Container>
          <RowContainer>
            <RowColumn>
              <RowColumnHead>shop</RowColumnHead>
              <RowColumnHeadList>
                <RowColumnHeadListItem>
                  <RouteLink to="#">#trend now</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">makeup</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">nail</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">beauty accessories</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">body art</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">makeup tools</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">fragrance</RouteLink>
                </RowColumnHeadListItem>
              </RowColumnHeadList>
            </RowColumn>

            <RowColumn>
              <RowColumnHead>information</RowColumnHead>
              <RowColumnHeadList>
                <RowColumnHeadListItem>
                  <RouteLink to="#">about us</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">theme FAQS</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">new collection</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">best sellers</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">manufactures</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">makeup tools</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">privacy policy</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">terms & conditions</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">blog</RouteLink>
                </RowColumnHeadListItem>
              </RowColumnHeadList>
            </RowColumn>

            <RowColumn>
              <RowColumnHead>customer service</RowColumnHead>
              <RowColumnHeadList>
                <RowColumnHeadListItem>
                  <RouteLink to="#">search terms</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">advanced search</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">order and return search</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">contact us</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">RSS</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">help & FAQS</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">consutant</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">terms & conditions</RouteLink>
                </RowColumnHeadListItem>
                <RowColumnHeadListItem>
                  <RouteLink to="#">store locations</RouteLink>
                </RowColumnHeadListItem>
              </RowColumnHeadList>
            </RowColumn>

            <RowColumn className="column">
              <RowColumnHead className="col-head">SIGN UP FOR OUR NEWSLETTER</RowColumnHead>
              <p className="mr-b-10 font-size-12">
                Receive our latest updates about our products and promotion
              </p>

              <SubscribeForm className="subscribe">
                <SubscibeFormInput
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                />
                <SubscribeFormButton type="submit">subscribe</SubscribeFormButton>
              </SubscribeForm>
              <h4>
                <span>STAY CONNECTED</span>
              </h4>

              <SocialMediaContainer>
                <SocialMediaListItem>
                  <Link to="#">
                    <FaFacebookF />
                  </Link>
                </SocialMediaListItem>
                <SocialMediaListItem>
                  <Link to="#">
                    <FaTwitter />
                  </Link>
                </SocialMediaListItem>
                <SocialMediaListItem>
                  <Link to="#">
                    <FaPinterestP />
                  </Link>
                </SocialMediaListItem>
                <SocialMediaListItem>
                  <Link to="#">
                    <FaInstagram />
                  </Link>
                </SocialMediaListItem>
              </SocialMediaContainer>
            </RowColumn>
          </RowContainer>

          <BuiltByContainer>
            <p className="font-size-13 mr-t-20">
              © 2020 Beautica All Rights Reserved. Ecommerce Software by
              <Link to="#">M.Mega</Link>
            </p>
            <p className="font-size-13">
              BigCommerce Themes & Templates by <Link to="#">Code4Fun</Link>
            </p>
          </BuiltByContainer>
        </Container>
      </Footer>
    </AppFooterContainer>
  );
};

export default AppFooter;
