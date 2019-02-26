import $ from 'jquery'

import 'bootstrap'

import 'datatables.net-bs4'
import 'datatables.net-fixedheader-bs4'
import 'datatables.net-responsive-bs4'

export default $(document).ready(() => {
    $('table#index').DataTable({
        "dom": '<"top"f>rt<"bottom"lp><"clear">',
        "paging": false,
        "fixedHeader": {
            'headerOffset': $('#sticky-header').outerHeight()
        },
        "columnDefs": [
            { "type": "html-num-fmt", "targets": 0, },
            { "orderable": false, "targets": 1, }
        ]
    })
})