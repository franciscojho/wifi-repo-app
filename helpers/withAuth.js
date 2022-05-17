import parseCookie from "utils/parseCookie"

export default function withAuth(getServerSideProps) {
    return async (context) => {
        const { req } = context
        const auth = parseCookie(req)

        if (!auth.token) {
            return {
                redirect: {
                    destination: "/auth/login",
                    statusCode: 302,
                },
            }
        }

        return await getServerSideProps(context)
    }
}
