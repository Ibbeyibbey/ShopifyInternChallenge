function LikeAnimation(name) {
    $('i#title-of-the-image').toggleClass('fa-heart-animation');
}

function LoadContent() {
    let pictureObject = "";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                pictureObject = JSON.parse(this.responseText);
                console.log(pictureObject);
                for (let i = 0; i < pictureObject.length; i++) {
                    if (pictureObject[i].media_type === "image") {
                        prepareCard(pictureObject[i].date);
                        $('p.card-text.' + pictureObject[i].date).html(pictureObject[i].explanation);
                        $('img.card-img.' + pictureObject[i].date).attr('src', pictureObject[i].url);
                        $('h5.card-title.' + pictureObject[i].date).html('<button class=" like-review" onclick="LikeAnimation(\'title of the image\');">' +
                            '<i class="fa fa-heart" id="title-of-the-image"></i></button>'
                            + pictureObject[i].title + " - " + pictureObject[i].date);
                    }
                }
            }
        }
    };
    //APOD site supplies data
    xmlhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=nBflUTiisMEbNwFE9cTulq5qIkwruD7g29CTMU1m&count=3", true);
    xmlhttp.send();
}

function prepareCard(date) {
    $('div.container').append(
        '<div class="row">' + '\n' +
        '<div class="col-md-6">' + '\n' +
        '<div class="card">' + '\n' + '<img class="card-img ' + date + '" src="" alt="card">' + '\n' +
        '<div class="card-body ">' + '<i class="bi bi-heart-fill">' + '</i>' + '<h5 class="card-title ' + date + '">' +
        '<button class=" like-review" onclick="LikeAnimation(" title of the image"); ">' + '<i class="fa fa-heart" id="title-of-the-image"></i> ' +
        '</button> title of the image</h5>' + '\n<p class="card-text ' + date + '">' +
        '</p>\n</div>\n</div>\n</div>\n</div>'
    );
}