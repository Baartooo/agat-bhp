import React, { FC } from 'react';

import s from './SectionHeader.module.scss';

interface ISectionHeader {
  content: string;
}

export const SectionHeader: FC<ISectionHeader> = ({ content }) => {
  return (
    <div className={s.sectionHeader}>
      <h2 className={s.sectionHeader__content}>{content}</h2>
    </div>
  );
};
