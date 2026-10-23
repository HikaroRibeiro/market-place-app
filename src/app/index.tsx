import { Redirect } from "expo-router";

export default function App() {

    const user = {
        token: '1234',
        name: 'Claude',
    }

    if (user) {
        return (
            <Redirect href="/(private)/home" />
        );
    }

    return (
        <Redirect href="/login" />
    );
}