import PostComments from '../../PostComments'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

test('Deve renderizar 2 comentários', async () => {
    render(<PostComments />)

    const button = await waitFor(() => screen.getByTestId('button-submit'))
    const input = await waitFor(() => screen.getByTestId('comment-input'))

    fireEvent.change(input, { target: { value: 'Primeiro comentário' }})
    fireEvent.click(button)
        
    fireEvent.change(input, { target: { value: 'Segundo comentário' }})
    fireEvent.click(button)

    const comments = screen.getAllByRole('listitem')
    expect(comments).toHaveLength(2)
})
 