import React from 'react'

interface BackButtonProps {
  onClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => (
  <button onClick={onClick} style={{ marginBottom: 24, padding: '8px 16px', borderRadius: 4, border: '1px solid #1976d2', background: '#e3f2fd', cursor: 'pointer' }}>
    ← Back to Users
  </button>
)
