import styled from "styled-components";
import { Menu as AntdMenu } from "antd";

import theme from "../../theme";

export const Menu = styled(AntdMenu)`
  background-color: ${theme.lighterColor};
  width: 27%;
`;
