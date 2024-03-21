import './styles.scss'
import React from 'react';

import {
  DataTable,
  Table,
  TableHead,
  TableExpandRow,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

const rows = [{
  id: 'a',
  name: 'Load balancer 1',
  status: 'Disabled'
}, {
  id: 'b',
  name: 'Load balancer 2',
  status: 'Starting'
},
{
  id: 'c',
  name: 'Load balancer 3',
  status: 'Active'
}]

const headers = [{
  key: 'name',
  header: 'Name'
},
{
  key: 'status',
  header: 'Status'
}]

function App() {
  return (
    <div>
      <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
          <TableHead>
              <TableRow>
              {headers.map((header) => (
                  // @ts-expect-error complains about MouseEvent missing properties from type MouseEvent. What mouse event?
                  <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                  </TableHeader>
              ))}
              </TableRow>
          </TableHead>
          <TableBody>
              {rows.map((row) => (
              // @ts-expect-error complains about MouseEvent missing properties from type MouseEvent. What mouse event?
              <TableExpandRow {...getRowProps({ row })}>
                  {row.cells.map((cell) => (
                  <TableCell>{cell.value}</TableCell>
                  ))}
              </TableExpandRow>
              ))}
          </TableBody>
          </Table>
      )}
      </DataTable>
    </div>
  );
}

export default App;
