document.getElementById('bold').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.fontWeight= 'bold';
});

document.getElementById('italic').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.fontStyle= 'italic';
});

document.getElementById('underline').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.textDecoration= 'underline';
});



document.getElementById('left').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.textAlign= 'left';
});

document.getElementById('center').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.textAlign= 'center';
});

document.getElementById('right').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.textAlign= 'right';
});

document.getElementById('justify').addEventListener('click', function(){
    const textArea= document.getElementById('text-area');
    textArea.style.textAlign= 'justify';
});



$("input[type=submit]").click(function(){
    var fontSize = $("input[type=number]").val();
    $("p").css({"font-size":fontSize+"px"});
});