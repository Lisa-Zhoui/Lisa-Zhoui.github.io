document.getElementById('go').onclick = function() {
    var inputText= $('#text-input').val();
    var thugifiedText =inputText + ", where do you live?";
    document.getElementById('output').innerHTML = thugifiedText;
};