import React from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableExpandRow,
  TableExpandHeader,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';

// This is from https://react.carbondesignsystem.com/?path=/docs/components-datatable-expansion--overview

const rows = [
  {
    id: 'a',
    name: 'Load balancer 1',
    status: 'Disabled',
  },
  {
    id: 'b',
    name: 'Load balancer 2',
    status: 'Starting',
  },
  {
    id: 'c',
    name: 'Load balancer 3',
    status: 'Active',
  },
];

const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'status',
    header: 'Status',
  },
];

export default function App() {
  return (
    <div>
      <h1>
        JS version
      </h1>
      <DataTable rows={rows} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()} aria-label="sample table">
            <TableHead>
              <TableRow>
                <TableExpandHeader aria-label="expand row" />
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
