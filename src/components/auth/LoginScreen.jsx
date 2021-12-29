import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const LoginScreen = () => {
    return ( 
        <>
        <h1>Login SCREEN</h1>

        <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
        </>
     );
}
 
export default LoginScreen;