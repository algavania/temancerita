export default function auth({
    next,
    router
}) {
    if (localStorage.getItem('hasLogin') == null) return router.push({
        name: 'Login'
    });

    return next();
}