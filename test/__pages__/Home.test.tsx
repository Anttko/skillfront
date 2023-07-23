import { describe, test, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Home } from '../../src/pages/Home';
import React from 'react';

import { MemoryRouter } from 'react-router-dom';

describe('<Home />', () => {
  test('App mounts properly', async () => {
    const wrapper = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(wrapper).toBeTruthy();
  });
});
