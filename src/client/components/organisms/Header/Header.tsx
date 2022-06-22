import React, { FC } from "react";

import * as S from "./styles";
interface Props {}
/**
 * Show the navigation bar
 */
const Header: FC<Props> = ({}: Props) => {
  return (
    <>
      <S.Header>
        {/*
     You can add you content here to have a header on every page but
      don't forget to add your css for the element
     */}
      </S.Header>
    </>
  );
};

export default Header;
