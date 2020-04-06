import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useGlobalFilter, useSortBy, useTable } from 'react-table';

import Box from './Box';
import stylex from './stylex';

const Wrapper = stylex(Box,
  (props, { css }) => css({
    table: props.tableStyle,
  }));

function Table(props) {
  const {
    className, columns, data,
    globalFilter, hiddenColumns,
    noData, tableStyle,
  } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns,
      },
    },
    useGlobalFilter,
    useSortBy,
  );

  useEffect(() => {
    setGlobalFilter(globalFilter);
  }, [globalFilter, setGlobalFilter]);

  if (rows.length > 0) {
    return (
      <Wrapper tableStyle={tableStyle}>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <table
          className={className}
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    width={column.width ? column.width : 'auto'}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* eslint-enable react/jsx-props-no-spreading */}
      </Wrapper>
    );
  }

  return noData;
}

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  globalFilter: PropTypes.string,
  hiddenColumns: PropTypes.arrayOf(
    PropTypes.string,
  ),
  noData: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tableStyle: PropTypes.shape({}),
};

Table.defaultProps = {
  className: null,
  globalFilter: '',
  hiddenColumns: [],
  noData: null,
  tableStyle: {
    borderSpacing: 0,
    tableLayout: 'fixed',
  },
};

const StyledTable = stylex(Table,
  (props, { css }) => css({
    tr: {
      ':last-child': {
        td: {
          borderBottom: 0,
        },
      },
    },
    'td, th': {
      borderBottomColor: props.borderColor,
      borderBottomStyle: props.borderStyle,
      borderBottomWidth: props.borderWidth,
      borderRightColor: props.borderColor,
      borderRightStyle: props.borderStyle,
      borderRightWidth: props.borderWidth,
      wordWrap: 'break-word',
      ':last-child': {
        borderRight: 0,
      },
    },
  }));

StyledTable.defaultProps = {
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: 1,
  width: '100%',
};

export default StyledTable;
