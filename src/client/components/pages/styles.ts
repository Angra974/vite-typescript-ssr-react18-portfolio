import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  /* A seta indica pra pegar somente as divs filhas diretas */
  > div {
    width: 50%;
  }

  h1 {
    font-size: 58px;
    margin-bottom: 16px;
    font-weight: 700;
    color: #eee9db;
    line-height: 87px;
  }

  h3 {
    padding-right: 50px;
    font-size: 16px;
    font-weight: 400;
    color: #eee9db;
    line-height: 24px;
  }
`;

export const ColumnImage = styled.div`
  text-align: right;
`;
