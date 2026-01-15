import { Container } from "@mui/material";
import RewardsSection from "./components/RewardsSection";

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <RewardsSection totalCustomers={520} />
    </Container>
  );
}

export default App;
