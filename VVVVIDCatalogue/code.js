$(document).ready(function() {
    
    loadAnimeList();

});

function draw(animeList)
{

    $('#tableRow').html("");

    $.each( animeList, function( key, value ) {
        td = document.createElement('td');
        td.classList.add('text-center');
        td.id = value['id']
        a = document.createElement('a');
        a.href = value['url'];
        img = document.createElement('img');
        img.src = value['thumbnail'];
        
        p = document.createElement('p');
        br = document.createElement('br');
        p.appendChild(br);
        p.innerText = value['name'];

        a.appendChild(p);
        a.appendChild(img);
        td.appendChild(a);
        $('#tableRow').append(td);
      });
}

function loadAnimeList(searchParameter = "")
{

    var list = [];
    $.ajax({
        dataType: "json",
        url: "https://paaaulz.altervista.org/vvvvidcat/getList.php?searchParameter=" + searchParameter,
        success: function (result)
        {
            draw(result);
        }
      });

      return list;
}

function search()
{
    loadAnimeList($('#searchParameter').val());
}

function reset()
{
    $('#search').val();
    loadAnimeList();
}