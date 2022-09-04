$(async() => {
    const gridContainer = $('#gridContainer').dxDataGrid({
        dataSource: await getToDoList(),
        keyExpr: '_id',
        hoverStateEnabled: true,
        allowSelectAll: true,
        allowColumnResizing: true,
        columnAutoWidth: true,
        showBorders: true,
        paging: {
            enabled: false,
        },
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
        },
        toolbar: {
            items: [{
                    widget: 'dxButton',
                    options: {
                        type: 'success',
                        text: 'All'
                    },
                    location: 'before',
                    onClick() {
                        gridContainer.clearFilter();
                    }
                },
                {
                    widget: 'dxButton',
                    options: {
                        type: 'default',
                        text: 'Done'
                    },
                    location: 'before',
                    onClick() {
                        gridContainer.filter(['Status', '=', 'Done'])
                    }
                }, {
                    widget: 'dxButton',
                    options: {
                        type: 'danger',
                        text: 'To Do'
                    },
                    location: 'before',
                    onClick() {
                        gridContainer.filter(['Status', '=', 'To Do'])
                    }
                },
                {
                    widget: 'dxButton',
                    options: {
                        type: 'default',
                        stylingMode: 'outlined',
                        text: 'Delete All Task'
                    },
                    location: 'center',
                    onClick() {
                        fetch(`http://localhost:8080/deleteall`, {
                                method: 'POST', // or 'PUT'
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                            .then(response => response.json())
                            .then(result => {
                                console.log('Success:', result);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                        location.reload();
                    }
                }, {
                    widget: 'dxButton',
                    options: {
                        type: 'success',
                        stylingMode: 'outlined',
                        text: 'Delete Done Tasks'
                    },
                    location: 'center',
                    onClick() {
                        fetch(`http://localhost:8080/deletedone`, {
                                method: 'POST', // or 'PUT'
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            })
                            .then(response => response.json())
                            .then(result => {
                                console.log('Success:', result);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                        location.reload();
                    }
                }, {
                    text: 'New To Do',
                    location: "after",

                }, {
                    name: "addRowButton",
                    location: "after",
                },
            ]
        },
        columns: [{
            dataField: 'Title',
            caption: 'Title',
        }, {
            dataField: 'Status',
            lookup: {
                dataSource: status1,
            },
            cellTemplate: function(element, info) {
                switch (info.text) {
                    case ("To Do"):
                        element.append("<div style='font-weight: bold;color: red'>" + info.text + "</div>");
                        break;
                    case ("Done"):
                        element.append("<div style='font-weight: bold;color: green'>" + info.text + "</div>");
                        break;
                }
            }

        }],
        onRowInserted(e) {
            const change = e.data;
            fetch(`http://localhost:8080/addtolist`, {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(change),
                })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },
        onRowUpdating(e) {
            const change = e.newData;
            const key = e.key;
            fetch(`http://localhost:8080/listupdate/${key}`, {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(change),
                })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        },

        onRowRemoved(e) {
            const key = e.key;
            fetch(`http://localhost:8080/deletetodo/${key}`, {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        },
    }).dxDataGrid('instance');
});