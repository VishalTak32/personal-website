// components/Sidebar.js
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const sections = [
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'leadership', title: 'Volunteering' },
];

export default function Sidebar({ onSectionSelect }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '64px', // Adjust based on AppBar height
        left: 0,
        height: 'calc(100vh - 64px)', // Adjust for AppBar height
        width: '200px',
        bgcolor: 'background.paper',
        boxShadow: 3,
        padding: 2,
        overflowY: 'auto',
      }}
    >
      <List>
        {sections.map((section) => (
          <ListItem
            button
            key={section.id}
            onClick={() => onSectionSelect(section.id)}
          >
            <ListItemText primary={section.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
