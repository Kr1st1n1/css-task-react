import styled from 'styled-components'
import { breakPoints } from './variables'

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 0 36px;
  padding-top: 120px;
  margin: 0 auto;

  @media (min-width: ${breakPoints.s}) {
    padding: 0 16px;
    padding-top: 100px;
  }
  
  @media (min-width: ${breakPoints.m}) {
    padding: 0 45px;
    padding-top: 105px;
  }
  
  @media (min-width: ${breakPoints.l}) {
    padding: 0 105px;
    padding-top: 100px;
    max-width: 1920px;
  }
`
