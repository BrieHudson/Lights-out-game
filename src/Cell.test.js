import { render } from '@testing-library/react';
import Cell from './Cell'; // Adjust the import path if necessary

test('renders a Cell component properly', () => {
  const { container } = render(<Cell isLit={true} />);
  expect(container.firstChild).toHaveClass('Cell-lit'); // Assuming "Cell-lit" is a CSS class for lit cells

  const { container: darkCell } = render(<Cell isLit={false} />);
  expect(darkCell.firstChild).not.toHaveClass('Cell-lit'); // Check for unlit cells
});

