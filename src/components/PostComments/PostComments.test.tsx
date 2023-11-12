import { fireEvent, render, screen } from '@testing-library/react'
// import Post from '.'
import PostComment from '.'

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComment />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
  })
  it('Deve existir dois comentários', () => {
    render(<PostComment />)

    const input = screen.getByTestId('comment-input')
    const button = screen.getByTestId('submit-button')
    fireEvent.change(input, { target: { value: 'Primeiro Comentário' } })
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: 'Segundo Comentário' } })
    fireEvent.click(button)

    const comments = screen.getAllByTestId('comment-text')
    expect(comments.length).toBe(2)
  })
  it('Deve existir um comentário com valor "Primeiro Comentário"', () => {
    render(<PostComment />)

    const input = screen.getByTestId('comment-input')
    const button = screen.getByTestId('submit-button')

    fireEvent.change(input, { target: { value: 'Primeiro Comentário' } })
    fireEvent.click(button)

    expect(screen.getByTestId('comment-text')).toHaveTextContent(
      'Primeiro Comentário'
    )
  })
})
