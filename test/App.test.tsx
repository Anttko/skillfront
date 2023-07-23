import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';
import React from 'react';

import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  test('App mounts properly', async () => {
    const wrapper = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper).toBeTruthy();
  });
});
