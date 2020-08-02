import authReducer from '../../src/reducers/auth'

test('should set the state to uid on login', () => {
    const actions = {
        type: 'LOGIN',
        uid: '37tdnbndsu'
    }

    expect(authReducer(undefined,actions)).toEqual({uid:actions.uid})
})

test('should clear the auth state on log out', () => {
    const actions = {type: 'LOGOUT'}
    expect(authReducer(undefined,actions)).toEqual({})
})