import { createRoot } from 'react-dom/client';
import './index.css';
import Stack from '@mui/material/Stack';

const root = createRoot(document.getElementById('app')!);

root.render(
<Stack>
    <p>Hello!</p>
    <p>How are you?</p>
</Stack>
);

