import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'

import Wolf from './components/Wolf';
import Background from './components/Background';
import EggLeftUpper from './components/EggLeftUpper';
import EggLeftLower from './components/EggLeftLower';
import EggRightUpper from './components/EggRightUpper';
import EggRightLower from './components/EggRightLower';
import useField from './utils/gameLogic';


const StyledBoard = styled.div`
  background-color: #C4CCC1;
  width: 520px;
  height: 365px;
  margin: auto;
  padding: 0;
  position: relative;
`

function App() {
  const [slopeLeftUpperPos] = useField()

  console.log(slopeLeftUpperPos)
  return (
    <StyledBoard>
      <Background />
    </StyledBoard>
  );
}

export default App;
