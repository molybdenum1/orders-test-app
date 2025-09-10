import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const buttons = [];
  if (currentPage > 1) {
    buttons.push(
      <button key="first" style={{margin: '0 4px', padding: '6px 12px', borderRadius: 4}} onClick={() => onPageChange(0)}>
        First
      </button>
    );
  }
  if (currentPage > 0) {
    buttons.push(
      <button key="prev" style={{margin: '0 4px', padding: '6px 12px', borderRadius: 4}} onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>
    );
  }
  buttons.push(
    <button key="current" style={{margin: '0 4px', padding: '6px 12px', borderRadius: 4, border: '2px solid #1976d2', background: '#e3f2fd', fontWeight: 600}} disabled>
      {currentPage + 1}
    </button>
  );
  if (currentPage < totalPages - 1) {
    buttons.push(
      <button key="next" style={{margin: '0 4px', padding: '6px 12px', borderRadius: 4}} onClick={() => onPageChange(currentPage + 1)}>
        Next
      </button>
    );
  }
  if (currentPage < totalPages - 2) {
    buttons.push(
      <button key="last" style={{margin: '0 4px', padding: '6px 12px', borderRadius: 4}} onClick={() => onPageChange(totalPages - 1)}>
        Last
      </button>
    );
  }
  return (
    <div style={{ textAlign: 'center', margin: '24px 0' }}>
      {buttons}
    </div>
  );
};

export default Pagination;
