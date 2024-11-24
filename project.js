<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessible Photo Gallery</title>
    <style>
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            justify-content: center;
        }
        figure {
            margin: 0;
            padding: 10px;
            border: 1px solid #ccc;
            max-width: 300px;
            cursor: pointer;
        }
        figure:hover, figure:focus {
            background-color: #f0f0f0;
            outline: 2px solid blue;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
        figcaption {
            margin-top: 8px;
            text-align: center;
            padding: 5px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Photo Gallery</h1>
    
    <main class="gallery">
        <figure>
            <img src="/api/placeholder/300/200" alt="Beautiful mountain landscape with snow peaks" 
                onmouseover="showCaption(this)" 
                onmouseleave="hideCaption(this)">
            <figcaption>Mountain Vista</figcaption>
        </figure>

        <figure>
            <img src="/api/placeholder/300/200" alt="Sunset over calm ocean waters" 
                onmouseover="showCaption(this)" 
                onmouseleave="hideCaption(this)">
            <figcaption>Ocean Sunset</figcaption>
        </figure>

        <figure>
            <img src="/api/placeholder/300/200" alt="Autumn forest with colorful leaves" 
                onmouseover="showCaption(this)" 
                onmouseleave="hideCaption(this)">
            <figcaption>Autumn Colors</figcaption>
        </figure>

        <figure>
            <img src="/api/placeholder/300/200" alt="Urban cityscape at night" 
                onmouseover="showCaption(this)" 
                onmouseleave="hideCaption(this)">
            <figcaption>City Lights</figcaption>
        </figure>

        <figure>
            <img src="/api/placeholder/300/200" alt="Desert landscape with red rock formations" 
                onmouseover="showCaption(this)" 
                onmouseleave="hideCaption(this)">
            <figcaption>Desert Vista</figcaption>
        </figure>

        <figure>
            <img src="/api/placeholder/300/200" alt="Peaceful garden with blooming flowers" 
                onmouseover="showCaption(this)" 
                onmouseleave="hideCaption(this)">
            <figcaption>Garden View</figcaption>
        </figure>
    </main>

    <script>
   
        function showCaption(element) {
            console.log("Showing caption for: " + element.alt);
            element.parentElement.style.backgroundColor = "#f0f0f0";
            element.parentElement.style.transform = "scale(1.05)";
            element.parentElement.style.transition = "all 0.3s ease";
        }

   
        function hideCaption(element) {
            console.log("Hiding caption for: " + element.alt);
            element.parentElement.style.backgroundColor = "";
            element.parentElement.style.transform = "scale(1)";
        }

    
        function addTabIndex() {
            console.log("Adding tabindex to figures");
            let figures = document.getElementsByTagName("figure");
            for(let i = 0; i < figures.length; i++) {
                figures[i].setAttribute("tabindex", "0");
            }
        }

       
        window.onload = function() {
        
            addTabIndex();
            
        
            let figures = document.getElementsByTagName("figure");
            for(let figure of figures) {
                figure.onfocus = function() {
                    showCaption(figure.getElementsByTagName("img")[0]);
                };
                figure.onblur = function() {
                    hideCaption(figure.getElementsByTagName("img")[0]);
                };
            }
        };
    </script>
</body>
</html>
