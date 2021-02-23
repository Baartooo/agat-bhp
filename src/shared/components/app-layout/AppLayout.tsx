import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { helmet } from '../../../utils/helmet';

import s from './AppLayout.scss';

interface AppLayoutProps {
  children: ReactNode;
}

// tslint:disable no-default-export
export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />
    {children}
  </div>
);
