import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 0 36px;
  padding-top: 100px;
  margin: 0 auto;

  @media (min-width: 640px) {
    padding: 0 16px;
    padding-top: 100px;
  }
  @media (min-width: 1200px) {
    padding: 0 8px;
    padding-top: 100px;
  }
`