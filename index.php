<?php 
    $pictures_folder = glob("assets/img/pictures/*.{jpg,png,gif}", GLOB_BRACE);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="darkreader-lock">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/sidebar_style.css">
    <link rel="stylesheet" href="assets/css/main_style.css">

    <title>SAFI Beauté</title>
</head>
<body class="">

<nav class="sidebar ">
        <?php
            require_once('./templates/sidebar.php');
        ?>
</nav>


<div id="line_up"></div>



<section id="mainPage"> 
    <div id="modal" class="modal">
        <img class="modal-content" id="modal-image">
    </div>

        <div id="boxDarkMode" title="Switch Mode" onclick="darkModeClick();">
            <img class="emojiToggle" id="lightToggle" src="assets/img/icons/light.png" alt="Enable Dark Mode" title="Enable Dark Mode"></img>
            <img class="emojiToggle" id="darkToggle" src="assets/img/icons/dark.png" alt="Disable Dark Mode" title="Disable Mode" style="display:none;" ></img>
        </div> 
    <div id="gille_tarifs">
        <h1 >Liste des Tarifs</h1>
        
          <h2 class="titre_tarifs">Visage</h2> 
          <div class='ligne_tarif'>  <p>Sourcils (Au Fil) </p> <p class="price">8</p> </div>
          <div class='ligne_tarif'>  <p>Lèvres</p> <p class="price">5</p> </div>
          <div class='ligne_tarif'>  <p>Visage Complet</p> <p class="price">20</p> </div>
          <div class='ligne_tarif'>  <p>Teinture Sourcils et Cils</p> <p class="price">8 / 15</p> </div>
          <div class='ligne_tarif'>  <p>Réhaussement de Cils</p> <p class="price">45</p> </div>
          <div class='ligne_tarif'>  <p>Maquillage Jour / Nuit</p> <p   class="price">25 / 30</p> </div>

          <h2 class="titre_tarifs">Mains et Pieds</h2>
          <div class='ligne_tarif'>  <p>Pose de Semi-Permanent</p> <p class="price">20</p> </div>
          <div class='ligne_tarif'>  <p>Pédicure</p> <p class="price">30</p> </div>
          <div class='ligne_tarif'>  <p>Gel</p> <p class="price">40</p> </div>
          <div class='ligne_tarif'>  <p>Résine</p> <p class="price">45</p> </div>
          <div class='ligne_tarif'>  <p>Capsules Américaines</p> <p class="price"> 35</p> </div>
          <div class='ligne_tarif'>  <p>Porcelaine</p> <p class="price"> 40</p> </div>
          <div class='ligne_tarif'>  <p>Frenc, Strass, Motif</p> <p class="price">5</p> </div>

          <h2 class="titre_tarifs">Autres</h2>
          <div class='ligne_tarif'>  <p>Soin Éclat Bio (Phyt'S)</p> <p class="price">30</p> </div>
          <div class='ligne_tarif'>  <p>Massage 1h (Tous le Corps)</p> <p class="price">50</p> </div>
          <div class='ligne_tarif'>  <p>Massage 30mn (Cervicals / Épaules / Dos)</p> <p class="price">30</p> </div>
          <div class='ligne_tarif'>  <p>Soin Désincrustant Anticomedons Bio (Phyt'S)</p> <p class="price">50</p> </div>
          <div class='ligne_tarif'>  <p>Extensions Cils</p> <p class="price">60 </p> </div>
            <br><br>
          <p class='titleSidebar3'>safibella672@gmail.com</p>
    </div>
    <div id="photoBox">
        <img  class="photo" src="assets/img/pictures/photo1.jpg" alt="photo">
        <img   class="photo" src="assets/img/pictures/photo2.jpg" alt="photo">
        <img   class="photo" src="assets/img/pictures/photo3.jpg" alt="photo">
        <img   class="photo" src="assets/img/pictures/photo4.webp" alt="photo">
        <img   class="photo" src="assets/img/pictures/photo5.jpg" alt="photo">
        <img   class="photo" src="assets/img/pictures/photo6.jpg" alt="photo">
    </div>



</div>
</section>

</body>
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="script.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</html>
