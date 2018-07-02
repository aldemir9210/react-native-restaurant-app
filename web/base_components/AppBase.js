import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StatusBar from './StatusBar';
import Colors from '../../src/constants/colors';

const AppBaseView = styled.div`
  display: flex;
  flex: 1;
  background-color: ${Colors.baseColor};
`;

const ComponentView = styled.div`
  position: absolute;
  top: 8%;
`;

const AppBase = ({ children }) => (
  <AppBaseView>
    <StatusBar />
    <ComponentView>
      {children}
    </ComponentView>
  </AppBaseView>
);

AppBase.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AppBase;
