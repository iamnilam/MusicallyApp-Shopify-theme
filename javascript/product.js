$(document).ready(function() {
            $('body').delegate('#addtocart', 'click', function(event) {
                event.preventDefault();
                var quantity = $('#quantity').val();
                var id = $('#variantSelect').find(":selected").val();
                $.ajax({
                    type: 'POST',
                    url: '/cart/add.js',
                    dataType: 'json',
                    data: {
                        id: id,
                        quantity: quantity
                    },
                    success: function() {
                        location.href = "/cart";
                    }
                });
            });