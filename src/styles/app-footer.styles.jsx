import styled from "styled-components";

export const AppFooterContainer = styled.div`
  footer {
    background-color: #0f0f0f;
    padding: 60px 0;
    color: #fff;
    .row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 2fr;
      grid-gap: 60px;
      .column {
        .col-head {
          font-weight: bold;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        ul {
          li {
            a {
              color: #fff;
              text-transform: capitalize;
              font-size: 11px;

              &:hover {
                border-bottom: 1px solid #fff;
              }
            }
          }
        }
      }
      .subscribe {
        border: 1px solid #fff;
        display: flex;
        margin: 20px 0;
        border: 1px solid #fff;
        justify-content: space-between;
        border-radius: 3px;

        input {
          // width: 80%;
          border: none;
          padding: 10px;
          background: #0f0f0f;
          color: #fff;
        }
        button {
          background: #fff;
          border: none;
          padding: 10px;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: bold;
          &:focus {
            outline: 0;
          }
        }
      }
      .social-media {
        display: flex;
        margin-top: 15px;

        li {
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
        }
      }
    }
    .built-by {
      font-size: 12px;
      margin-top: 14px;

      p {
        a {
          text-transform: uppercase;
          color: #fff;
          margin-left: 5px;
        }
      }
    }

    @media screen and (max-width: 992px) {
      .row {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }

    @media screen and (max-width: 576px) {
      .row {
        grid-template-columns: 1fr !important;
        text-align: center;

        .social-media {
          justify-content: center !important;
        }
      }
      .built-by {
        margin-top: 20px;
        text-align: center;
      }
    }
  }
`;
