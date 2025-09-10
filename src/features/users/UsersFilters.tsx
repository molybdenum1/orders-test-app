import React from 'react';

interface UsersFiltersProps {
  filterName: string;
  setFilterName: (v: string) => void;
  filterGender: string;
  setFilterGender: (v: string) => void;
  filterCountry: string;
  setFilterCountry: (v: string) => void;
  genderOptions: string[];
  countryOptions: string[];
}

const UsersFilters: React.FC<UsersFiltersProps> = ({
  filterName,
  setFilterName,
  filterGender,
  setFilterGender,
  filterCountry,
  setFilterCountry,
  genderOptions,
  countryOptions,
}) => (
  <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
    <input
      type="text"
      placeholder="Name or Surname"
      value={filterName}
      onChange={e => setFilterName(e.target.value)}
      style={{ padding: '8px', minWidth: 180 }}
    />
    <select value={filterGender} onChange={e => setFilterGender(e.target.value)} style={{ padding: '8px', minWidth: 120 }}>
      <option value="">Gender</option>
      {genderOptions.map(g => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>
    <select value={filterCountry} onChange={e => setFilterCountry(e.target.value)} style={{ padding: '8px', minWidth: 120 }}>
      <option value="">Country</option>
      {countryOptions.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  </div>
);

export default UsersFilters;
