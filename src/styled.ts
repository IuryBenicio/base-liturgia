import styled from "styled-components";

export const BodyLoading = styled.div`
  width: 100%;
  min-height: calc(100dvh - 123px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyContainer = styled.div`
  text-align: center;
  color: white;
  hr {
  }
  section {
    background-color: #4b4c4d;
    padding: 20px 16px;
    &.tema {
      background-color: #c13237;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .tema-data {
        display: flex;
        align-items: center;
        .tema_name {
          font-size: 30px;
          font-weight: 900;
          margin-right: 4px;
        }
        .tema_subtema {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
          .tema_txt {
            font-size: 38px;
          }
          .subtema_txt {
            padding: 0 8px;
            font-size: 20px;
            width: 100%;
          }
        }
        margin-bottom: 8px;
      }
    }
    &#preludio {
      h3 {
        font-size: 28px;
      }
    }
    &#louvores {
      .title {
        font-size: 28px;
        font-weight: 900;
      }
      ul {
        margin-top: 16px;
        li {
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .nome {
            font-size: 24px;
          }
        }
      }
    }
    &#sermao {
      h3 {
        font-size: 28px;
      }
      .palavra_data {
        h3 {
          margin-top: 8px;
          font-size: 20px;
          font-weight: normal;
        }
        .data_tema {
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            font-size: 20px;
          }
          .data_tema_subtema {
            margin-left: 16px;
            .subtema {
              font-size: 16px;
            }
          }
        }
      }
    }
    &#louvor_pos_palavra {
      h3 {
        font-size: 28px;
      }
      ul {
        margin-top: 16px;
        li {
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .nome {
            font-size: 24px;
          }
        }
      }
    }
    &#avisos {
      h3 {
        font-size: 28px;
      }
      ul {
        li {
          margin: 16px auto;
          width: 90%;
          .title {
            font-size: 24px;
          }
          p {
            margin-top: 8px;
          }
        }
      }
    }
  }
`;
