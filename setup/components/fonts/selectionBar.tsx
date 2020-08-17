import styled from 'styled-components';
import { ArrowRight } from 'react-feather';
import { useFontStore } from '../../state/font';
import { Button, Spacer } from '@varld/fontless-components';
import { useSize } from '@varld/fontless-hooks';

let Wrapper = styled.div`
  border-top: solid var(--accent-1) 1px;
  height: 60px;
  position: sticky;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 12px 20px;
  background: white;
  z-index: 5;
`;

let Text = styled.div`
  height: 36px;
  line-height: 36px;
  font-weight: 500;
`;

let Actions = styled.div`
  height: 36px;
`;

let Inner = styled.div`
  max-width: 1060px;
  margin: 0px auto;
  display: flex;
`;

export let SelectionBar = ({ onContinue }: { onContinue: () => void }) => {
  let selectedFonts = useFontStore(s => s.selectedFonts.length);
  let { width } = useSize();

  return (
    <Wrapper>
      <Inner>
        <Text>
          {selectedFonts == 0
            ? `Select fonts ${width > 500 ? 'by clicking on them' : ''}`
            : `${selectedFonts} font${selectedFonts > 1 ? 's' : ''} selected`}
        </Text>
        <Spacer />
        <Actions>
          <Button
            display={selectedFonts == 0 ? 'secondary' : 'primary'}
            disabled={selectedFonts == 0}
            onClick={onContinue}
          >
            Continue <ArrowRight />
          </Button>
        </Actions>
      </Inner>
    </Wrapper>
  );
};
