import React, { FC } from 'react';

import s from './SectionHeader.module.scss';

interface ISectionHeader {
  content: string;
}

export const SectionHeader: FC<ISectionHeader> = ({ content }) => {
  return (
    <div className={s.sectionHeader}>
      <span className={s.sectionHeader__content}>{content}</span>
    </div>
  );
};
