import './styles.scss'

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

// This is from https://react.carbondesignsystem.com/?path=/docs/components-datatable-expansion--overview

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

function JSApp() {
  return (
    <div>
      <h1>JS version</h1>
      <DataTable rows={rows} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
          <TableHead>
              <TableRow>
              {headers.map((header) => (
                  <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                  </TableHeader>
              ))}
              </TableRow>
          </TableHead>
          <TableBody>
              {rows.map((row) => (
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

export default JSApp;
