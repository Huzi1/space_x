import React, { useEffect, useState } from "react";
import MaterialTable from 'material-table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHanger } from '../redux/actions/hangerActions';

const Hanger = () => {
    const dispatch = useDispatch();
    const hangerData = useSelector(state => state.hanger);

    const spacecrafts = hangerData.hangerData || [];
    const loading = hangerData.isLoading || null;
    const error = hangerData.error || null;
    // const [spacecrafts, setSpacecrafts] = useState();
    const [selectedRow, setSelectedRow] = useState(null);
    spacecrafts.length > 0 && console.log(spacecrafts);
    useEffect(() => {
        dispatch(fetchHanger());
    }, [])
    return (
        <>
            <div style={{ maxWidth: '100%' }}>

                {spacecrafts.length > 0 && <MaterialTable
                    columns={[
                        { title: 'ID', field: 'id' },
                        { title: 'Name', field: 'name' },
                        { title: 'Modal', field: 'modal' },
                        { title: 'City', field: 'city' },
                        { title: 'Planet', field: 'planet' },
                        { title: 'Maxseat', field: 'maxseat' },
                        { title: 'Status', field: 'status' }


                    ]}
                    data={spacecrafts}
                    title="Spacecrafts at hangers"

                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit User',
                            onClick: (event, rowData) => {
                                alert("You saved " + rowData.id)
                                // handleViewMode(editMode)

                            }
                        }
                    ]}
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
export default Hanger;