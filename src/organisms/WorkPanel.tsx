import { createRef, useRef, useState } from 'react';

import { HomeSections } from '../constants/routes';
import HomePanelWrapper from '../molecules/HomePanelWrapper';
import { ScrollableSection } from '../molecules/ScrollableSection';
import WorkBox from './WorkBox';

const WORK_EXPERIENCE = [
  {
    name: 'Samsung R&D Philippines',
    startDate: 'July 2016',
    endDate: 'March 2020',
    role: 'Technical Lead',
  },
  {
    name: 'Phitopolis International',
    startDate: 'March 2020',
    endDate: 'June 2021',
    role: 'Senior Software Engineer',
  },
  {
    name: 'Accenture Inc.',
    startDate: 'June 2021',
    endDate: 'April 2022',
    role: 'Applications Development Team Lead',
  },
];

const WorkPanel: React.FC = () => {
  const [activeBox, setActiveBox] = useState(0);
  const boxesRef = useRef<{ current: HTMLDivElement }[]>([]);

  if (boxesRef.current.length !== WORK_EXPERIENCE.length) {
    // add or remove refs
    boxesRef.current = Array(WORK_EXPERIENCE.length)
      .fill('')
      .map((_, i) => boxesRef.current[i] || createRef());
  }

  return (
    <ScrollableSection hash={HomeSections.work}>
      <HomePanelWrapper
        scrollPaddingRight={{ base: '12px', md: '120px' }}
        align="end"
      >
        {WORK_EXPERIENCE.map((workData, i) => (
          <WorkBox
            expanded={activeBox === i}
            key={workData.name}
            onClick={() => setActiveBox(i)}
            ml={{ base: i === 0 && '16px', md: i === 0 && '360px' }}
            ref={boxesRef.current[i]}
            id={`workbox-${i}`}
            pr={i === WORK_EXPERIENCE.length - 1 && '32px'}
            {...workData}
          />
        ))}
      </HomePanelWrapper>
    </ScrollableSection>
  );
};

export default WorkPanel;
