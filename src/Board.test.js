import { render } from '@testing-library/react';
import Board from './Board';

test('renders the starter Board', () => {
  const { container } = render(<Board testMode={true} />);
  expect(container).toMatchSnapshot(); // Ensure the initial board matches the snapshot
});

test('flips cells correctly on click', () => {
    const { container } = render(<Board testMode={true} />);
  
    // Assuming cells have a data-testid like `cell-0-0` for coordinates
    const cell00 = container.querySelector('[data-testid="cell-0-0"]');
    const cell01 = container.querySelector('[data-testid="cell-0-1"]');
  
    // Click the cell at (0, 0)
    fireEvent.click(cell00);
  
    // Expect the cell and adjacent cells to have flipped states
    expect(cell00).not.toHaveClass('Cell-lit'); // Assuming it was lit in the test board
    expect(cell01).not.toHaveClass('Cell-lit'); // Assuming it was initially unlit
  });

  test('shows "You won!" message when all cells are off', () => {
    const { container } = render(<Board testMode={true} />);
    
    // Simulate clicks to turn off all cells
    const allCells = container.querySelectorAll('[data-testid^="cell"]');
    allCells.forEach(cell => fireEvent.click(cell));
  
    // Check for the win message
    expect(screen.getByText('You won!')).toBeInTheDocument();
  });