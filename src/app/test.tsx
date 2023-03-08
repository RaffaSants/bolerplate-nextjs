import { render, screen } from '@testing-library/react'

import Home from './page'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />)

    expect(
      screen.getByRole('heading', { name: /this is a bolerplate!/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
