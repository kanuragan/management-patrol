import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';


const DataTables = (props) => {
    return (
        <DataTable
            columns={props.columns}
            data={props.data}
        />
    );
};

export default DataTables;