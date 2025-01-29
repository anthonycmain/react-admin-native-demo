import { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { Card, TextInput, Button, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const LoginForm = () => {
    const [email, setEmail] = useState('anthony@thedistance.co.uk');
    const [password, setPassword] = useState('Test123!');
    const login = useLogin();
    const notify = useNotify();

    const submit = async () => {
        login({ email, password })
        .then(() => {
                //setLoading(false);
                // Do something to show loading
            })
        .catch (error => {
            notify(
                typeof error === 'string'
                    ? error
                    : typeof error === 'undefined' || !error.message
                    ? 'ra.auth.sign_in_error'
                    : error.message,
                {
                    type: 'warning',
                    messageArgs: {
                        _:
                            typeof error === 'string'
                                ? error
                                : error && error.message
                                ? error.message
                                : undefined,
                    },
                }
            );
        }
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Text variant="headlineMedium" style={styles.title}>
                        Login
                    </Text>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        mode="outlined"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={styles.input}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        mode="outlined"
                        secureTextEntry
                        style={styles.input}
                    />
                    <Button
                        mode="contained"
                        onPress={submit}
                        style={styles.button}
                        
                    >
                        Login
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    card: {
        width: '100%',
        alignSelf: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
        width: 500
    },
    button: {
        marginTop: 8,
    },
});

export default LoginForm;
