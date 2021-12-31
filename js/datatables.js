 var table = $('#banner-table').dataTable( {
    processing: true,
    serverSide: true,
    responsive: true,
    ajax: {
         url: "{{url('backoffice/banner/bannerdatatables')}}",
        type: "POST",
    },
    columns: [
        {data: 'DT_RowIndex', name: 'DT_RowIndex',className: "text-center"},
        {data: 'title', name: 'title'},
        {data: 'content', name: 'content'},
        {data: 'images', name: 'images',"className": "text-center"},
        {data: 'action', name: 'action',className: "text-center", orderable: false, searchable: false},
    ]
});