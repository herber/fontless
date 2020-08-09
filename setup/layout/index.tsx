import styled from 'styled-components';
import { Navbar } from '../components/nav';
import { Footer } from '../components/content/footer';

let Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

let Main = styled.main`
  margin-top: 70px;
  min-height: calc(100% - 70px);
`;

export let Layout = ({
  children
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  return (
    <Wrapper>
      <Navbar />

      <Main>{children}</Main>

      <Footer />
    </Wrapper>
  );
};
