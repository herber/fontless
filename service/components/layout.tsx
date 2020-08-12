import styled from 'styled-components';
import { Navbar } from './nav';
import { Footer } from './footer';

let Wrapper = styled.div``;

let Main = styled.div`
  margin-top: 200px;
  min-height: calc(100vh - 250px);
`;

export let Layout = ({
  children,
  name
}: {
  children: React.ReactElement | React.ReactElement[];
  name: string;
}) => {
  return (
    <Wrapper>
      <Navbar name={name} />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};
