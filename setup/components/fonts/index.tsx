import { useRef, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import matchSorter from 'match-sorter';
import { Input, Button, Spacer, Modal } from '@varld/fontless-components';
import { useSize, useScroll } from '@varld/fontless-hooks';
import { Font } from './font';
import { Font as FontType } from '../../interfaces/font';
import { useFontStore } from '../../state/font';

let FontsWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
`;

let FontsGrid = styled.div`
  position: relative;
`;

let OptionsBar = styled.div`
  padding: 10px;
  display: flex;
`;

export let Fonts = ({ fonts }: { fonts: FontType[] }) => {
  let ref = useRef<HTMLDivElement>();
  let { height, width } = useSize();
  let { y } = useScroll();
  let [rows, setRows] = useState({ first: 0, last: 10 });
  let [search, setSearch] = useState('');
  let [existingHost, setExistingHost] = useState('');
  let [importModalOpen, setImportModalOpen] = useState(false);
  let selectFont = useFontStore(s => s.selectFont);
  let selectedFonts = useMemo(() => {
    if (search.trim().length == 0) return fonts;
    return matchSorter(fonts, search, { keys: ['name'] });
  }, [fonts, search]);
  let wrapperHeight = useMemo(() => {
    if (width > 1100) return Math.ceil((selectedFonts?.length || 0) / 3) * 260;
    if (width > 730) return Math.ceil((selectedFonts?.length || 0) / 2) * 260;
    return (selectedFonts?.length || 0) * 260;
  }, [selectedFonts?.length]);

  useEffect(() => {
    if (!ref.current) return;

    let top = ref.current.offsetTop;
    let rowsInViewport = Math.ceil(height / 260);
    let firstVisibleRow = Math.floor((y - top) / 260);

    let firstRow = firstVisibleRow - rowsInViewport;
    if (firstRow < 0) firstRow = 0;

    let lastRow = firstVisibleRow + rowsInViewport * 2;

    setRows({
      first: firstRow,
      last: lastRow
    });
  }, [height, width, ref.current, y]);

  let onImportFontsClick = () => {
    let url = existingHost;
    if (!url.startsWith('http://') && !url.startsWith('https://')) url = `https://${url}`;
    if (!url.endsWith('/')) url += '/';

    fetch(`${url}fonts.json`)
      .then(r => r.json())
      .then(data => {
        for (let font of data.fonts) {
          selectFont(
            {
              name: font.family,
              category: font.category,
              id: font.id,
              previewVariant: '400'
            },
            false
          );
        }

        setImportModalOpen(false);

        setTimeout(() => {
          setExistingHost('');
        }, 250);
      });
  };

  if (!fonts) return null;

  return (
    <>
      <FontsWrapper style={{ height: wrapperHeight }}>
        <OptionsBar>
          <Input
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Spacer width={15} />
          <Button onClick={() => setImportModalOpen(true)}>Import</Button>
        </OptionsBar>
        <FontsGrid ref={ref}>
          {selectedFonts.map((font: FontType, i: number) => {
            let row = i;
            let col = 0;
            let itemWidth = width;

            if (width > 1100) {
              row = Math.floor(i / 3);
              let mod = (i + 1) % 3;
              col = mod == 0 ? 2 : mod == 1 ? 0 : 1;
              itemWidth = 1080 / 3;
            } else if (width > 730) {
              row = Math.floor(i / 2);
              let mod = (i + 1) % 2;
              col = mod == 0 ? 1 : 0;
              itemWidth = width / 2;
            }

            if (row >= rows.first && row <= rows.last) {
              return (
                <div
                  key={font.id}
                  style={{
                    height: 260,
                    padding: 10,
                    width: itemWidth,
                    position: 'absolute',
                    left: col * itemWidth,
                    top: row * 260
                  }}
                >
                  <Font font={font} key={font.id} />
                </div>
              );
            }

            return null;
          })}
        </FontsGrid>
      </FontsWrapper>
      <Modal
        title="Import from Fontless Service"
        open={importModalOpen}
        onClose={() => setImportModalOpen(false)}
        buttons={[
          {
            children: 'Cancel',
            display: 'secondary',
            onClick: () => setImportModalOpen(false)
          },
          { children: 'Import', display: 'primary', onClick: onImportFontsClick }
        ]}
      >
        <Input
          value={existingHost}
          onChange={e => setExistingHost(e.target.value)}
          placeholder="Paste a the URL of a Fontless service here."
        />
      </Modal>
    </>
  );
};
