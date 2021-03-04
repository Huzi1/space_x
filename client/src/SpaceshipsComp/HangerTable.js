import React, { useState } from 'react';
import MaterialTable from 'material-table';


const HangerTable = (props) => {
    const { tableData } = props;
    const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState(tableData)


    return (
        <>
            <div>
                {data.length > 0 && <MaterialTable
                    title="Spacecrafts at hanger"
                    columns={[
                        { title: 'ID', field: 'id' },
                        { title: 'Name', field: 'name' },
                        { title: 'Modal', field: 'modal' },
                        { title: 'City', field: 'city' },
                        { title: 'Planet', field: 'planet' },
                        { title: 'Max seat', field: 'maxseat' },

                        { title: 'Status', field: 'status' },
                    ]}
                    data={data}

                    onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                    options={{
                        rowStyle: rowData => ({
                            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                        }),

                        headerStyle: {
                            backgroundColor: '#648dae',
                            color: '#FFF'
                        }

                    }}
                />}
            </div>
        </>
    )
}
export default HangerTable;