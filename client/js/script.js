function hndlr(response) {
                   
              for (var i = 0; i < response.items.length; i++) {
                var item = "" 
                var current =  response.items[i]
                
                item += "<strong> Url : </strong><a href = " + current.link + ">"+current.link+"</a> <br/>"
                item += "<strong> Title : </strong>" + current.htmlTitle + "<br/>"
                item += "<strong> Thumbnail : </strong><a href = " + current.image.thumbnailLink  + ">"+current.image.thumbnailLink+"</a><br/>"
                item += "<strong> Original_Page : </strong><a href = " + current.image.contextLink + ">"+ current.image.contextLink + "</a>"
                
                document.getElementById("content").innerHTML += "<br/><br/>" + item
              }
            }
            

