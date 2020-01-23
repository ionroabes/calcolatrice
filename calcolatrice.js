var numero1= 0;
var numero2= 0;
var operatore='';

$('.num').click(function (){
    var cifra = $(this).data('num');
    var numero = $('#input').val();
    numero = parseInt(numero + cifra);
    $('#input').val(numero);
});

$('.op').click(function(){
    operatore= $(this).data('oper');
    var numero = $('#input').val();
    numero1= parseInt(numero);


    $('#input').val('');
})


$('.ris').click(function(){
    var numero = $('#input').val();
    numero2= parseInt(numero);
    switch (operatore){
        case '+':
            numero1 += numero2;
            $('#input').val(numero1);
            break;
        case '-':
            numero1 -= numero2;
            $('#input').val(numero1);
            break;
        case '*':
            numero1 *= numero2;
            $('#input').val(numero1);
            break;
        case '/':
            if(numero2==0){
                throw new Error(alert("operazione impossibile"));
            }
            else{
                numero1 /= numero2;
                $('#input').val(numero1);
                break;
            }
    }
})

$('.ce').click(function(){
    numero1=0;
    numero2=0;
    operatore='';
    $('#input').val('');
})