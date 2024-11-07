import './App.css'
import { TextField, Button, Container, Typography } from '@mui/material';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulario enviado');
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Formulario de Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="nombre"
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          id="apellido"
          label="Apellido"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          id="email"
          label="Correo Electrónico"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </form>
    </Container>
  );
}

export default App
