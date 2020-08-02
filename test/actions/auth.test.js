import { login, logout } from '../../src/actions/auth'

test ('should set uid on log in', () => {
    const data = {
        type: 'LOGIN',
        uid: '372t7hbd'
    }

    expect(login(data.uid)).toEqual(data)
})

test ('should remove uid on logout', () => {
    expect(logout()).toEqual({type: 'LOGOUT'})
})