/* makes use of sortElements jQuery plugin from https://github.com/padolsey/jQuery-Plugins */

$( function() {

    $('table.sortable').each( function() {

        var table = $(this);
        var sorton = $(this).find('th').first();

        $(this).find('th.sort')
        .wrapInner('<span title="sort this column"/>')
        .append('<i class="icon-arrow-combo"></i>')
        .each(function(){

                var th = $(this),
                    thIndex = th.index(),
                    inverse = false,
                    arrowclass = 'icon-arrow-combo';

                th.click(function(){

                    sorton.find('i').removeClass().addClass('icon-arrow-combo');
                    sorton = th;

                    table.find('tbody td').filter(function(){

                        return $(this).index() === thIndex;

                    }).sortElements(function(a, b){

                        if( $.text([a]) == $.text([b]) )
                            return 0;

                        return $.text([a]) > $.text([b]) ?
                            inverse ? -1 : 1
                            : inverse ? 1 : -1;

                    }, function(){

                        // parentNode is the element we want to move
                        return this.parentNode; 

                    });

                    inverse = !inverse;
                    th.find('i').removeClass().addClass( inverse ? 'icon-up-dir' : 'icon-down-dir'  );

                });

        });

    });

});