import { App } from './App';
import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  describe('render', () => {
    test('should render properly', async () => {
      render(<App />);

      expect(screen.getByTitle('app')).toBeInTheDocument();
    });
  });
});
