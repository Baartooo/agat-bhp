import React from 'react';
import { Helmet } from 'react-helmet';
import { NotFound } from 'components/not-found/NotFound.component';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="Nie znaleziono strony" />

    <NotFound />
  </>
);
