/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
function DynamicTable() {
  // Sample data
  const data = {
    base: 2,
    common: 3,
    last: 1,
  };

  // Generate column headers based on data
  const baseColumns = Array.from({ length: data.base }, () => (
    <th>Base Column </th>
  ));
  const commonColumns = Array.from({ length: data.common }, () => (
    <th>Common Column</th>
  ));
  const lastColumns = Array.from({ length: data.last }, () => (
    <th>Last Column</th>
  ));

  // Generate table rows
  const sampleData = [
    ['Data 1', 'Data 2', 'Data 1', 'Data 2'],
    ['Data 3', 'Data 4'],
  ];
  const rows = sampleData.map((rowData, rowIndex) => (
    <tr key={`row${rowIndex}`}>
      {rowData.map((cellData) => (
        <td key={rowIndex}>{cellData}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          {baseColumns}
          {commonColumns}
          {lastColumns}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default DynamicTable;
