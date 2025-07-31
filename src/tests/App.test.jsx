import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';


describe('<App /> tests', () => {
  it('renders <App />', () => {
    render(<App />);
  });
  it('should add a todo item', async () => {
    const todo = [
      {
        userId: 3,
        id: Math.floor(Math.random() * 100) + 1,
        title: 'Do math homework',
        completed: false,
      }
    ]
    render(<App />);
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/Add new todo/i);
    const button = screen.getByRole('button', { name: /Add new/i });
    await user.type(input, todo[0].title);
    await user.click(button);
    
    expect(screen.getByText(/Do math homework/i)).toBeInTheDocument();
  });
});