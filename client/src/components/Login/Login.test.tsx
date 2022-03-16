import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '../../context/UserContext';
import { Login } from './Login';

describe('Renders the Login screen', () => {
  render(
    <UserContextProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </UserContextProvider>
  );

  it('Should display the app title', () => {
    const heading = screen.getByText(/DOGGO/i);
    expect(heading).toBeInTheDocument();
  })

  it('Shpuld includes a LoginWithGoogle button', () => {
    //onst button = screen.selec
    // expect(button).toBeInTheDocument();
  })
});
