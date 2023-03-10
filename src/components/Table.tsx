interface TableInputParams {
  headers: string[],
  entries: string[][]
}

export default function Table(params: TableInputParams) {
  let tableHeader = (
    <tr>
      {params.headers.map((header, index) => {
        return (<th key={index}>{header}</th>);
      })}
    </tr>
  );

  let tableEntries = params.entries.map(rows => {
    return (<tr>
      {rows.map((column, index) => {
        if (index == 0) return (<td key={index}><b>{column}</b></td>);
        else return (<td key={index}>{column}</td>);
      })}
    </tr>);
  });
  
  return (
    <div>
      <table cellPadding="0" cellSpacing="10" border={0}>
        <thead>{tableHeader}</thead>
        <tbody>{tableEntries}</tbody>
      </table>
    </div>
  );
}