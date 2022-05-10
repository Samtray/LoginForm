export async function auth(username, password) {
    if (username == 'admin' && password == 'password')
        return { status: 0, message: 'Welcome' }
    else
        return { status: 1, message: 'Access Denied' }
}