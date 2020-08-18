import { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@varld/fontless-hooks';
import { Center, Loading } from '@varld/fontless-components';

let Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let BackFromVercel = () => {
  let accessToken = useQuery('accessToken');

  useEffect(() => {
    if (!accessToken) return;
    window.opener.postMessage(`token:${accessToken}`, '*');
  }, [accessToken]);

  return (
    <Wrapper>
      <Center>
        <Loading />
      </Center>
    </Wrapper>
  );
};

export default BackFromVercel;
