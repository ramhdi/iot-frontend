interface TableInputParams {
  headers: string[],
  entries: string[][]
}

export default function Table(params: TableInputParams) {
  let tableHeader = (
    <tr>
      {params.headers.map(header => {
        return (<th>{header}</th>);
      })}
    </tr>
  );

  let tableEntries = params.entries.map(rows => {
    return (<tr>
      {rows.map((column, index) => {
        if (index == 0) return (<td><b>{column}</b></td>);
        else return (<td>{column}</td>);
      })}
    </tr>);
  });
  
  return (
    <div>
      <table cellPadding="0" cellSpacing="10" border={0}>
        {tableHeader}
        {tableEntries}
      </table>
    </div>
  );
}