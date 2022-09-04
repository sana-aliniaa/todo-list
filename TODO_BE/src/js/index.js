/* $(async() => {

    async function getToDoList() {
        let list = [];
        await fetch(`http://localhost:8080/getToDoList`, {
                // mode: 'no-cors' // 'cors' by default
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(json => {
                list = json;
            });
        return list;
    }
    $('#gridContainer').dxDataGrid({
        dataSource: getToDoList(),
        keyExpr: 'ID',
        selection: {
            mode: 'multiple',
        },
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
                    location: 'before'
                },
                {
                    widget: 'dxButton',
                    options: {
                        type: 'default',
                        text: 'Done'
                    },
                    location: 'before'
                }, {
                    widget: 'dxButton',
                    options: {
                        type: 'danger',
                        text: 'To Do'
                    },
                    location: 'before'
                },
                {
                    widget: 'dxButton',
                    options: {
                        type: 'default',
                        stylingMode: 'outlined',
                        text: 'Delete All Task'
                    },
                    location: 'center'
                }, {
                    widget: 'dxButton',
                    options: {
                        type: 'danger',
                        stylingMode: 'outlined',
                        text: 'Delete Done Tasks'
                    },
                    location: 'center'
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
            dataField: 'ID',
            alignment: 'left',
            width: 50,
        }, {
            dataField: 'Prefix',
            caption: 'Title',
        }, {
            dataField: 'status',

        }],
        onEditingStart() {
            //  logEvent('EditingStart');
        },
        onInitNewRow() {
            console.log('gio2')
        },
        onRowInserting() {
            console.log('gio')
        },
        onRowInserted() {
            //  logEvent('RowInserted');
        },
        onRowUpdating() {
            //  logEvent('RowUpdating');
        },
        onRowUpdated() {
            //  logEvent('RowUpdated');
        },
        onRowRemoving() {
            // logEvent('RowRemoving');
        },
        onRowRemoved() {
            //  logEvent('RowRemoved');
        },
        onSaving() {
            // logEvent('Saving');
        },
        onSaved() {
            // logEvent('Saved');
        },
        onEditCanceling() {
            //  logEvent('EditCanceling');
        },
        onEditCanceled() {
            // logEvent('EditCanceled');
        },
    });


}); */